import React from 'react';
import PropTypes from 'prop-types';

const MovieDetail = props => {
    const {
        countries,
        description,
        genres,
        homepageUrl,
        imageAlt,
        imageUrl,
        imdbUrl,
        rating,
        year,
        tagline,
        title
    } = props;

    return (
        <article className="c-movie-detail">
            <div className="row">
                <div className="col col-md-6">
                    <div className="movie-detail__image-container">
                        <img
                            className="movie-detail__image"
                            src={imageUrl}
                            alt={imageAlt}
                        />
                    </div>
                </div>
                <div className="col col-md-6">
                    <h2 className="movie-detail__title">
                        {title}
                        <span className="movie-detail__title-year">
                            ({year})
                        </span>
                    </h2>
                    <h3 className="movie-detail__tagline">{tagline}</h3>
                    <h5 className="movie-detail__rating">Rating: {rating}</h5>
                    <h5 className="movie-detail__genres">
                        {genres.map((genre, genreIndex) => (
                            <span
                                className="movie-detail__genre"
                                key={genreIndex}
                            >
                                {genre.name}
                            </span>
                        ))}
                    </h5>
                    <div className="movie-detail__section">
                        <h4 className="movie-detail__section-title">Plot</h4>
                        <p className="movie-detail__description">
                            {description}
                        </p>
                    </div>
                    <div className="movie-detail__section">
                        <h4 className="movie-detail__section-title">
                            Production countries
                        </h4>
                        <ul>
                            {countries.map((country, countryIndex) => (
                                <li key={countryIndex}>{country.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="movie-detail__section">
                        <h4 className="movie-detail__section-title">
                            External links
                        </h4>
                        <ul>
                            <li>
                                <a
                                    href={homepageUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Website
                                </a>
                            </li>
                            <li>
                                <a
                                    href={imdbUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IMDB
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    );
};

MovieDetail.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            iso_3166_1: PropTypes.string,
            name: PropTypes.string
        })
    ).isRequired,
    description: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    ).isRequired,
    homepageUrl: PropTypes.string,
    imageAlt: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imdbUrl: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    tagline: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
};

export default MovieDetail;
