import React from 'react';
import { Modal } from 'react-bootstrap';
import {
  StyledModal,
  StyledModalHeader,
  StyledModalBody,
  StyledModalFooter,
  StyledMovieTitle,
  StyledMovieInfo,
  StyledButton,
} from '../styles/MovieModalStyles.js';

const MovieModal = ({ show, handleClose, movie }) => {
  if (!movie) {
    return null;
  }

  return (
    <StyledModal show={show} onHide={handleClose} centered>
      <StyledModalHeader>
      
      </StyledModalHeader>
      <StyledModalBody>
        <img src={movie.Poster} alt={movie.Title} />
        <StyledMovieInfo>
          <p>
            <strong>Movie:</strong> {movie.Title}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
        </StyledMovieInfo>
      </StyledModalBody>
      <StyledModalFooter>
        <StyledButton >Like movie</StyledButton>
        <StyledButton onClick={handleClose}>Close</StyledButton>
      </StyledModalFooter>
    </StyledModal>
  );
};

export default MovieModal;
