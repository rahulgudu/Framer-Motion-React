import { motion } from "framer-motion";

export const MotionReveal = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,          // 👈 start lower
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1], // Apple easing
          },
        },
      }}
      whileHover={{
        y: -6,
        scale: 1.05,
        transition: { duration: 0.25 },
      }}
    >
      {children}
    </motion.div>
  );
};