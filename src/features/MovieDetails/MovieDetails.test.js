import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import INITIAL_STATE from './store/MovieDetails.state';
import { testEntity } from './MovieDetailsTestData';
import { ConnectedMovieDetails, MovieDetails } from './MovieDetails';

describe('<MovieDetails />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <StaticRouter>
                <MovieDetails
                    movie={testEntity}
                    fetchStatus="fetched"
                    currentPage={1}
                    pageCount={10}
                />
            </StaticRouter>
        );
    });

    it('Renders correctly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Renders an image backdrop', () => {
        const backdrop = wrapper.find('.movie-details__backdrop');
        expect(backdrop.length).toEqual(1);
    });

    it('Renders a MovieDetail component', () => {
        const movieDetail = wrapper.find('MovieDetail');
        expect(movieDetail.length).toEqual(1);
    });
});

describe('<ConnectedMovieDetails />', () => {
    const initialState = { get: () => INITIAL_STATE };
    const mockStore = configureStore();
    let store, wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = shallow(<ConnectedMovieDetails store={store} />);
    });

    it('Renders correctly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Connects to the store correctly', () => {
        const entity = wrapper.find('MovieDetails').prop('movie');
        expect(entity).toEqual(INITIAL_STATE.entity);

        const fetchStatus = wrapper.find('MovieDetails').prop('fetchStatus');
        expect(fetchStatus).toEqual(INITIAL_STATE.fetchStatus);
    });
});
