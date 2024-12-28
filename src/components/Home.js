import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div className="home container" animate={{}}>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{type: "tween", delay: 0.2, duration: 0.2}}>
        Welcome to Pizza Joint
      </motion.h2>
      <Link to="/base">
        <motion.button animate={{}}>Create Your Pizza</motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
