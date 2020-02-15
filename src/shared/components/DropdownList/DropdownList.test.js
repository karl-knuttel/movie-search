import React from 'react';
import { shallow } from 'enzyme';

import DropdownList from './DropdownList';

describe('<DropdownList />', () => {
    it('Renders a single item properly', () => {
        const wrapper = shallow(
            <DropdownList>
                <li>Test item</li>
            </DropdownList>
        );

        const listItems = wrapper.find('li');
        expect(listItems).toHaveLength(1);
    });

    it('Renders a list of items properly', () => {
        const wrapper = shallow(
            <DropdownList>
                <li>Test item</li>
                <li>Test item</li>
            </DropdownList>
        );

        const listItems = wrapper.find('li');
        expect(listItems).toHaveLength(2);
    });
});
