import React, { Component } from "react";
import Book from "./Book";
import "../stylesheets/booksmain.css";
import bestsellers from "./bestsellers.js";

class BooksMain extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     books: bestsellers,
  //   };
  // }
  static defaultProps = {
    books: [
      {
        id: 1,
        title: "Get Out of Your Head: Stopping the Spiral of Toxic Thoughts",
        authors: "Jennie Allen",
        publishedDate: "2020",
        thumbnail: "../images/get-out-of-your-head.jpg",
        //"https://images-na.ssl-images-amazon.com/images/I/51ZZJMQK93L._SX336_BO1,204,203,200_.jpg",
      },
      {
        id: 2,
        title:
          "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
        authors: "James Clear",
        publishedDate: "2018",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/51Fqn4+UodL._SX328_BO1,204,203,200_.jpg",
      },
      {
        id: 3,
        title: "Grit: The Power of Passion and Perseverance",
        authors: "Angela Duckworth",
        publishedDate: "2018",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/51dBUts2s5L._SX326_BO1,204,203,200_.jpg",
      },
      {
        id: 4,
        title:
          "Leaders Eat Last: Why Some Teams Pull Together and Others Don't",
        authors: "Simon Sinek",
        publishedDate: "2017",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/518JdacNycL._SX330_BO1,204,203,200_.jpg",
      },
      {
        id: 5,
        title: "Educated: A Memoir",
        authors: "Tara Westover",
        publishedDate: "2018",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/41+aN7ZbS9L._SX327_BO1,204,203,200_.jpg",
      },
      {
        id: 6,
        title: "Behave: The Biology of Humans at Our Best and Worst",
        authors: "Robert M. Sapolsky",
        publishedDate: "2018",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/51loF4DaYOL._SX324_BO1,204,203,200_.jpg",
      },
      {
        id: 7,
        title: "Why We Sleep: Unlocking the Power of Sleep and Dreams",
        authors: "Mathhew Walker",
        publishedDate: "2017",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/51HL0dOfXNL._SX329_BO1,204,203,200_.jpg",
      },
      {
        id: 8,
        title: "Dare to Lead: Brave Work. Tough Conversations. Whole Hearts",
        authors: "Brene Brown",
        publishedDate: "2018",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/41ALga4mxUL._SX328_BO1,204,203,200_.jpg",
      },
      {
        id: 9,
        title: "Thinking Fast and Slow",
        authors: "Daniel Kahneman",
        publishedDate: "2011",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/41wI53OEpCL._SX332_BO1,204,203,200_.jpg",
      },
      {
        id: 10,
        title: "Essentialism: The Disciplined Pursuit of Less",
        authors: "Greg McKeown",
        publishedDate: "2014",
        thumbnail:
          "https://images-na.ssl-images-amazon.com/images/I/51sSdtnS+jL._SX330_BO1,204,203,200_.jpg",
      },
    ],
  };

  openPopup = (id) => {
    // console.log("yes", id);
  };

  closePopup = () => {};

  render() {
    const bookItem = this.props.books.map((b) => (
      <Book
        id={b.id}
        key={b.id}
        title={b.title}
        authors={b.authors}
        publishedDate={b.publishedDate}
        thumbnail={b.thumbnail}
        openPopup={this.openPopup}
      />
    ));
    return (
      <section className="BookMain">
        <div className="BookMain-header">
          <h1>Bookscanner's Top 10 Books</h1>
        </div>
        <div className="BookMain-Cards">
          {bookItem}
          {/* {this.state.book.map((b) => (
            <Book
              key={b.id}
              title={b.title}
              authors={b.authors}
              publishedDate={b.publishedDate}
              thumbnail={b.thumbnail}
              onClick={this.openPopup}
            />
          ))} */}
        </div>
      </section>
    );
  }
}

export default BooksMain;
