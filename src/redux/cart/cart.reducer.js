import { ADD_ITEM_TO_CART } from './cart.types';
import { addCartItem } from './cart.utils';

const initialState = {
	cartItems: [],
};

const cartReducer = (state = initialState, action) => {
	const { type, payload } = action;
	const { cartItems } = state;

	switch (type) {
		case ADD_ITEM_TO_CART: {
			return {
				...state,
				cartItems: addCartItem(cartItems, payload),
			};
		}
		default:
			return {
				...state,
			};
	}
};

export default cartReducer;
