import React, { useState } from "react";
import Search from "./Search";
import "../stylesheets/main-page.css";
import Books from "./Books";
import BooksMain from "./BooksMain";
import axios from "axios";
import BookList from "./BookList";

function MainPage() {
  const [state, setState] = useState({
    s: "",
    books: [],
    //books: bestsellers.books,
    // sort: "",
  });
  const apiurl = "https://www.googleapis.com/books/v1/volumes";

  const search = (e) => {
    e.preventDefault();
    axios(apiurl + "?q=" + state.s).then(({ data }) => {
      //cleanData(data);
      let bookData = cleanData(data);
      let books = bookData;
      console.log(books);

      setState((prevState) => {
        return { ...prevState, books: books };
      });
    });
  };

  const handleSearch = (e) => {
    let s = e.target.value;
    if (s.length === 0) {
      setState((prevState) => {
        return { ...prevState, books: [] };
      });
    }

    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };

  const cleanData = (data) => {
    const cleanedData = data.items.map((book) => {
      let bookData = {};
      bookData.publishedDate = book.volumeInfo.publishedDate
        ? book.volumeInfo.publishedDate.substring(0, 4)
        : "n/a";
      bookData.thumbnail = book.volumeInfo.imageLinks.thumbnail
        ? book.volumeInfo.imageLinks.thumbnail
        : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kargomaster.com%2F31080c&psig=AOvVaw3B0Q6DTfXepYY2AsDTY57t&ust=1594258444617000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJiGiNTBvOoCFQAAAAAdAAAAABAI";
      bookData.authors = book.volumeInfo.authors;
      bookData.title = book.volumeInfo.title;
      return bookData;
    });

    return cleanedData;
  };
  return (
    <>
      <div className="main-page">
        <div className="mainpage-header">
          <h2>Your next favorite book can't wait to meet you!</h2>
        </div>
        <main className="mainpage-search">
          {<Search handleSearch={handleSearch} search={search} />}
        </main>
      </div>
      {state.books.length !== 0 ? (
        <div className="books-search-container">
          <BookList books={state.books} />
        </div>
      ) : (
        <BooksMain />
      )}
    </>
  );
}

export default MainPage;
