import React from 'react';
import MovieCard from './MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const MovieListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Header = styled.h1`
  font-weight: 600;
  color: #333;
`;


const MovieList = ({ movies, setSelectedMovie }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Filter top 20 most popular movies based on IMDb rating
  const top20Movies = movies
    .slice(0, 20);

  console.log('top20Movies:', top20Movies);

  return (
    <MovieListContainer>
      <Header>Most Popular Movies</Header>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {top20Movies.map((movie) => (
          <MovieCard key={movie.Title} movie={movie} setSelectedMovie={setSelectedMovie} />
        ))}
      </Carousel>
    </MovieListContainer>
  );
};

export default MovieList;
