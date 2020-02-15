import React from 'react';
import PropTypes from 'prop-types';

const DropdownList = props => {
    const { children, listRef } = props;
    return (
        <ul ref={listRef} className="c-dropdown-list">
            {children}
        </ul>
    );
};

DropdownList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
        PropTypes.node
    ])
};

export default DropdownList;
