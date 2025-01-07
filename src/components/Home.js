import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  const buttonAnimations = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(255, 255, 255)",
      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
      transition: {
        duration: 0.2,
        yoyo: 10, // yoyo is the transition property where we can add repeated animation, here 10 denotes the animation goes for 10 times and if we want it for infinite times we will add Infinite
      },
    },
  };
  return (
    <motion.div className="home container" animate={{}}>
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonAnimations} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
