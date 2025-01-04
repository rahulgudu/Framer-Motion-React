import React from "react";
import { motion } from "framer-motion";
const Order = ({ pizza }) => {
  const orderVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        when: "beforeChildren",
        type: "spring",
        mass: 0.4, // more the number faster it finishes
        damping: 8,
        staggerChildren: 2, // it gives indivual animation to the children elements
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
  return (
    <motion.div
      className="container order"
      variants={orderVariant}
      initial="hidden"
      animate="visible">
      <h2>Thank you for your order :)</h2>
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
