import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};
const fadeInVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const FadeIn = ({ children }: Props) => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible" viewport={{margin: "100% 0px -300px 0px"}}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
