import React from "react";
import "../stylesheets/book.css";

class Book extends React.Component {
  render() {
    const { title, authors, publishedDate, thumbnail } = this.props;
    return (
      <div className="Book">
        <img src={thumbnail} alt={title} />
        <h1>{title}</h1>
        <div>Author: {authors}</div>
        <div>Published: {publishedDate}</div>
      </div>
    );
  }
}

export default Book;
