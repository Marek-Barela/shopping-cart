import { ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from './cart.types';

export const addItemToCart = (payload) => {
	return {
		type: ADD_ITEM_TO_CART,
		payload,
	};
};

export const removeItemFromCart = (id) => {
	return {
		type: REMOVE_ITEM_FROM_CART,
		payload: id,
	};
};
