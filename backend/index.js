import express from 'express';
import cors from 'cors';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

app.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;

const corsOptions = {
    origin: 'http://localhost:8080',
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/movies', (req, res) => {
    const moviesFile = path.join(__dirname, 'movies.json');
    try {
        const movies = JSON.parse(fs.readFileSync(moviesFile, 'utf-8'));
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las películas" });
    }
});

app.post('/movies', (req, res) => {
    const { name, description, category, actor, price, imageUrl, movieUrl } = req.body;  // corregido a imageUrl
    const newMovie = { id: uuidv4(), name, description, category, actor, price, imageUrl, movieUrl };
    const moviesFile = path.join(__dirname, 'movies.json');
    try {
        const movies = JSON.parse(fs.readFileSync(moviesFile, 'utf-8'));
        movies.push(newMovie);
        fs.writeFileSync(moviesFile, JSON.stringify(movies, null, 2));
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: "Error al insertar la película" });
    }
});

app.put('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const { name, description, category, actor, price, imageUrl, movieUrl } = req.body;  // corregido a imageUrl
    const moviesFile = path.join(__dirname, 'movies.json');

    try {
        const movies = JSON.parse(fs.readFileSync(moviesFile, 'utf-8'));
        const movieIndex = movies.findIndex((movie) => movie.id === movieId);

        if (movieIndex !== -1) {
            movies[movieIndex] = { id: movieId, name, description, category, actor, price, imageUrl, movieUrl };  // corregido a imageUrl
            fs.writeFileSync(moviesFile, JSON.stringify(movies, null, 2));
            res.json(movies[movieIndex]);
        } else {
            res.status(404).json({ error: "Película no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la película" });
    }
});

app.delete('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const moviesFile = path.join(__dirname, 'movies.json');

    try {
        const movies = JSON.parse(fs.readFileSync(moviesFile, 'utf-8'));
        const movieIndex = movies.findIndex((movie) => movie.id === movieId);

        if (movieIndex !== -1) {
            const deletedMovie = movies.splice(movieIndex, 1);
            fs.writeFileSync(moviesFile, JSON.stringify(movies, null, 2));
            res.json(deletedMovie);
        } else {
            res.status(404).json({ error: "Película no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al borrar la película" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en la URL http://localhost:${PORT}`);
});
