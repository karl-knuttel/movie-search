import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import store from '../../store';
import * as fromActions from './store/MovieDetails.actions';
import * as fromData from './store/MovieDetails.selectors';

import { FETCH_STATUS } from '../../shared/constants';
import MovieDetail from '../../shared/components/MovieDetail';
// import Pagination from '../../shared/components/Pagination';

const mapStateToProps = state => {
    return {
        movie: fromData.getMovieDetailsEntity(state),
        fetchStatus: fromData.getMovieDetailsFetchStatus(state)
    };
};

const MovieDetails = props => {
    const { movie, fetchStatus, history, location } = props;

    const movieId = location.pathname.split('/')[2];

    useEffect(() => {
        store.dispatch(fromActions.movieDetailsFetch({ id: movieId }));
    }, [location]);

    return (
        <div className="c-movie-details">
            <div className="movie-details__container">
                {fetchStatus === FETCH_STATUS.FETCHED &&
                    !!Object.keys(movie).length && (
                        <>
                            <div
                                className="movie-details__backdrop"
                                style={{
                                    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
                                }}
                            />
                            <MovieDetail
                                countries={movie.production_countries}
                                genres={movie.genres}
                                homepageUrl={movie.homepage}
                                imageAlt={movie.title}
                                imageUrl={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                imdbUrl={`http://www.imdb.com/title/${movie.imdb_id}/`}
                                description={movie.overview}
                                rating={movie.vote_average}
                                year={movie.release_date.split('-')[0]}
                                tagline={movie.tagline}
                                title={movie.title}
                            />
                        </>
                    )}
            </div>
        </div>
    );
};

export default withRouter(connect(mapStateToProps)(MovieDetails));
