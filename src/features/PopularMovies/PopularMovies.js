import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

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

const PopularMovies = props => {
    const { currentPage, entities, fetchStatus, pageCount } = props;

    const movieListRef = useRef(0);

    const [initialFetched, setInitialFetched] = useState(false);

    useEffect(() => {
        if (!initialFetched) {
            store.dispatch(fromActions.popularMoviesFetch({ page: 1 }));
            setInitialFetched(true);
        }
    }, [initialFetched]);

    const onPaginationNextClick = () => {
        if (currentPage < pageCount) {
            store.dispatch(
                fromActions.popularMoviesFetch({ page: currentPage + 1 })
            );
        }
        movieListRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const onPaginationPrevClick = () => {
        if (currentPage > 1) {
            store.dispatch(
                fromActions.popularMoviesFetch({ page: currentPage - 1 })
            );
        }
        movieListRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const shouldDisableLeft =
        (FETCH_STATUS.FETCHED && currentPage === 1) || !FETCH_STATUS.FETCHED;

    const shouldDisableRight =
        (FETCH_STATUS.FETCHED && currentPage === pageCount) ||
        !FETCH_STATUS.FETCHED;

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
                                    onClick={() => null}
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

export default connect(mapStateToProps)(PopularMovies);
