import { AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Form from "../Form/Form";
import MaterialIconButton from "../MaterialIconButton/MaterialIconButton";

export default function LinkIcon({
  linkObj,
  isEditable,
  handleUpdate,
  handleDelete,
}) {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  const submitForm = (formFields) => {
    const nameValue = formFields[0].value;
    const urlValue = formFields[1].value;
    handleUpdate(linkObj.id, nameValue, urlValue);
    setShowForm(false);
  };

  const formFields = [
    {
      type: "text",
      name: "Name",
      placeholder: "Insert your shortcut name",
      value: linkObj.name,
    },
    {
      type: "text",
      name: "URL",
      placeholder: "https://www.example.com",
      value: linkObj.url,
    },
  ];

  const goTo = () => {
    if (!isEditable) window.location.href = linkObj.url;
  };

  return (
    <>
      <StyledLinkIcon isEditable={isEditable}>
        <div onClick={goTo} isEditable={isEditable} className="mainIcon">
          <img src={linkObj.icon} alt="site logo"></img>
          {isEditable && (
            <MaterialIconButton
              className="deleteIcon"
              handleClick={() => handleDelete(linkObj.id)}
              icon="close"
              size="1rem"
              bgColor="#DA50FB"
              color="white"
            />
          )}
          {isEditable && (
            <MaterialIconButton
              className="editIcon"
              handleClick={openForm}
              icon="edit"
              size="1rem"
              bgColor="#24B0D4"
              color="white"
            />
          )}
        </div>
        <p>{linkObj.name}</p>
      </StyledLinkIcon>
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
    </>
  );
}

const StyledLinkIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .mainIcon {
    background-color: white;
    width: 5rem;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: ${({ isEditable }) => (isEditable ? "15px" : "50%")};
    transition: all 0.1s;
  }

  .mainIcon > img {
    width: 24px;
    height: 24px;
  }

  .deleteIcon {
    position: absolute;
    right: 10%;
    top: 10%;
  }

  .editIcon {
    position: absolute;
    left: 10%;
    bottom: 10%;
  }
`;
