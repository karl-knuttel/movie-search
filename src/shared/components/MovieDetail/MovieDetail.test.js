import React from 'react';
import { shallow } from 'enzyme';

import MovieDetail from './MovieDetail';

describe('<MovieDetail />', () => {
    it('Renders properly', () => {
        const wrapper = shallow(
            <MovieDetail
                countries={[]}
                genres={[]}
                homepageUrl="http://testUrl.com"
                imageAlt="Test title"
                imageUrl="http://testUrl.jpg"
                imdbUrl="http://testUrl.com"
                description="lorum ipsum text"
                rating={10}
                year="1993"
                tagline="lorem ipsum text"
                title="Test title"
            />
        );

        expect(wrapper.find('p').text()).toBe('lorum ipsum text');
    });
});
