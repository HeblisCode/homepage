import { AnimatePresence } from "framer-motion";
import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";

export default function LinkIcon({
  linkObj,
  isEditable,
  handleUpdate,
  handleDelete,
}) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <img src={linkObj.icon} alt="site logo"></img>
      <p>{linkObj.name}</p>
      <a href={linkObj.url}>Test Link</a>
      {isEditable && (
        <button onClick={() => handleDelete(linkObj.id)}>DELETE</button>
      )}
      {isEditable && <button onClick={openModal}>EDIT URL</button>}
      <AnimatePresence>
        {showModal && (
          <Modal
            text="test"
            handleClose={closeModal}
            handleSubmit={handleUpdate}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
