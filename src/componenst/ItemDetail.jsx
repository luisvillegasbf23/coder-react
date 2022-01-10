import React from "react";

const ItemDetail = ({ producto }) => {
	return (
		<div className="card">
			<h2>{producto.name}</h2>
			<h3>Precio: {producto.price}</h3>
		</div>
	);
};

export default ItemDetail;
