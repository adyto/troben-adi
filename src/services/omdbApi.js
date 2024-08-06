import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const omdbApiKey = {
  apikey: 'abbe6d92',
};

const createRequest = (url) => ({
  url,
  params: omdbApiKey,
});

export const omdbApi = createApi({
  reducerPath: 'omdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.omdbapi.com/' }),
  endpoints: (builder) => ({
    getMovieSearch: builder.query({
      query: (s) => createRequest(`?s=${s}`),
    }),
    getMovieDetail: builder.query({
      query: ({ i }) => createRequest(`?i=${i}`),
    }),
    listPostsMoviesPopular: builder.query({
      query: ({ s, page }) => createRequest(`?s=${s}&page=${page}`),
    }),
  }),
});

export const {
  useLazyGetMovieSearchQuery,
  useGetMovieDetailQuery,
  useGetMovieSearchQuery,
  useListPostsMoviesPopularQuery,
} = omdbApi;
