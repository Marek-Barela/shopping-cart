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

export const removeCartItem = (cartItems, cartItemIdToRemove) => {
	return cartItems.filter((cartItem) => {
		return cartItem.id !== cartItemIdToRemove;
	});
};
