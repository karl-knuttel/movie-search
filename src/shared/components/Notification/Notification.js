import React from 'react';
import PropTypes from 'prop-types';

const Notification = props => {
    const { onClose, message, type } = props;

    return (
        <div className={`c-notification ${type ? type : ''}`}>
            <header className="notification__header">
                <button className="notification__close" onClick={onClose}>
                    &times;
                </button>
            </header>
            <div className="notification__body">{message}</div>
        </div>
    );
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    type: PropTypes.string
};

export default Notification;
