import { FETCH_STATUS } from '../../../shared/constants';

const MOVIE_DETAILS_INITIAL_STATE = {
    entity: {},
    error: {},
    fetchStatus: FETCH_STATUS.NONE
};

export default MOVIE_DETAILS_INITIAL_STATE;
