import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MovieDetail from './components/Movies/MovieDetail';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default App;
