import React, { useState } from "react";
import styled from "styled-components";
import MaterialIconButton from "../MaterialIconButton/MaterialIconButton";

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
    <StyledSearchBar>
      <input type="text" onChange={updateInput} value={inputContent}></input>
      <MaterialIconButton
        icon="search"
        size="5%"
        bgColor="transparent"
        handleClick={search}
      />
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  background: #ffffff60;
  width: 50%;
  height: 3.5rem;
  border-radius: 15px;
  opacity: 1;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  input {
    width: 93%;
    height: 70%;
    background-color: transparent;
    font-size: 1.5rem;
    border: none;
  }
`;
