import React, { useState } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartOverview } from 'components';

import './Header.styles.scss';

const Header = () => {
	const [isHidden, setIsHidden] = useState(true);

	return (
		<header className='header'>
			<div className='cart-icon'>
				<ShoppingIcon className='shopping-icon' onClick={() => setIsHidden(false)} />
			</div>
			{!isHidden && <CartOverview setIsHidden={setIsHidden} />}
		</header>
	);
};

export default Header;
