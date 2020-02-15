import React from 'react';
import PropTypes from 'prop-types';

const DropdownListItem = props => {
    const { active, onClick, children, listItemRef } = props;

    return (
        <li
            className={`c-dropdown-list-item ${active ? 'is-active' : ''}`}
            onClick={onClick}
            ref={listItemRef}
        >
            {children}
        </li>
    );
};

DropdownListItem.propTypes = {
    active: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.node
    ])
};

export default DropdownListItem;
