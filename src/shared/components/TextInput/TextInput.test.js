import React from 'react';
import { mount } from 'enzyme';

import TextInput from './TextInput';

describe('<TextInput />', () => {
    it('Renders properly', () => {
        const wrapper = mount(<TextInput id="testInput" value="Test value" />);

        const inputField = wrapper.find('input');
        expect(inputField.instance().value).toBe('Test value');
    });

    it('Does not render a label if no prop is provided', () => {
        const wrapper = mount(<TextInput id="testInput" />);

        const inputLabel = wrapper.find('label');
        expect(inputLabel).toHaveLength(0);
    });

    it('Renders a label if prop is provided', () => {
        const wrapper = mount(
            <TextInput id="testInput" labelText="Test label text" />
        );

        const inputLabel = wrapper.find('label');
        expect(inputLabel).toHaveLength(1);
    });

    it('Responds to onChange event', () => {
        const onchange = jest.fn();
        const wrapper = mount(<TextInput id="testInput" onChange={onchange} />);

        const inputField = wrapper.find('input');
        inputField.simulate('change');
        expect(onchange).toHaveBeenCalled();
    });
});
