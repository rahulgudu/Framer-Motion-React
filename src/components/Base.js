import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const containeVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 121,
      },
    },
  };

  const nextVarients = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      variants={containeVariants}
      initial="hidden"
      animate="visible"
      className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              whileHover={{
                scale: 1.3,
                originX: 0,
                color: "orange",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              key={base}
              onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextVarients}
          // variants allows us to propagte from the parent to children component for e.g. we have already added the initial and animate in the parent div (base container) so, we don't need to again add it here provided the both children and parent should have the hidden and visible key and value component. The inital and final state will be ofcourse different as per the variant object
          // initial="hidden"
          // animate="visible"
          className="next">
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255, 255, 255)",
                boxShadow: "0px 0px 8px rgb(255, 255, 255)",
              }}>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
