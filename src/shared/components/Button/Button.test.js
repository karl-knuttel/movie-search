import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
    const onclick = jest.fn();

    it('Renders properly', () => {
        const wrapper = shallow(<Button buttonText="Test" onClick={onclick} />);

        expect(wrapper.text()).toEqual('Test');
    });

    it('Responds to click events', () => {
        const wrapper = shallow(<Button buttonText="Test" onClick={onclick} />);

        wrapper.simulate('click');
        expect(onclick).toHaveBeenCalled();
    });
});
