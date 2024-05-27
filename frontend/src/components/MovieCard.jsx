import React from 'react';

const MovieCard = ({ movie, handleViewMovie, handleEditMovie, handleDeleteMovie }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <img src={movie.imageUrl} alt={movie.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{movie.name}</h2>
      <p className="text-gray-700 mb-2">{movie.description}</p>
      <p className="text-gray-700 font-bold">Categoría: {movie.category}</p>
      <p className="text-gray-700 font-bold">Actor: {movie.actor}</p>
      <p className="text-gray-700 font-bold">Precio: ${movie.price}</p>
      <div className="flex justify-between mt-4">
        <button
          onClick={() => handleViewMovie(movie)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver
        </button>
        <button
          onClick={() => handleEditMovie(movie)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
        >
          Editar
        </button>
        <button
          onClick={() => handleDeleteMovie(movie.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  </div>
);

export default MovieCard;
