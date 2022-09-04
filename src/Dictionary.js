import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);

  function handleSubmit(response) {
    setResults(response.data[0]);
  }
  //Documentation : https://dictionaryapi.dev/

  function formSearch(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleSubmit);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={formSearch}>
          <input
            type="search"
            placeholder="Write a word..."
            onChange={handleKeywordChange}
          />
        </form>
        <p className="FormParagraph">
          Suggested words: plane, table, sunset, yoga, world, ...
        </p>
      </section>
      <Results results={results} />
    </div>
  );
}
