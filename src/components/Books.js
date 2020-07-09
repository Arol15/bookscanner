import React, { useState } from "react";
import Search from "./Search";
import BookList from "./BookList";
import "../stylesheets/books.css";
import axios from "axios";

const Books = () => {
  const [state, setState] = useState({
    s: "",
    books: [],
    // sort: "",
  });

  const apiurl = "https://www.googleapis.com/books/v1/volumes";

  const search = (e) => {
    e.preventDefault();
    axios(apiurl + "?q=" + state.s).then(({ data }) => {
      cleanData(data);
      let books = data.items;
      //   console.log(books);

      setState((prevState) => {
        return { ...prevState, books: books };
      });
    });
  };

  const handleSearch = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  //   const handleSort = (e) => {
  //     // console.log(e.target.value);
  //     let sort = e.target.value;

  //     setState((prevState) => {
  //       return { ...prevState, sort: sort };
  //     });
  //   };

  const cleanData = (data) => {
    const cleanedData = data.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (!book.volumeInfo.hasOwnProperty("imageLinks")) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kargomaster.com%2F31080c&psig=AOvVaw3B0Q6DTfXepYY2AsDTY57t&ust=1594258444617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiGiNTBvOoCFQAAAAAdAAAAABAI",
        };
      }
      return book;
    });
    return cleanedData;
  };

  //   const [sortType, setSortType] = useState('sort') useEffect hook

  //   const sortedBooks = (data) => {
  //     data.items.sort((a, b) => {
  //       if (sort === "Newest") {
  //         return (
  //           parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
  //           parseInt(a.volumeInfo.publishedDate.substring(0, 4))
  //         );
  //       } else if (sort === "Oldest") {
  //         return (
  //           parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
  //           parseInt(b.volumeInfo.publishedDate.substring(0, 4))
  //         );
  //       }
  //       setState((prevState) => {
  //         return { ...prevState, sort: sort };
  //       });
  //     });
  //   };

  return (
    <main className="books-wrapper">
      <Search
        handleSearch={handleSearch}
        search={search}
        // handleSort={handleSort}
      />
      <BookList books={state.books} />
    </main>
  );
};

export default Books;
