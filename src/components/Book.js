import React from "react";
import "../stylesheets/book.css";

class Book extends React.Component {
  openPopup = (id) => {
    console.log("yes", id);
    // this.setState((prevState) => {
    //   const updatedBooks = prevState.books.map((book) => {
    //     if (book.id === id) {
    //       book.id = selected.id;
    //     }
    //   });
    // });
  };

  closePopup = () => {};
  render() {
    const { title, authors, publishedDate, thumbnail, id } = this.props;
    return (
      <>
        <div className="hidden"></div>
        <div onClick={() => this.openPopup(id)} className="Book">
          <img src={thumbnail} alt={title} />
          <h1>{title}</h1>
          <div>Author: {authors}</div>
          <div>Published: {publishedDate}</div>
        </div>
      </>
    );
  }
}

export default Book;
