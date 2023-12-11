import React from 'react';

const Rating = ({ maxRating, rating }) => {
	return (
		<div className="mds-rating">
			{
				[...Array(Math.ceil(rating))].map((elem, index) => {
					return (
						<span key={`index-rating-${index}`} className="material-icons mds-rating-active">star</span>
					);
				})
			}
			{
				[...Array(Math.floor(maxRating - rating))].map((elem, index) => {
					return (
						<span key={`max-rating-${index}`} className="material-icons">star</span>
					);
				})
			}
		</div>
	)
}

export default Rating;