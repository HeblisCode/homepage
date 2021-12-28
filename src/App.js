import { useState } from "react";
import styled from "styled-components";
import Button from "./Components/Button/Button";
import LinkContainer from "./Components/LinkContainer/LinkContainer";
import SearchBar from "./Components/SearchBar/SearchBar";
import GlobalStyle from "./globalStyles";
import Title from "./Components/Title/Title";
import useConfig from "./utils/useConfig";

function App() {
  const [titleManager, linksManager] = useConfig();
  const [isEditable, setIsEditable] = useState(false);

  const addLink = (name, url) => {
    linksManager.addLink(name, url);
  };

  const deleteLink = (id) => {
    linksManager.deleteLink(id);
  };

  const updateLink = (id, name, url) => {
    linksManager.updateLink(id, name, url);
  };

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const test = () => {
    addLink("testLink123", "https://www.reddit.com");
  };

  return (
    <StyledApp className="App">
      <GlobalStyle />
      <Title title={titleManager.title.string} />
      <SearchBar />
      {linksManager.links && linksManager.links.length > 0 ? (
        <LinkContainer
          linksArray={linksManager.links}
          isEditable={isEditable}
          handleUpdate={updateLink}
          handleDelete={deleteLink}
        />
      ) : (
        <p>ADD SOME LINKS</p>
      )}
      <Button text={"TEST ADD"} handleClick={test} />
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
