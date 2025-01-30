export type Movie = {
  poster: string;
  name: string;
};
export const movies = [
  {
    poster:
      "https://anniehaydesign.weebly.com/uploads/9/5/4/6/95469676/landscape-poster-3_orig.jpg ",
    name: "Captain America and the Winter Soilder",
  },
  {
    poster:
      "https://rukminim2.flixcart.com/image/850/1000/poster/q/r/v/posterskart-interstellar-movie-poster-pkis04-medium-original-imaebctvytcgcgcx.jpeg?q=90&crop=false",
    name: "Interstellar",
  },
  {
    poster:
      "https://rukminim2.flixcart.com/image/850/1000/kph8h3k0/poster/y/f/z/large-the-adventures-of-tintin-movie-poster-non12x18no1x0151-original-imag3pb3ypquwk3p.jpeg?q=90&crop=false",
    name: "TINTIN",
  },
  {
    poster: "https://i.ebayimg.com/images/g/GtEAAOSw1W9eN1cY/s-l400.jpg",
    name: "Time is the Enemy",
  },
  {
    poster:
      "https://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/IUsAAOSwppBlLU6E/$_57.JPG?set_id=8800005007",
    name: "Past Lives",
  },
];

export const randomMoviesSet1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
