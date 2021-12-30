import { motion } from "framer-motion";
import "./Backdrop.css";
import React from "react";
import styled from "styled-components";

export default function Backdrop({ children, handleClick }) {
  return (
    <StyledBackdrop
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </StyledBackdrop>
  );
}

const StyledBackdrop = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.459);
  z-index: 100;
`;
