import { useState } from "react";
import styled from "styled-components";
import Button from "./Components/Button/Button";
import LinkContainer from "./Components/LinkContainer/LinkContainer";
import SearchBar from "./Components/SearchBar/SearchBar";
import GlobalStyle from "./globalStyles";
import Title from "./Components/Title/Title";
import useConfig from "./utils/useConfig";
import { AnimatePresence } from "framer-motion";
import Form from "./Components/Form/Form";

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

  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const submitForm = (fields) => {
    const name = fields[0].value;
    const url = fields[1].value;
    addLink(name, url);
    setShowForm(false);
  };

  const formFields = [
    {
      type: "text",
      name: "Name",
      placeholder: "Insert your shortcut name",
      value: "",
    },
    {
      type: "text",
      name: "URL",
      placeholder: "https://www.example.com",
      value: "",
    },
  ];

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
      <Button text={"TEST ADD"} handleClick={openForm} />
      <AnimatePresence>
        {showForm && (
          <Form
            title={"Update Link"}
            fields={formFields}
            close={closeForm}
            submit={submitForm}
            id={"updateLinksForm"}
          />
        )}
      </AnimatePresence>
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
