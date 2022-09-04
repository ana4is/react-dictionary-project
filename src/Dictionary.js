import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(" ");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionarySubmit(response) {
    setResults(response.data[0]);
  }

  function handlePexelsSubmit(response) {
    setPhotos(response.data.photos);
  }
  //Documentation : https://dictionaryapi.dev/

  function formSearch(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionarySubmit);

    let pexelsApiKey =
      "563492ad6f91700001000001b3d405daab8246ddbe07bf6302dbf291 ";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsSubmit);
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
      <Photos photos={photos} />
    </div>
  );
}
