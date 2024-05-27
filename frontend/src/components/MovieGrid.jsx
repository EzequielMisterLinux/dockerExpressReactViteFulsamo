import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, handleViewMovie, handleEditMovie, handleDeleteMovie }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        handleViewMovie={handleViewMovie}
        handleEditMovie={handleEditMovie}
        handleDeleteMovie={handleDeleteMovie}
      />
    ))}
  </div>
);

export default MovieGrid;
