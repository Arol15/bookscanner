import React, { useState } from "react";
import Search from "./Search";
import BookList from "./BookList";
import "../stylesheets/books.css";
import axios from "axios";

const Books = () => {
  const [state, setState] = useState({
    s: "",
    books: [],
  });

  const apiurl = "https://www.googleapis.com/books/v1/volumes";

  const search = (e) => {
    e.preventDefault();
    axios(apiurl + "?q=" + state.s).then(({ data }) => {
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
  return (
    <main className="books-wrapper">
      <Search handleSearch={handleSearch} search={search} />
      <BookList books={state.books} />
    </main>
  );
};

export default Books;
