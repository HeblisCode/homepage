import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Components/Button/Button";
import LinkContainer from "./Components/LinkContainer/LinkContainer";
import SearchBar from "./Components/SearchBar/SearchBar";
import GlobalStyle from "./globalStyles";
import Title from "./Title/Title";

function App() {
  const config = {
    title: "testTitle",
    links: [
      {
        name: "testLinkName",
        url: "https://www.google.com",
        icon: "https://www.google.com/s2/favicons?domain=google.com",
      },
      {
        name: "testLinkName2",
        url: "https://www.youtube.com",
        icon: "https://www.google.com/s2/favicons?domain=youtube.com",
      },
    ],
  };
  const [isEditable, setIsEditable] = useState(false);

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <StyledApp className="App">
      <GlobalStyle />
      <Title title={config.title} />
      <SearchBar />
      <LinkContainer linksArray={config.links} isEditable={isEditable} />
      <Button text={isEditable ? "Done" : "Edit"} handleClick={toggleEdit} />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default App;
