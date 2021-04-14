export const addCartItem = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find((item) => {
		return item.id === cartItemToAdd.id;
	});

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};