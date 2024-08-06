import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useListPostsMoviesPopularQuery } from '../../services/omdbApi';

const MoviePopular = () => {
  const [page, setPage] = useState(1);
  const {
    data: moviesPopular,
    isLoading,
    isFetching,
  } = useListPostsMoviesPopularQuery({
    s: 'batman',
    page: page,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!moviesPopular?.Search) {
    return <div>Tidak Ada Movie Popular</div>;
  }

  console.log(moviesPopular);

  return (
    <>
      <h1 className="text-black">
        Note: Karena di omdbapi tidak ada endpoint untuk menampilkan movies
        popular jadi disini dihardcode pakai search 'batman'
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {moviesPopular &&
          moviesPopular.Search?.map((item) => (
            <Link
              to={`/movie/${item.imdbID}`}
              style={{
                backgroundImage: `url(${item.Poster})`,
              }}
              className="relative flex mb-4 duration-300 bg-top bg-no-repeat bg-cover w-60 w- rounded-2xl pt-72 lg:scale-95 hover:lg:scale-100"
            >
              <h1 className="w-full text-xs font-bold text-center text-white md:text-base lg:text-lg">
                {item.Title}
              </h1>
            </Link>
          ))}
      </div>
      {page === 1 ? (
        <>
          <div className="inline-flex">
            <button
              className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => setPage(page + 1)}
              isLoading={isFetching}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="inline-flex">
            <button
              className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
              onClick={() => setPage(page - 1)}
              isLoading={isFetching}
            >
              Prev
            </button>
            <button
              className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
              onClick={() => setPage(page + 1)}
              isLoading={isFetching}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default MoviePopular;
