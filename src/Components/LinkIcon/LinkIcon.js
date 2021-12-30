import { AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import Form from "../Form/Form";

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

  return (
    <div>
      <img src={linkObj.icon} alt="site logo"></img>
      <p>{linkObj.name}</p>
      <a href={linkObj.url}>Test Link</a>
      {isEditable && (
        <button onClick={() => handleDelete(linkObj.id)}>DELETE</button>
      )}
      {isEditable && <button onClick={openForm}>EDIT URL</button>}
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
    </div>
  );
}
