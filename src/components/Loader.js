import React from "react";
import { motion, useCycle } from "framer-motion";
const loaderVariants = {
  animateOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },

  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  },
};
const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animateOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}></motion.div>
      <div onClick={() => cycleAnimation()} className="loader-btn">Cycle Loader</div>
    </>
  );
};

export default Loader;
