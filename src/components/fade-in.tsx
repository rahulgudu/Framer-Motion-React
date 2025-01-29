import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: React.ReactNode;
};
const FadeIn = ({ children }: Props) => {
  return <motion.div>{children}</motion.div>;
};

export default FadeIn;
