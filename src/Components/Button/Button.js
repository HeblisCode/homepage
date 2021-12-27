import { motion } from "framer-motion";
import React from "react";

export default function Button({ text, handleClick }) {
  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {text}
    </motion.button>
  );
}
