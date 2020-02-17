import React from 'react';
import PropTypes from 'prop-types';

const Pagination = props => {
    const {
        currentPage,
        isDisabledLeft,
        isDisabledRight,
        onNextClick,
        onPrevClick,
        totalPages
    } = props;

    return (
        <div className="c-pagination">
            <div className="pagination__inner">
                <button
                    className={`pagination__arrow pagination__arrow--left ${
                        isDisabledLeft ? 'disabled' : ''
                    }`}
                    onClick={onPrevClick}
                    disabled={isDisabledLeft}
                />
                <h6 className="pagination__text">
                    Showing page {currentPage} of {totalPages}
                </h6>
                <button
                    className={`pagination__arrow pagination__arrow--right ${
                        isDisabledRight ? 'disabled' : ''
                    }`}
                    onClick={onNextClick}
                    disabled={isDisabledRight}
                />
            </div>
        </div>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number,
    isDisabledLeft: PropTypes.bool.isRequired,
    isDisabledRight: PropTypes.bool.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onPrevClick: PropTypes.func.isRequired,
    totalPages: PropTypes.number
};

export default Pagination;
