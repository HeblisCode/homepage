import React, { useState } from "react";

export default function SearchBar() {
  const [inputContent, setInputContent] = useState("");

  const updateInput = (e) => {
    const input = e.target;
    setInputContent(input.value);
  };

  const search = () => {
    window.location.href = "https://www.google.com/search?q=" + inputContent;
  };

  return (
    <div>
      <input type="text" onChange={updateInput} value={inputContent}></input>
      <button onClick={search}>SEARCH</button>
    </div>
  );
}
