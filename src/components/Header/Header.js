import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './Header.styles.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='cart-icon'>
				<ShoppingIcon className='shopping-icon' />
			</div>
		</header>
	);
};

export default Header;
