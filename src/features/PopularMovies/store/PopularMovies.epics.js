import { combineEpics, ofType } from 'redux-observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of, from } from 'rxjs';

import service from '../services/PopularMovies.service';
import * as Actions from './PopularMovies.actions';

const popularMoviesFetchEpic = action$ =>
    action$.pipe(
        ofType(Actions.POPULAR_MOVIES_FETCH),
        switchMap(action =>
            from(service.getPopularMovies(action.payload)).pipe(
                map(res => Actions.popularMoviesFetched(res)),
                catchError(error =>
                    of({
                        type: Actions.POPULAR_MOVIES_FETCH_FAILED,
                        payload: error
                    })
                )
            )
        )
    );

export default combineEpics(popularMoviesFetchEpic);
