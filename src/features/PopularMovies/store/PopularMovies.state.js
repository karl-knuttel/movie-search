import { FETCH_STATUS } from '../../../shared/constants';

const POPULAR_MOVIES_INITIAL_STATE = {
    entities: [],
    error: {},
    fetchStatus: FETCH_STATUS.NONE,
    currentPage: null,
    pageCount: null
};

export default POPULAR_MOVIES_INITIAL_STATE;
