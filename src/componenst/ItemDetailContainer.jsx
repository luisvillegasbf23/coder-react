import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { traerProductos } from "./products";

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({});

	useEffect(() => {
		traerProductos.then((respuesta) => setProducto(respuesta.find((prod) => prod.id === `1`)));
	}, []);
	console.log(producto);

	return (
		<div>
			<ItemDetail producto={producto} />
		</div>
	);
};

export default ItemDetailContainer;
