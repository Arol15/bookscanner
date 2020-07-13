import React from "react";
import "../stylesheets/book.css";
import bestsellers from "./bestsellers.js";

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: bestsellers,
      showModal: false,
    };
    //console.log(this.state);
  }

  // openPopup = (id) => {
  //   //console.log("yes", id);
  //   this.state.books.books.map((book) => {
  //     if (book.id === id) {
  //       return book;
  //     }
  //   });
  // };
  showModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  closePopup = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      title,
      authors,
      publishedDate,
      thumbnail,
      id,
      rating,
      description,
    } = this.props;
    return this.state.showModal ? (
      <>
        <div className="popup" onClick={() => this.showModal(id)}>
          {/* <div onClick={this.closePopup}>X</div> */}
          {/* other info..div. */}
          {/* <div onClick={() => this.openPopup(id)} className="Book"> */}
          <div onClick={() => this.showModal(id)} className="content">
            <h3>
              {title}
              <span> ({publishedDate})</span>
            </h3>
            <div className="popup-author">by {authors}</div>
            <div className="content-container">
              <img className="popup-img" src={thumbnail} alt={title} />
              <div className="description">{description}</div>
            </div>
            <p className="rating">Rating: {rating}</p>
            <button className="close" onClick={this.closePopup}>
              Close
            </button>
          </div>
        </div>
      </>
    ) : (
      <>
        {/* <div onClick={() => this.openPopup(id)} className="Book"> */}
        <div onClick={() => this.showModal(id)} className="Book">
          {/* <div className="Book"> */}
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
