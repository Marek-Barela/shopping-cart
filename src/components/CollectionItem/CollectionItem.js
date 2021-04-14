import React from 'react';
import getNumberAsPrice from 'utils/getNumberAsPrice';
import { addItemToCart } from 'redux/cart/cart.action';
import { connect } from 'react-redux';

import './CollectionItem.styles.scss';

const CollectionItem = ({ item, addItemToCart }) => {
	const { title, cover, price, availability } = item;

	const handleButtonClick = () => {
		if (!availability) return;
		addItemToCart(item);
	};

	return (
		<div className='collection-item'>
			<div className='collection-item-description'>
				<img src={cover} alt='' />
				<p className='title'>{title}</p>
				{availability && <span className='price'>{getNumberAsPrice(price)}zł</span>}
			</div>

			<button
				className='add-product'
				onClick={handleButtonClick}
				disabled={!availability}>
				{availability ? 'Dodaj do koszyka' : 'Produkt niedostępny'}
			</button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItemToCart: (cartItem) => dispatch(addItemToCart(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
