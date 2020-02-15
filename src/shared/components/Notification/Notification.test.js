import React from 'react';
import { shallow } from 'enzyme';

import Notification from './Notification';

describe('<Notification />', () => {
    it('Renders properly', () => {
        const wrapper = shallow(
            <Notification message="Test message" onClose={() => null} />
        );

        const notificationBody = wrapper.find('.notification__body');
        expect(notificationBody.text()).toBe('Test message');
    });

    it('Renders a notification type when passed as a prop', () => {
        const wrapper = shallow(
            <Notification
                message="Test message"
                onClose={() => null}
                type="warning"
            />
        );

        const warningType = wrapper.find('.warning');
        expect(warningType).toHaveLength(1);
    });

    it('Responds to click events', () => {
        const onclose = jest.fn();
        const wrapper = shallow(
            <Notification message="Test message" onClose={onclose} />
        );

        const closeButton = wrapper.find('.notification__close');
        closeButton.simulate('click');
        expect(onclose).toHaveBeenCalled();
    });
});
