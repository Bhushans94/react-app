import React from 'react';

const Rating = ({ maxRating, rating }) => {
    return (
        <div className="mds-rating">
            {
                Array.from(Array(Math.ceil(rating))).map((elem, index) => {
                    return (
                        <span key={index * rating * maxRating} className="material-icons mds-rating-active">star</span>
                    );
                })
            }
            {
                Array.from(Array(Math.floor(maxRating - rating))).map((elem, index) => {
                    return (
                        <span key={maxRating + index} className="material-icons">star</span>
                    );
                })
            }
        </div>
    )
}

export default Rating;