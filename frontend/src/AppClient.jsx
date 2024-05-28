import React, { useState, useEffect } from 'react';
import { fetchMovies } from './api/movies';
import MovieGrid from './components/MovieGridClient';
import MovieModal from './components/MovieModal';
import './index.css';

const AppClient = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = async () => {
    const movies = await fetchMovies();
    setMovies(movies);
  };

  const handleViewMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Películas</h1>
      <MovieGrid movies={movies} handleViewMovie={handleViewMovie} /> 
      
      {showModal && (
        <MovieModal selectedMovie={selectedMovie} handleCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default AppClient;
