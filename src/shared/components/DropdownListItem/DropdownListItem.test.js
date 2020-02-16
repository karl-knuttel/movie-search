import React from 'react';
import { shallow } from 'enzyme';

import DropdownListItem from './DropdownListItem';

describe('<DropdownListItem />', () => {
    it('Renders properly', () => {
        const wrapper = shallow(
            <DropdownListItem>
                <p>Test value</p>
            </DropdownListItem>
        );

        const inner = wrapper.find('p');
        expect(inner).toHaveLength(1);
    });

    it('Responds to click events', () => {
        const onclick = jest.fn();
        const wrapper = shallow(<DropdownListItem onClick={onclick} />);

        wrapper.simulate('click');
        expect(onclick).toHaveBeenCalled();
    });
});
