import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ item }) => {
  return (
    <Link
      to={`/movie/${item.imdbID}`}
      style={{
        backgroundImage: `url(${item.Poster})`,
      }}
      className="relative flex h-full mb-4 duration-300 bg-top bg-no-repeat bg-cover w-60 bg-gradient-to-b from-black to-slate-600 rounded-2xl pt-72 lg:scale-95 hover:lg:scale-100"
    >
      <h1 className="w-full text-xs font-bold text-center text-white md:text-base lg:text-lg">
        {item.Title}
      </h1>
    </Link>
  );
};

export default MovieCard;
