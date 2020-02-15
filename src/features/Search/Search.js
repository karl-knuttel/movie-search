import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import * as fromData from './store/Search.selectors';

import Notification from '../../shared/components/Notification';
import Autosuggest from './components/Autosuggest';
import { FETCH_STATUS } from '../../shared/constants';

const mapStateToProps = state => {
    return {
        entities: fromData.getSearchResultsEntities(state),
        fetchStatus: fromData.getSearchResultsFetchStatus(state),
        searchString: fromData.getSearchCurrentValue(state)
    };
};

const Search = props => {
    const { entities, fetchStatus, searchString } = props;

    const [notificationVisible, setNotificationVisible] = useState(false);

    useEffect(() => {
        if (!entities.length && fetchStatus === FETCH_STATUS.FETCHED) {
            setNotificationVisible(true);
        }
        if (
            (!!entities.length && fetchStatus === FETCH_STATUS.FETCHED) ||
            searchString.length <= 2
        ) {
            setNotificationVisible(false);
        }
    }, [entities, fetchStatus, searchString]);

    return (
        <div className="c-search">
            <div className="search__container">
                <h1 className="search__title">Search for a movie</h1>
                <div className="search__autosuggest-container">
                    <Autosuggest />
                </div>
            </div>

            <CSSTransition
                in={notificationVisible}
                timeout={350}
                classNames="fade"
                unmountOnExit={true}
            >
                <div className="search__notification-container">
                    <Notification
                        onClose={() => setNotificationVisible(false)}
                        message="No results for that search term"
                        type="warning"
                    />
                </div>
            </CSSTransition>
        </div>
    );
};

export default connect(mapStateToProps)(Search);
