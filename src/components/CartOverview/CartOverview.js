import React from 'react';
import { CartPreview } from 'components';
import { selectCartItems } from 'redux/cart/cart.selector';
import { connect } from 'react-redux';

import './CartOverview.styles.scss';

const CartOverview = ({ setIsHidden, cartItems }) => {
	const handleCartContainerClick = (e) => {
		e.stopPropagation();
	};

	return (
		<div className='cart-overview' onClick={() => setIsHidden(true)}>
			<div className='cart-container' onClick={handleCartContainerClick}>
				<div className='cart-head'>
					<p>Twój Koszyk</p>
					<span className='cart-close' onClick={() => setIsHidden(true)}>
						&#10799;
					</span>
				</div>
				<div className='cart-body'>
					{cartItems.length ? (
						<CartPreview cartItems={cartItems} />
					) : (
						<p>Twój koszyk jest pusty</p>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartOverview);
