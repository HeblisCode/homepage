import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

export default function Modal({ text, handleClose, handleSubmit }) {
  const dropInAnimation = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0vh",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  console.log(handleClose);

  return (
    <Backdrop handleClick={handleClose}>
      <StyledModal
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropInAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>{text}</p>
        <Button text={"Confirm"} handleClick={handleClose} />
        <Button text={"Cancel"} handleClick={handleClose} />
      </StyledModal>
    </Backdrop>
  );
}

const StyledModal = styled(motion.div)`
  height: 15rem;
  width: 30rem;
  background-color: red;
  position: absolute;
`;
