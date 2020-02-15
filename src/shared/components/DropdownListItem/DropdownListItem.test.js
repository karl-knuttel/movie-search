import React from 'react';
import { shallow } from 'enzyme';

import DropdownListItem from './DropdownListItem';

describe('<DropdownListItem />', () => {
    it('Renders properly', () => {
        const wrapper = shallow(<DropdownListItem value="Test value" />);

        expect(wrapper.text()).toBe('Test value');
    });

    it('Responds to click events', () => {
        const onclick = jest.fn();
        const wrapper = shallow(
            <DropdownListItem value="Test value" onClick={onclick} />
        );

        wrapper.simulate('click');
        expect(onclick).toHaveBeenCalled();
    });
});
