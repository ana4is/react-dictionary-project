import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");

  function formSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}'s definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={formSearch}>
        <input
          type="search"
          placeholder="Write a word..."
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
