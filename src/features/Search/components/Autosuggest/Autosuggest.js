import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Downshift from 'downshift';

import store from '../../../../store';
import * as fromActions from '../../store/Search.actions';
import * as fromData from '../../store/Search.selectors';

import DropdownList from '../../../../shared/components/DropdownList';
import DropdownListItem from '../../../../shared/components/DropdownListItem';
import TextInput from '../../../../shared/components/TextInput';
import { FETCH_STATUS } from '../../../../shared/constants';

const mapStateToProps = state => {
    return {
        currentPage: fromData.getSearchResultsCurrentPage(state),
        entities: fromData.getSearchResultsEntities(state),
        fetchStatus: fromData.getSearchResultsFetchStatus(state),
        pageCount: fromData.getSearchResultsPageCount(state),
        searchString: fromData.getSearchCurrentValue(state)
    };
};

const Autosuggest = props => {
    const {
        currentPage,
        entities,
        fetchStatus,
        history,
        pageCount,
        searchString
    } = props;

    const inputRef = useRef(null);
    const autosuggestRef = useRef(null);

    const [dropdownFocused, setDropdownFocused] = useState(false);

    useEffect(() => {
        /*
         * send request if query string
         * is longer than 2 characters
         */
        if (searchString.length > 2) {
            store.dispatch(
                fromActions.searchFetch({
                    query: searchString,
                    page: 1
                })
            );
        }
        /*
         * otherwise reset store
         */
        if (searchString.length <= 2) {
            store.dispatch(fromActions.searchResultsReset());
        }
    }, [searchString]);

    /*
     * listen for click events and check if is outside the component
     */
    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    /*
     * handle when the input value changes
     */
    const handleInputChange = event => {
        store.dispatch(
            fromActions.searchCurrentValueUpdate(event.target.value)
        );
    };

    /*
     * handle when the user clicks 'load more'
     */
    const handleLoadMoreClick = () => {
        store.dispatch(
            fromActions.searchFetchMore({
                query: searchString,
                page: currentPage < pageCount ? currentPage + 1 : pageCount
            })
        );
    };

    /*
     * handle when user selects and option from the dropdown
     */
    const handleOnSelectMovie = selection => {
        // this will redirect to the detailPage
        console.log('selected:', selection);
        history.push(`/movies/${selection.id}`);
    };

    /*
     * handle when user clicks outside the dropdown
     */
    const handleClickOutside = event => {
        if (
            autosuggestRef.current &&
            !autosuggestRef.current.contains(event.target)
        ) {
            setDropdownFocused(false);
        }
    };

    return (
        <div className="c-autosuggest" ref={autosuggestRef}>
            <Downshift
                onChange={handleOnSelectMovie}
                itemToString={item => (item ? item : '')}
                isOpen={!!entities.length && dropdownFocused}
            >
                {({
                    getInputProps,
                    getItemProps,
                    getMenuProps,
                    isOpen,
                    highlightedIndex,
                    getRootProps
                }) => (
                    <div>
                        <div
                            className="autosuggest__input-container"
                            {...getRootProps({}, { suppressRefError: true })}
                        >
                            <TextInput
                                id="autosuggest-input-field"
                                placeholder="Search"
                                autoComplete="off"
                                {...getInputProps({
                                    onChange: handleInputChange,
                                    value: searchString,
                                    ref: inputRef,
                                    onFocus: () => setDropdownFocused(true)
                                })}
                            />
                        </div>
                        <div className="autosuggest__dropdown-container">
                            <DropdownList
                                {...getMenuProps({
                                    isOpen,
                                    refKey: 'listRef'
                                })}
                            >
                                {isOpen &&
                                    entities.map((item, index) => (
                                        <div
                                            key={index}
                                            {...getItemProps({
                                                item,
                                                index
                                            })}
                                        >
                                            <DropdownListItem
                                                active={
                                                    highlightedIndex === index
                                                }
                                                refkey="listItemRef"
                                            >
                                                {item.title}
                                            </DropdownListItem>
                                        </div>
                                    ))}
                            </DropdownList>

                            {currentPage < pageCount && isOpen && (
                                <button
                                    className="autosuggest__load-more-button"
                                    onClick={handleLoadMoreClick}
                                    disabled={
                                        fetchStatus === FETCH_STATUS.FETCHING
                                    }
                                >
                                    {fetchStatus === FETCH_STATUS.FETCHING
                                        ? 'Loading...'
                                        : 'Load more results'}
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </Downshift>
        </div>
    );
};

Autosuggest.propTypes = {
    entities: PropTypes.arrayOf(PropTypes.object)
};

export default withRouter(connect(mapStateToProps)(Autosuggest));
