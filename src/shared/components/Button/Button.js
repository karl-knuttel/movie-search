import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const { buttonText, disabled, onClick, type, variant } = props;

    return (
        <button
            type={type || 'button'}
            onClick={onClick}
            className={`c-button ${variant ? variant : 'primary'}`}
            disabled={disabled || false}
        >
            {buttonText}
        </button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    variant: PropTypes.string
};

export default Button;
