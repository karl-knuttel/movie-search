import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import store from '../../store';
import * as fromActions from './store/PopularMovies.actions';
import * as fromData from './store/PopularMovies.selectors';

import { FETCH_STATUS } from '../../shared/constants';
import MovieTile from '../../shared/components/MovieTile';
import Pagination from '../../shared/components/Pagination';

const mapStateToProps = state => {
    return {
        entities: fromData.getPopularMoviesEntities(state),
        fetchStatus: fromData.getPopularMoviesFetchStatus(state),
        currentPage: fromData.getPopularMoviesCurrentPage(state),
        pageCount: fromData.getPopularMoviesPageCount(state)
    };
};

export const PopularMovies = props => {
    const { currentPage, entities, fetchStatus, history, pageCount } = props;

    const movieListRef = useRef(0);

    const [initialFetched, setInitialFetched] = useState(false);

    const fetchMovies = page => {
        store.dispatch(fromActions.popularMoviesFetch({ page }));
    };

    useEffect(() => {
        if (!initialFetched) {
            fetchMovies(1);
            setInitialFetched(true);
        }
    }, [initialFetched]);

    const onPaginationNextClick = () => {
        if (currentPage < pageCount) {
            fetchMovies(currentPage + 1);
        }
        movieListRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const onPaginationPrevClick = () => {
        if (currentPage > 1) {
            fetchMovies(currentPage - 1);
        }
        movieListRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const onMovieClick = id => {
        history.push(`/movies/${id}`);
    };

    const shouldDisableLeft =
        (fetchStatus === FETCH_STATUS.FETCHED && currentPage === 1) ||
        fetchStatus !== FETCH_STATUS.FETCHED;

    const shouldDisableRight =
        (fetchStatus === FETCH_STATUS.FETCHED && currentPage === pageCount) ||
        fetchStatus !== FETCH_STATUS.FETCHED;

    return (
        <div className="c-popular-movies" ref={movieListRef}>
            <div className="popular-movies__container">
                <Pagination
                    currentPage={currentPage}
                    totalPages={pageCount}
                    isDisabledLeft={shouldDisableLeft}
                    isDisabledRight={shouldDisableRight}
                    onNextClick={onPaginationNextClick}
                    onPrevClick={onPaginationPrevClick}
                />
                <div className="row">
                    {!!entities.length &&
                        entities.map((movie, index) => (
                            <div
                                key={index}
                                className="col col-sm-6 col-md-6 col-lg-3"
                            >
                                <MovieTile
                                    imageAlt={`${movie.title} poster`}
                                    imageUrl={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                                    onClick={() => onMovieClick(movie.id)}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                />
                            </div>
                        ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={pageCount}
                    isDisabledLeft={shouldDisableLeft}
                    isDisabledRight={shouldDisableRight}
                    onNextClick={onPaginationNextClick}
                    onPrevClick={onPaginationPrevClick}
                />
            </div>
        </div>
    );
};

PopularMovies.propTypes = {
    currentPage: PropTypes.number,
    entities: PropTypes.array.isRequired,
    fetchStatus: PropTypes.string.isRequired,
    history: PropTypes.object,
    pageCount: PropTypes.number
};

export const ConnectedPopularMovies = connect(mapStateToProps)(PopularMovies);

export default withRouter(ConnectedPopularMovies);
