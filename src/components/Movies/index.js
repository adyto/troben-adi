import React, { useEffect, useState } from 'react';
import { useLazyGetMovieSearchQuery } from '../../services/omdbApi';
import MovieCard from './MovieCard';
import MoviePopular from './MoviePopular';

const Movies = () => {
  const [resultSearchMovies, setResultSearchMovies] = useState('');

  const [getSearchMovie, searchMovies] = useLazyGetMovieSearchQuery();
  useEffect(() => {
    if (searchMovies && searchMovies.data) {
      setResultSearchMovies(searchMovies?.data?.Search);
    }
  }, [searchMovies]);

  return (
    <>
      <div class="my-6 flex flex-col items-center">
        <label for="email" class="block mb-2 text-sm font-medium text-black">
          Search
        </label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="...."
          onChange={(e) => getSearchMovie(e.target.value)}
        />
      </div>
      {searchMovies?.originalArgs !== '' &&
      searchMovies?.originalArgs !== undefined ? (
        <>
          {resultSearchMovies === undefined ? (
            <div className="h-screen text-white">Tidak Ditemukan</div>
          ) : (
            <div className="flex flex-wrap justify-center gap-4">
              {resultSearchMovies &&
                resultSearchMovies?.map((item) => <MovieCard item={item} />)}
            </div>
          )}
        </>
      ) : (
        <MoviePopular />
      )}
    </>
  );
};

export default Movies;
