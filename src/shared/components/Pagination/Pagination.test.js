import React from 'react';
import { mount, shallow } from 'enzyme';

import Pagination from './Pagination';

describe('<Pagination />', () => {
    const nextClick = jest.fn();
    const prevClick = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Pagination
                currentPage={1}
                isDisabledLeft={false}
                isDisabledRight={false}
                onNextClick={() => nextClick()}
                onPrevClick={() => prevClick()}
                totalPages={10}
            />
        );
    });

    it('Renders properly', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('Renders a h6 showing the current page and total number of pages', () => {
        const title = wrapper.find('h6');
        expect(title.text()).toEqual('Showing page 1 of 10');
    });

    it('Responds to next click events', () => {
        const nextButton = wrapper.find('.pagination__arrow--right');
        nextButton.simulate('click');
        expect(nextClick).toHaveBeenCalled();
    });

    it('Responds to prev click events', () => {
        const prevButton = wrapper.find('.pagination__arrow--left');
        prevButton.simulate('click');
        expect(prevClick).toHaveBeenCalled();
    });
});

describe('<Pagination /> with disabled props', () => {
    const nextClick = jest.fn();
    const prevClick = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Pagination
                currentPage={1}
                isDisabledLeft={true}
                isDisabledRight={true}
                onNextClick={() => nextClick()}
                onPrevClick={() => prevClick()}
                totalPages={10}
            />
        );
    });

    it('Does not call the onPrevClick function if isDisabledLeft is true', () => {
        const prevButton = wrapper.find('.pagination__arrow--left');
        prevButton.simulate('click');
        expect(prevClick).not.toHaveBeenCalled();
    });

    it('Does not call the onNextClick function if isDisabledRight is true', () => {
        const nextButton = wrapper.find('.pagination__arrow--right');
        nextButton.simulate('click');
        expect(nextClick).not.toHaveBeenCalled();
    });
});
