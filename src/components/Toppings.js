import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  const toppingsVariant = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 121,
      },
      exit: {
        x: "-100vw",
        transition: {
          ease: "easeInOut",
        },
      },
    },
  };

  const buttonAnimations = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        duration: 0.2,
        yoyo: 10,
      },
    },
  };

  return (
    <motion.div
      variants={toppingsVariant}
      initial="hidden"
      animate="visible"
      className="toppings container"
      exit="exit">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "orange",
              }}>
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button variants={buttonAnimations} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
