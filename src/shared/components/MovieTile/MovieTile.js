import React from 'react';
import PropTypes from 'prop-types';

const MovieTile = props => {
    const { imageAlt, imageUrl, onClick, rating, title } = props;

    return (
        <div className={`c-movie-tile`} onClick={onClick}>
            <div className="movie-tile__image-container">
                <img
                    className="movie-tile__image"
                    src={imageUrl}
                    alt={imageAlt}
                />
            </div>
            <h4 className="movie-tile__title">{title}</h4>
            <h5 className="movie-tile__rating">Rating: {rating}</h5>
        </div>
    );
};

MovieTile.propTypes = {
    imageAlt: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default MovieTile;
