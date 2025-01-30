import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";

const Carousel = () => {
  return (
    <div className="bg-background">
      <div className="flex gap-5 overflow-clip mb-5">
        <div className="shrink-0 w-[60vw] rounded-2xl overflow-clip">
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

      <SmallCarousel movies={randomMoviesSet1} />
      <SmallCarousel movies={randomMoviesSet2} />
    </div>
  );
};

const SmallCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex gap-3 overflow-clip">
      {movies.map((movies, index) => (
        <div key={`${movies.name} - ${index}`} className="w-[23vw] shrink-0">
          <img
            className="h-full w-full object-cover rounded-xl"
            src={movies.poster}
            alt={movies.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
