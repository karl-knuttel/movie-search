import React from 'react';
import { shallow } from 'enzyme';

import MovieTile from './MovieTile';

describe('<MovieTile />', () => {
    it('Renders properly', () => {
        const wrapper = shallow(
            <MovieTile
                imageAlt="Test alt"
                imageUrl="testUrl.jpg"
                rating={5}
                title="Test Title"
            />
        );
        expect(wrapper.find('img').prop('src')).toEqual('testUrl.jpg');
        expect(wrapper.find('h4').text()).toEqual('Test Title');
        expect(wrapper.find('h5').text()).toEqual('Rating: 5');
    });

    it('Responds to click events', () => {
        const onclick = jest.fn();
        const wrapper = shallow(
            <MovieTile
                imageAlt="Test alt"
                imageUrl="testUrl.jpg"
                rating={5}
                title="Test Title"
                onClick={onclick}
            />
        );

        wrapper.simulate('click');
        expect(onclick).toHaveBeenCalled();
    });
});
