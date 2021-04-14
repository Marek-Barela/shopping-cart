import { ADD_ITEM_TO_CART } from './cart.types';

export const addItemToCart = (payload) => {
	return {
		type: ADD_ITEM_TO_CART,
		payload,
	};
};
