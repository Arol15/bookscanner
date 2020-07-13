import React, { Component } from "react";
import Book from "./Book";
import "../stylesheets/booksmain.css";
import bestsellers from "./bestsellers.js";

class BooksMain extends Component {
  constructor() {
    super();
    this.state = {
      books: bestsellers,
    };
  }

  render() {
    const bookItem = this.state.books.books.map((b) => (
      <Book
        id={b.id}
        key={b.id}
        title={b.title}
        authors={b.authors}
        publishedDate={b.publishedDate}
        thumbnail={b.thumbnail}
        rating={b.rating}
        description={b.description}
      />
    ));
    return (
      <section className="BookMain">
        <div className="BookMain-header">
          <h1>Bookscanner's Top 10 Books</h1>
        </div>
        <div className="BookMain-Cards">{bookItem}</div>
      </section>
    );
  }
}

export default BooksMain;
