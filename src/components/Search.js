import React from "react";
import "../stylesheets/search.css";

function Search({ handleSearch, search }) {
  return (
    <section className="searchbox-wrap">
      <form className="search-form" onSubmit={search}>
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search books"
          name=""
          id=""
          className="searchbox"
          //   onKeyPress={search}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
