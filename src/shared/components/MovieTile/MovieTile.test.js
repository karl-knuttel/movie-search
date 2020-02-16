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

        // expect(wrapper.text()).toBe('Test value');
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
