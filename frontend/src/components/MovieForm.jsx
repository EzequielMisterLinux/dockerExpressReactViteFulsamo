import React from 'react';

const MovieForm = ({ newMovie, handleInputChange, handleAddMovie, handleUpdateMovie, editingMovie }) => (
  <div className="mb-4">
    <input
      type="text"
      name="name"
      placeholder="Nombre"
      value={newMovie.name}
      onChange={handleInputChange}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2"
    />
    <input
      type="text"
      name="description"
      placeholder="Descripción"
      value={newMovie.description}
      onChange={handleInputChange}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2"
    />
    <input
      type="text"
      name="category"
      placeholder="Categoría"
      value={newMovie.category}
      onChange={handleInputChange}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2"
    />
    <input
      type="text"
      name="actor"
      placeholder="Actor"
      value={newMovie.actor}
      onChange={handleInputChange}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2"
    />
    <input
      type="text"
      name="price"
      placeholder="Precio"
      value={newMovie.price}
      onChange={handleInputChange}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2"
    />
    <input
      type="text"
      name="imageUrl"
      placeholder="URL de imagen"
      value={newMovie.imageUrl}
      onChange={handleInputChange}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2"
    />
    <input
      type="text"
      name="movieUrl"
      placeholder="URL de película"
      value={newMovie.movieUrl}
      onChange={handleInputChange}
      className="border border-gray-300 rounded-md px-4 py-2 mr-2"
    />
    {editingMovie ? (
      <button
        onClick={handleUpdateMovie}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Actualizar
      </button>
    ) : (
      <button
        onClick={handleAddMovie}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Agregar
      </button>
    )}
  </div>
);

export default MovieForm;
