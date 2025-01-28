import { useScroll, motion, useTransform } from "framer-motion";
import Button from "../Button";
import Container from "../Container";
import { useRef } from "react";

const Hero = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <div className="relative h-[300vh] text-white bg-background">
      <motion.div
        style={{ opacity }}
        ref={imageRef}
        className="absolute left-0 -top-[44px] w-full h-[200vh]">
        <img
          src="/posters/herobg.jpg"
          className="h-[100vh] w-full sticky top-0"
        />
        <div className="bg-background absolute inset-0 opacity-50"></div>
      </motion.div>
      <Container className="relative z-10 pb-7 min-h-[100svh]">
        <motion.div
          variants={textVariants}
          whileInView="visible"
          animate="hidden"
          exit="hidden"
          viewport={{ amount: 0.9 }}
          className="flex flex-col justify-center space-y-12 items-start">
          <h1 className="mt-40 text-5xl font-bold leading-[1.05]">
            All Apple Orignal. <br />
            Only on Apple TV+
          </h1>
          <Button className="mb-16" size="lg">
            Stram Now
          </Button>
          <p className="font-semibold">Watch on the app</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
