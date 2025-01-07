import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const buttonAnimations = {
    // visible: {
    //   x: [0, -20, 20, -20, 20, 0], // keyframes
    //   transition: {
    //     delay: 2,
    //   },
    // },

    hover: {
      scale: [1.1, 1, 1.1, 1, 1.1, 1],
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    },
  };
  return (
    <motion.div className="home container" animate={{}}>
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={buttonAnimations}
          // animate="visible"
          whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
