import React from "react";
import "../stylesheets/book-card.css";

const BookCard = ({ book }) => {
  console.log(book);

  // openPopup = (id) => {
  //   console.log("yes", id);
  // };

  //onClick={() => openPopup(id)}

  return (
    <div className="book-card">
      <img src={book.thumbnail} alt="book"></img>
      {/* <img src={p} alt="book"></img> */}

      {/* <h3>{book.volumeInfo.title}</h3> */}
      <h3>{book.title}</h3>
      {/* <p>Author: {book.volumeInfo.authors}</p> */}
      <p>Author: {book.authors}</p>

      <p>
        Published: {book.publishedDate}
        {/* // ? "Not available"
          // : book.publishedDate.substring(0, 4) */}
      </p>
      {/* <p>{book.volumeInfo.averageRating}</p> */}
    </div>
  );
};

export default BookCard;
