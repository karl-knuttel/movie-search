import * as Actions from './Core.actions';
import CORE_INITIAL_STATE from './Core.state';

export default function storeReducer(state = CORE_INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.CORE_TITLE_UPDATE:
            return handleCoreTitleUpdate(state, action.payload);

        default:
            return state;
    }
}

function handleCoreTitleUpdate(state, payload) {
    return {
        ...state,
        title: payload
    };
}
