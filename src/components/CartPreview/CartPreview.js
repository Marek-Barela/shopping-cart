import React from 'react';

const CartPreview = ({ cartItems }) => {
	return (
		<div>
			{cartItems.map((item) => {
				return item.title;
			})}
		</div>
	);
};

export default CartPreview;
