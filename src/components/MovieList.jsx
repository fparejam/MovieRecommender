import React from 'react';
import styles from '../styles/MovieList.module.css'

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className={`${styles.image_container}  d-flex justify-content-start m-3`} key={movie.imdbID}>
					<img src={movie.Poster} alt='movie' className={styles.image} ></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className={`${styles.overlay} d-flex align-items-center justify-content-center`}
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
