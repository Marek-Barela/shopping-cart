import React from 'react';
import { CartItem } from 'components';
import totalValue from 'utils/getTotalItemsValueAsPrice';

import './CartPreview.styles.scss';

const CartPreview = ({ cartItems }) => {
	return (
		<div>
			{cartItems.map((cartItem) => {
				return <CartItem key={cartItem.id} {...cartItem} />;
			})}
			<div className='cart-preview-total'>
				<span>Suma: {totalValue(cartItems)}zł</span>
			</div>
		</div>
	);
};

export default CartPreview;
