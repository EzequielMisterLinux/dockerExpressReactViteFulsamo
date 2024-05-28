import React, { useState, useEffect } from 'react';

const MovieForm = ({ newMovie, handleInputChange, handleAddMovie, handleUpdateMovie, editingMovie, handleCloseForm }) => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    setShowForm(editingMovie !== null);
  }, [editingMovie]);

  return (
    <div className="mb-4">
      <button
        onClick={() => {
          setShowForm(true);
          handleInputChange({ target: { name: 'name', value: '' } });
        }}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Agregar película
      </button>

      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{editingMovie ? 'Actualizar Película' : 'Agregar Película'}</h2>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={newMovie.name}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="description"
                placeholder="Descripción"
                value={newMovie.description}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="category"
                placeholder="Categoría"
                value={newMovie.category}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="actor"
                placeholder="Actor"
                value={newMovie.actor}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="price"
                placeholder="Precio"
                value={newMovie.price}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="imageUrl"
                placeholder="URL de imagen"
                value={newMovie.imageUrl}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="movieUrl"
                placeholder="URL de película"
                value={newMovie.movieUrl}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-md px-4 py-2 mr-2"
              />
            </div>
            <br />
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowForm(false);
                  handleCloseForm();
                }}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              >
                Cancelar
              </button>
              <button
                onClick={editingMovie ? handleUpdateMovie : handleAddMovie}
                className={`bg-${editingMovie ? 'blue' : 'green'}-500 hover:bg-${editingMovie ? 'blue' : 'green'}-700 text-white font-bold py-2 px-4 rounded`}
              >
                {editingMovie ? 'Actualizar' : 'Agregar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieForm;
