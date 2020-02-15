import { FETCH_STATUS } from '../../../shared/constants';

const SEARCH_INITIAL_STATE = {
    results: {
        entities: [],
        error: {},
        fetchStatus: FETCH_STATUS.NONE,
        currentPage: null,
        pageCount: null
    },
    currentValue: ''
};

export default SEARCH_INITIAL_STATE;
