import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetMovieDetailQuery } from '../../services/omdbApi';

const MovieDetail = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const { data: resDetail } = useGetMovieDetailQuery({
    i: movieId,
  });
  console.log(resDetail);

  return (
    <div className="relative w-full py-8 bg-white md:pt-32">
      <div className="flex flex-col">
        <div className="relative flex flex-col items-center w-full px-6 pb-8 mx-auto mb-auto text-black md:mb-auto md:container md:mx-auto md:px-6 md:pb-10 md:items-center md:gap-4 md:flex-row">
          <img
            src={resDetail?.Poster}
            className="rounded-3xl shadow-xl w-52  md:w-[300px] lg:w-[400px] 2xl:w-[500px] relative"
            alt="poster"
          />
          <div className="flex flex-col items-center gap-3 mx-auto md:gap-4 md:items-start">
            <h1 className="text-2xl font-bold md:text-5xl">
              {resDetail?.Title}
            </h1>
            <div className="flex flex-row items-center gap-2 text-xs md:text-sm">
              <p>{resDetail?.Released}</p>
            </div>
            <h3 className="text-sm">{resDetail?.Plot}</h3>
          </div>
        </div>
        {resDetail && (
          <Link
            to="/"
            className="px-4 py-2 mx-auto font-bold text-white bg-black rounded-full hover:bg-blue-700 mt-11 "
          >
            Kembali
          </Link>
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
