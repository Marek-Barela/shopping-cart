import React from 'react';
import { removeItemFromCart } from 'redux/cart/cart.action';
import { connect } from 'react-redux';
import getNumberAsPrice from 'utils/getNumberAsPrice';

import './CartItem.styles.scss';

const CartItem = ({ id, cover, title, price, quantity, removeCartItem }) => {
	const handleRemoveClick = (id) => {
		removeCartItem(id);
	};

	return (
		<div className='cart-item-container'>
			<div className='cart-item-image-wrapper'>
				<img src={cover} alt='' />
			</div>
			<div className='cart-item-description'>
				<p className='cart-item-title'>{title}</p>
				<p className='cart-item-price'>Cena: {getNumberAsPrice(price)}zł</p>
				<p className='cart-item-quantity'>Ilość: {quantity}</p>
				<p className='cart-item-total'>Suma: {getNumberAsPrice(quantity * price)}zł</p>
			</div>
			<div className='remove-item'>
				<span title='Usuń' onClick={() => handleRemoveClick(id)}>
					&#10799;
				</span>
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	removeCartItem: (id) => dispatch(removeItemFromCart(id)),
});

export default connect(null, mapDispatchToProps)(CartItem);
