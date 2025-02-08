import { useScroll, useTransform, motion } from "framer-motion";
import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";
import { useMemo, useRef } from "react";
import { useWindowSize } from "react-use";

const Carousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximunScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximunScale * 1.1, maximunScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);
  const posterTranlateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranlateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );
  return (
    <div className="bg-background p-8">
      <div className="mt-[-80vh] h-[300vh] overflow-clip">
        <div className="h-screen sticky top-0 flex items-center">
          <div className="flex relative gap-5 left-1/2 -translate-x-1/2 mb-5">
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranlateXLeft }}
              className="aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip">
              <img
                className="w-full h-full object-fill"
                src={movies[0].poster}
                alt={movies[0].name}
              />
            </motion.div>
            <motion.div
              style={{ scale }}
              className="aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip">
              <img
                className="w-full h-full object-fill"
                src={movies[1].poster}
                alt={movies[1].name}
              />
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: posterTranlateXRight }}
              className="aspect-video shrink-0 w-[60vw] rounded-2xl overflow-clip">
              <img
                className="w-full h-full object-fill"
                src={movies[2].poster}
                alt={movies[2].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="space-y-3 overflow-clip -mt-[90px] pt-4">
        <div className="animate-carousel-move  ml-[2px]">
          <SmallCarousel movies={randomMoviesSet1} />
        </div>
        <div className="animate-carousel-move1 -ml-4">
          <SmallCarousel movies={randomMoviesSet2} />
        </div>
      </div>
    </div>
  );
};

const SmallCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="">
      <div className="flex gap-3">
        {movies.map((movies, index) => (
          <div
            key={`${movies.name} - ${index}`}
            className="w-[23vw] aspect-video shrink-0">
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
