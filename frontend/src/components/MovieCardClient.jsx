import React from 'react';
import styled from 'styled-components';


const CardContainer = styled.div`
  background-color: #121212; /* Color de fondo oscuro */
  color: #fff; /* Color de texto blanco */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;


const Image = styled.img`
  width: 100%;
  height: 200px; /* Altura de la imagen */
  object-fit: cover;
`;


const Content = styled.div`
  padding: 20px;
`;


const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;


const Paragraph = styled.p`
  margin-bottom: 10px;
`;


const Button = styled.button`
  background-color: #ff0066; /* Color del botón */
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff3399; /* Cambio de color al pasar el cursor */
  }
`;

const MovieCard = ({ movie, handleViewMovie }) => (
  <CardContainer>
    <Image src={movie.imageUrl} alt={movie.name} />
    <Content>
      <Title>{movie.name}</Title>
      <Paragraph>{movie.description}</Paragraph>
      <Paragraph><strong>Categoría:</strong> {movie.category}</Paragraph>
      <Paragraph><strong>Actor:</strong> {movie.actor}</Paragraph>
      <Paragraph><strong>Precio:</strong> ${movie.price}</Paragraph>
      <Button onClick={() => handleViewMovie(movie)}>Ver</Button>
    </Content>
  </CardContainer>
);

export default MovieCard;
