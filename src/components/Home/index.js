import React from 'react';
import Navbar from '../Navbar';
import Movies from '../Movies';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center py-4 mx-auto">
      <Navbar />
      <Movies />
    </div>
  );
};

export default Home;
