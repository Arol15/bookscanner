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
        />
        <button type="submit" className="search-button">
          <i className="search icon"></i>
        </button>
        {/* <select defaultValue="sort" onChange={handleSort}> */}
        {/* <select defaultValue="sort">
          <option disabled value="sort">
            Sort
          </option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select> */}
      </form>
    </section>
  );
}

export default Search;
