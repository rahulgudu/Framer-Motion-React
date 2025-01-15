import React from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
const Modal = ({ showModal, setShowModal }) => {
  const backdrop = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
