import { combineEpics, ofType } from 'redux-observable';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of, from } from 'rxjs';

import service from '../services/MovieDetails.service';
import * as Actions from './MovieDetails.actions';

const movieDetailsFetchEpic = action$ =>
    action$.pipe(
        ofType(Actions.MOVIE_DETAILS_FETCH),
        switchMap(action =>
            from(service.getMovieDetails(action.payload)).pipe(
                map(res => Actions.movieDetailsFetched(res)),
                catchError(error =>
                    of({
                        type: Actions.MOVIE_DETAILS_FETCH_FAILED,
                        payload: error
                    })
                )
            )
        )
    );

export default combineEpics(movieDetailsFetchEpic);
