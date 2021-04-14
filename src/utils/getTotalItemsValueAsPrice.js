const getTotalItemsValueAsPrice = (listOfItems) =>
	listOfItems
		.reduce((acc, item) => {
			return acc + item.price * item.quantity;
		}, 0)
		.toFixed(2);

export default getTotalItemsValueAsPrice;
