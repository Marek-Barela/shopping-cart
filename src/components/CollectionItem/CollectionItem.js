import React from 'react';
import getNumberAsPrice from 'utils/getNumberAsPrice';

import './CollectionItem.styles.scss';

const CollectionItem = ({ item }) => {
	const { title, cover, price, availability } = item;

	const handleButtonClick = () => {
		if (!availability) return;
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

export default CollectionItem;
