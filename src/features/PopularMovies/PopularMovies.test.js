import React from 'react';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import INITIAL_STATE from './store/PopularMovies.state';
import { testEntities } from './PopularMoviesTestData';
import { ConnectedPopularMovies, PopularMovies } from './PopularMovies';

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
    const initialState = { get: () => INITIAL_STATE };
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<ConnectedPopularMovies store={store} />);
    });

    it('Renders correctly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Connects to the store correctly', () => {
        const entities = wrapper.find('PopularMovies').prop('entities');
        expect(entities).toEqual(INITIAL_STATE.entities);

        const fetchStatus = wrapper.find('PopularMovies').prop('fetchStatus');
        expect(fetchStatus).toEqual(INITIAL_STATE.fetchStatus);

        const currentPage = wrapper.find('PopularMovies').prop('currentPage');
        expect(currentPage).toEqual(INITIAL_STATE.currentPage);

        const pageCount = wrapper.find('PopularMovies').prop('pageCount');
        expect(pageCount).toEqual(INITIAL_STATE.pageCount);
    });
});
