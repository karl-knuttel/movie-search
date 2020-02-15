import React from 'react';
import PropTypes from 'prop-types';

const TextInput = React.forwardRef((props, ref) => {
    const {
        id,
        labelText,
        onBlur,
        onChange,
        onFocus,
        onKeyDown,
        placeholder,
        value,
        autoComplete
    } = props;

    return (
        <div className="c-text-input">
            {labelText && (
                <label className="text-input__label" htmlFor={id}>
                    {labelText}
                </label>
            )}
            <input
                ref={ref}
                className="text-input__input"
                id={id}
                onChange={e => onChange(e)}
                placeholder={placeholder}
                type="text"
                value={value}
                onKeyDown={onKeyDown}
                onFocus={onFocus}
                onBlur={onBlur}
                autoComplete={autoComplete || 'on'}
            />
        </div>
    );
});

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
};

TextInput.defaultProps = {
    id: '',
    labelText: '',
    onChange: () => null,
    placeholder: '',
    value: ''
};

export default TextInput;
