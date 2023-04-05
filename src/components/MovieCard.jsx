import React from 'react';
import styled from 'styled-components';

const StyledMovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    height: 200px;
    width: auto;
    object-fit: cover;
    border-radius: 5px;
  }

  h5 {
    margin-top: 10px;
    font-weight: 600;
    text-align: center;
    max-width: 150px;
  }
`;

const MovieCard = ({ movie, setSelectedMovie }) => {
  const handleShowModal = () => {
    console.log("movie: " ,movie)
    setSelectedMovie(movie);
  };

  return (
    <StyledMovieCard onClick={handleShowModal}>
      <img src={movie.Poster} alt={movie.Title} />
      <h5>{movie.Title}</h5>
    </StyledMovieCard>
  );
};

export default MovieCard;
