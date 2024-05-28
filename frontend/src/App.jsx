// App.js
import React, { useState, useEffect } from 'react';
import Login from './users/LoginAdmin';
import MovieForm from './components/MovieForm';
import MovieTable from './components/MovieCard';
import MovieModal from './components/MovieModal';
import { fetchMovies, addMovie, updateMovie, deleteMovie } from './api/movies';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
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
    try {
      const movies = await fetchMovies();
      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleAddMovie = async () => {
    try {
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
    } catch (error) {
      console.error('Error adding movie:', error);
    }
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
    try {
      const updatedMovie = await updateMovie(editingMovie.id, newMovie);
      const updatedMovies = movies.map((movie) =>
        movie.id === editingMovie.id ? updatedMovie : movie
      );
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
    } catch (error) {
      console.error('Error updating movie:', error);
    }
  };

  const handleDeleteMovie = async (movieId) => {
    try {
      await deleteMovie(movieId);
      const updatedMovies = movies.filter((movie) => movie.id !== movieId);
      setMovies(updatedMovies);
    } catch (error) {
      console.error('Error deleting movie:', error);
    }
  };

  const handleViewMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const handleLogin = (user) => {
    setLoggedInUser(user);
  };

  const handleCloseForm = () => {
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

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Películas</h1>
      <Login onLogin={handleLogin} />
      {loggedInUser && (
        <>
          <MovieForm
            newMovie={newMovie}
            handleInputChange={handleInputChange}
            handleAddMovie={handleAddMovie}
            handleUpdateMovie={handleUpdateMovie}
            editingMovie={editingMovie}
            handleCloseForm={handleCloseForm}
          />
          <MovieTable
            movies={movies}
            handleViewMovie={handleViewMovie}
            handleEditMovie={handleEditMovie}
            handleDeleteMovie={handleDeleteMovie}
          />
          <MovieModal
            selectedMovie={selectedMovie}
            handleCloseModal={handleCloseModal}
          />
        </>
      )}
    </div>
  );
};

export default App;
