import axios from 'axios';

const API_URL = 'http://localhost:3000/movies';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las películas:', error);
    throw error;
  }
};

export const addMovie = async (movie) => {
  try {
    const response = await axios.post(API_URL, movie);
    return response.data;
  } catch (error) {
    console.error('Error al agregar la película:', error);
    throw error;
  }
};

export const updateMovie = async (id, movie) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, movie);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la película:', error);
    throw error;
  }
};

export const deleteMovie = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error al eliminar la película:', error);
    throw error;
  }
};
