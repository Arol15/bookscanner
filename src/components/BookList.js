import React from "react";
import BookCard from "./BookCard";
import "../stylesheets/book-list.css";

function BookList({ books }) {
  return (
    <section className="Booklist">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}

export default BookList;
