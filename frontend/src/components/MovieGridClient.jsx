import React from 'react';
import MovieCard from './MovieCardClient';

const MovieGrid = ({ movies, handleViewMovie }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        handleViewMovie={handleViewMovie} 
      />
    ))}
  </div>
);

export default MovieGrid;
