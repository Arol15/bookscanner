import React from "react";
import "../stylesheets/popup.css";

function Popup(selected, closePopup) {
  return (
    <section className="popup">
      <div className="content"></div>
      <h2>
        {selected.title} <span>({selected.publishedDate})</span>
      </h2>
      {/* <p className="rating">Rating: {selected.rating}</p> */}
      <div>
        <img src={selected.thumbnail} alt="PIC"></img>
        {/* <p>{selected.description}</p> */}
      </div>
      <button className="close" onClick={closePopup}>
        Close
      </button>
    </section>
  );
}

export default Popup;
