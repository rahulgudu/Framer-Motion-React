import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";

const Carousel = () => {
  return (
    <div className="bg-background p-8">
      <div className="overflow-clip">
        <div className="flex gap-5 left-1/2 -translate-x-1/2 mb-5">
          <div className="shrink-0 aspect-video w-[60vw] rounded-2xl overflow-clip">
            <img
              className="w-full h-full object-cover"
              src={movies[0].poster}
              alt={movies[0].name}
            />
          </div>
          <div className="shrink-0 w-[60vw] rounded-2xl overflow-clip">
            <img
              className="w-full h-full object-cover"
              src={movies[1].poster}
              alt={movies[1].name}
            />
          </div>
          <div className="shrink-0 w-[60vw] rounded-2xl overflow-clip">
            <img
              className="w-full h-full object-cover"
              src={movies[2].poster}
              alt={movies[2].name}
            />
          </div>
        </div>
      </div>

      <div className="space-y-3 overflow-clip">
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
