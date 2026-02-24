import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import Button from "../Button";

const Carousel = () => {
  const { width, height } = useWindowSize();

  // ✅ FIX 1: Scroll container ref
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  // ✅ FIX 2: Correct scroll tracking
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end end"],
  });

  // --- SAME SCALE LOGIC (UNCHANGED) ---
  const maximunScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  // ✅ FIX 3: Wider scale curve
  const scale = useTransform(
    scrollYProgress,
    [0.25, 0.45, 0.7],
    [maximunScale * 1.1, maximunScale, 1],
  );

  // ✅ FIX 4: Stable opacity & slide
  const postersOpacity = useTransform(scrollYProgress, [0.55, 0.75], [0, 1]);

  const posterTranlateXLeft = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    [-40, 0],
  );

  const posterTranlateXRight = useTransform(
    scrollYProgress,
    [0.55, 0.75],
    [40, 0],
  );

  // --- SAME VARIANT LOGIC, BUT STABLE ---
  const [carouselVariant, setCarouselVarient] = useState<"inactive" | "active">(
    "inactive",
  );

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (p > 0.55) setCarouselVarient("active");
    if (p < 0.45) setCarouselVarient("inactive");
  });

  return (
    <motion.section
      ref={carouselWrapperRef}
      animate={carouselVariant}
      className="bg-background">
      {/* ✅ FIX 5: Explicit scroll space */}
      <div className="h-[260vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="flex relative gap-5">
            {/* LEFT POSTER */}
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranlateXLeft }}
              className="aspect-[9/16] md:aspect-video shrink-0 w-[300px] md:w-[60vw] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-fill"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>

            {/* CENTER POSTER */}
            <motion.div
              style={{ scale }}
              className="relative aspect-[9/16] md:aspect-video shrink-0 w-[300px] md:w-[60vw] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-fill"
                src={movies[1].poster}
                alt={movies[1].name}
              />

              <motion.div
                variants={{
                  active: { opacity: 1, y: 0 },
                  inactive: { opacity: 0, y: 20 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute flex flex-col md:flex-row items-center justify-between p-5 text-white text-lg left-0 bottom-0 w-full">
                <p>{movies[1].name}</p>
                <Button>Watch Now</Button>
              </motion.div>
            </motion.div>

            {/* RIGHT POSTER */}
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranlateXRight }}
              className="aspect-[9/16] md:aspect-video shrink-0 w-[300px] md:w-[60vw] rounded-2xl overflow-hidden">
              <img
                className="w-full h-full object-fill"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SMALL CAROUSELS */}
      <div className="space-y-4 -mt-24 pt-8 overflow-hidden">
        <motion.div
          variants={{
            active: { opacity: 1, y: 0 },
            inactive: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.3 }}
          className="animate-carousel-move1">
          <SmallCarousel movies={randomMoviesSet1} />
        </motion.div>

        <motion.div
          variants={{
            active: { opacity: 1, y: 0 },
            inactive: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.3 }}
          className="animate-carousel-move">
          <SmallCarousel movies={randomMoviesSet2} />
        </motion.div>
      </div>
    </motion.section>
  );
};

const SmallCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="">
      <div className="flex gap-3">
        {movies.map((movies, index) => (
          <div
            key={`${movies.name} - ${index}`}
            className="w-[40vw] md:w-[23vw] aspect-video shrink-0">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={movies.poster}
              alt={movies.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
