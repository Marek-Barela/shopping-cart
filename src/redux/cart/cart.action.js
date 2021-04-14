import { ADD_ITEM_TO_CART } from './collection.types';

export const addItemToCart = (payload) => {
	return {
		type: ADD_ITEM_TO_CART,
		payload,
	};
};
