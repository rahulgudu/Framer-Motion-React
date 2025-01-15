import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const orderVariant = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      when: "beforeChildren",
      type: "spring",
      mass: 0.4, // less the number faster it finishes
      damping: 8,
      staggerChildren: 0.4, // it gives indivual animation to the children elements
      stiffness: 121,
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza, setShowModal }) => {
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);
  return (
    <motion.div
      className="container order"
      variants={orderVariant}
      initial="hidden"
      animate="visible">
      <h2 exit={{ opacity: 0 }}>Thank you for your order :)</h2>

      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>

      {pizza.toppings.map((topping) => (
        <motion.div variants={childVariants} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
