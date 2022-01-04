import React, { useState, useEffect } from "react";

import { traerProductos } from "./products";
import ItemList from "./ItemList";

export const ItemListContainer = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		traerProductos
			.then((respuesta) => {
				setData(respuesta);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<div>
			{loading ? (
				<h3>Loading...</h3>
			) : (
				<div>
					<h2 style={{ textAlign: "center" }}>Welcome to my page</h2>
					<ItemList productos={data} />
				</div>
			)}
		</div>
	);
};
