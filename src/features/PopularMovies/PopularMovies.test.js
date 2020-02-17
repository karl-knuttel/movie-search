import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import INITIAL_STATE from './store/PopularMovies.state';
import { testEntities } from './PopularMoviesTestData';
import ConnectedPopularMovies, { PopularMovies } from './PopularMovies';

describe('<PopularMovies />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <PopularMovies
                entities={[]}
                fetchStatus="none"
                currentPage={1}
                pageCount={10}
            />
        );
    });

    it('Renders correctly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Renders two pagination components', () => {
        const pagination = wrapper.find('Pagination');
        expect(pagination.length).toEqual(2);
    });

    it('Renders no MovieTile components if there are no entities present', () => {
        const movieTile = wrapper.find('MovieTile');
        expect(movieTile.length).toEqual(0);
    });
});

describe('<PopularMovies /> with entities', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <PopularMovies
                entities={testEntities}
                fetchStatus="none"
                currentPage={1}
                pageCount={10}
            />
        );
    });

    it('Renders correctly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Renders no MovieTile components if there are no entities present', () => {
        const movieTile = wrapper.find('MovieTile');
        expect(movieTile.length).toEqual(testEntities.length);
    });
});

describe('<ConnectedPopularMovies />', () => {
    const initialState = INITIAL_STATE;
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <ConnectedPopularMovies />
            </Provider>
        );
    });

    it('Renders correctly', () => {
        expect(wrapper.length).toEqual(1);
    });
});
