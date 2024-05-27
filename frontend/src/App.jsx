import React, { useState, useEffect } from 'react';
import { fetchMovies, addMovie, updateMovie, deleteMovie } from './api/movies';
import MovieForm from './components/MovieForm';
import MovieGrid from './components/MovieGrid';
import MovieModal from './components/MovieModal';
import './index.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    name: '',
    description: '',
    category: '',
    actor: '',
    price: '',
    imageUrl: '',
    movieUrl: '',
  });
  const [editingMovie, setEditingMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = async () => {
    const movies = await fetchMovies();
    setMovies(movies);
  };

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = async () => {
    const movie = await addMovie(newMovie);
    setMovies([...movies, movie]);
    setNewMovie({
      name: '',
      description: '',
      category: '',
      actor: '',
      price: '',
      imageUrl: '',
      movieUrl: '',
    });
  };

  const handleEditMovie = (movie) => {
    setEditingMovie(movie);
    setNewMovie({
      name: movie.name,
      description: movie.description,
      category: movie.category,
      actor: movie.actor,
      price: movie.price,
      imageUrl: movie.imageUrl,
      movieUrl: movie.movieUrl,
    });
  };

  const handleUpdateMovie = async () => {
    const updatedMovie = await updateMovie(editingMovie.id, newMovie);
    const updatedMovies = movies.map((movie) => (movie.id === editingMovie.id ? updatedMovie : movie));
    setMovies(updatedMovies);
    setEditingMovie(null);
    setNewMovie({
      name: '',
      description: '',
      category: '',
      actor: '',
      price: '',
      imageUrl: '',
      movieUrl: '',
    });
  };

  const handleDeleteMovie = async (movieId) => {
    await deleteMovie(movieId);
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(updatedMovies);
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
      <MovieForm
        newMovie={newMovie}
        handleInputChange={handleInputChange}
        handleAddMovie={handleAddMovie}
        handleUpdateMovie={handleUpdateMovie}
        editingMovie={editingMovie}
      />
      <MovieGrid
        movies={movies}
        handleViewMovie={handleViewMovie}
        handleEditMovie={handleEditMovie}
        handleDeleteMovie={handleDeleteMovie}
      />
      <MovieModal
        selectedMovie={selectedMovie}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default App;
