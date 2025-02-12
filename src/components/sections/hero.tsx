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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative text-white bg-background overflow-hidden">
      {/* Full-Screen Video */}
      <motion.div
        style={{ opacity }}
        ref={imageRef}
        className="absolute inset-0 w-screen h-screen">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://www.apple.com/105/media/us/apple-tv-plus/2024/bcf2fe5a-eb2c-4ae9-b289-a8dac7eb5f1c/anim/sizzle/large.mp4"
        ></video>
        <div className="bg-background absolute inset-0 opacity-50"></div>
      </motion.div>

      {/* Text Content */}
      <Container className="relative z-10 flex flex-col justify-center items-start min-h-screen">
        <motion.div
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          className="space-y-12">
          <h1 className="mt-40 text-4xl md:text-5xl font-bold leading-[1.05]">
            All Apple Originals. <br />
            Only on Apple TV+
          </h1>
          <Button className="mb-16" size="lg">
            Stream Now
          </Button>
          <p className="font-semibold">Watch on the app</p>
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
