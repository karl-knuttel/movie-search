import { FETCH_STATUS } from '../../../shared/constants';

const SEARCH_INITIAL_STATE = {
    entities: [],
    error: {},
    fetchStatus: FETCH_STATUS.NONE,
    currentPage: null,
    pageCount: null
};

export default SEARCH_INITIAL_STATE;
