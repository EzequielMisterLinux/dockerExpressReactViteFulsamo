import React from 'react';

const MovieTable = ({ movies, handleViewMovie, handleEditMovie, handleDeleteMovie }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-3 px-4 text-left">Imagen</th>
          <th className="py-3 px-4 text-left">Nombre</th>
          <th className="py-3 px-4 text-left">Descripción</th>
          <th className="py-3 px-4 text-left">Categoría</th>
          <th className="py-3 px-4 text-left">Actor</th>
          <th className="py-3 px-4 text-left">Precio</th>
          <th className="py-3 px-4 text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie.id} className="border-b">
            <td className="py-2 px-4">
              <img src={movie.imageUrl} alt={movie.name} className="w-16 h-16 object-cover" />
            </td>
            <td className="py-2 px-4 align-middle">{movie.name}</td>
            <td className="py-2 px-4 align-middle">{movie.description}</td>
            <td className="py-2 px-4 align-middle">{movie.category}</td>
            <td className="py-2 px-4 align-middle">{movie.actor}</td>
            <td className="py-2 px-4 align-middle">${movie.price}</td>
            <td className="py-2 px-4 align-middle">
              <button
                onClick={() => handleViewMovie(movie)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded mr-1"
              >
                Ver
              </button>
              <button
                onClick={() => handleEditMovie(movie)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-1"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeleteMovie(movie.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default MovieTable;
