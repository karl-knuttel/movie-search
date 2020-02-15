import { combineEpics, ofType } from 'redux-observable';
import { catchError, map, switchMap, takeUntil } from 'rxjs/operators';
import { of, from } from 'rxjs';

import service from '../services/Search.service';
import * as Actions from './Search.actions';

const autosuggestFetchEpic = action$ =>
    action$.pipe(
        ofType(Actions.SEARCH_FETCH),
        switchMap(action =>
            from(service.getAutosuggest(action.payload)).pipe(
                // tap(res => console.log(res)),
                map(
                    res => Actions.searchFetched(res),
                    takeUntil(action$.pipe(ofType(Actions.SEARCH_FETCH)))
                ),
                catchError(error =>
                    of({
                        type: Actions.SEARCH_FETCH_FAILED,
                        payload: error
                    })
                )
            )
        )
    );

const autosuggestFetchMoreEpic = action$ =>
    action$.pipe(
        ofType(Actions.SEARCH_FETCH_MORE),
        switchMap(action =>
            from(service.getAutosuggest(action.payload)).pipe(
                // tap(res => console.log(res)),
                map(
                    res => Actions.searchFetchedMore(res),
                    takeUntil(action$.pipe(ofType(Actions.SEARCH_FETCH_MORE)))
                ),
                catchError(error =>
                    of({
                        type: Actions.SEARCH_FETCH_MORE_FAILED,
                        payload: error
                    })
                )
            )
        )
    );

export default combineEpics(autosuggestFetchEpic, autosuggestFetchMoreEpic);
