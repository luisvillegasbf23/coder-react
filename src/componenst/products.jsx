export const products = [
	{ id: `1`, name: "nike", price: 500 },
	{ id: `2`, name: "adidas", price: 500 },
	{ id: `3`, name: "puma", price: 500 },
];
export const traerProductos = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(products);
	}, 2000);
});
