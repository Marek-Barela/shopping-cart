// Convert any number to price - 10.5 => 10.50 or 10 => 10.00
const getNumberAsPrice = (number) => {
	return number ? number.toFixed(2) : number;
};

export default getNumberAsPrice;
