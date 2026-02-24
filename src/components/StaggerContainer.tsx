import { motion } from "framer-motion";

export const StaggerContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"          // 👈 trigger on scroll
      viewport={{ once: true, margin: "-100px" }} 
    >
      {children}
    </motion.div>
  );
};