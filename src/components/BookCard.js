import React from "react";
import "../stylesheets/book-card.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.volumeInfo.imageLinks.thumbnail} alt="book"></img>
      <h3>{book.volumeInfo.title}</h3>
      <p>Author: {book.volumeInfo.authors}</p>
      <p>Published: {book.volumeInfo.publishedDate}</p>
      <p>{book.volumeInfo.averageRating}</p>
    </div>
  );
};

export default BookCard;
