import React, { useState } from "react";
import "../stylesheets/book-card.css";

// class BookCard extends React.Compoonent {
//   constructor() {
//     super();
//     this.state = {
//       books: "",
//       showModal: false,
//     };
//   }
//   showModal = () => {
//     this.setState({ showModal: !this.state.showModal });
//   };
//   closePopup = () => {
//     this.setState({ showModal: false });
//   };
//   render() {
//     const {
//       title,
//       authors,
//       publishedDate,
//       thumbnail,
//       id,
//       rating,
//       description,
//     } = this.props;
//     return this.state.showModal ? (
//       <>
//         <div className="popup" onClick={() => this.showModal(id)}>
//           {/* <div onClick={this.closePopup}>X</div> */}
//           {/* other info..div. */}
//           {/* <div onClick={() => this.openPopup(id)} className="Book"> */}
//           <div onClick={() => this.showModal(id)} className="content">
//             <h3>
//               {title}
//               <span> ({publishedDate})</span>
//             </h3>
//             <div className="popup-author">by {authors}</div>
//             <div className="content-container">
//               <img className="popup-img" src={thumbnail} alt={title} />
//               <div className="description">{description}</div>
//             </div>
//             <p className="rating">Rating: {rating}</p>
//             <button className="close" onClick={this.closePopup}>
//               Close
//             </button>
//           </div>
//         </div>
//       </>
//     ) : (
//       <>
//         <div onClick={() => this.showModal(id)} className="book-card">
//           <img src={thumbnail} alt="book"></img>
//           <h3>{title}</h3>
//           <p>Author: {authors}</p>
//           <p>Published: {publishedDate}</p>
//         </div>
//       </>
//     );
//   }
// }

const BookCard = ({ book }) => {
  const [state, setState] = useState({
    showModal: false,
  });

  const showModal = () => {
    setState((prevState) => {
      return { ...prevState, showModal: !state.showModal };
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, showModal: false };
    });
  };

  return state.showModal ? (
    <>
      <div className="popup" onClick={() => showModal(book.id)}>
        {/* <div onClick={this.closePopup}>X</div> */}
        {/* other info..div. */}
        {/* <div onClick={() => this.openPopup(id)} className="Book"> */}
        <div onClick={() => showModal(book.id)} className="content">
          <h3>
            {book.title}
            <span> ({book.publishedDate})</span>
          </h3>
          <div className="popup-author">by {book.authors}</div>
          <div className="content-container">
            <img className="popup-img" src={book.thumbnail} alt={book.title} />
            <div className="description">{book.description}</div>
          </div>
          <p className="rating">Rating: {book.rating}</p>
          <button className="close" onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
    </>
  ) : (
    <>
      <div onClick={() => showModal(book.id)} className="book-card">
        <img src={book.thumbnail} alt="book"></img>
        <h3>{book.title}</h3>
        <p>Author: {book.authors}</p>
        <p>Published: {book.publishedDate}</p>
      </div>
    </>
  );
};

export default BookCard;

// <div className="book-card">
// <img src={book.thumbnail} alt="book"></img>
// <h3>{book.title}</h3>
// <p>Author: {book.authors}</p>
// <p>Published: {book.publishedDate}</p>
// </div>
