import React, { useState } from "react";

export const ItemCount = ({ min, max }) => {
	const [counter, setCounter] = useState(min);

	const handleIncrement = () => {
		if (counter < max) {
			setCounter((prev) => prev + 1);
		} else {
			alert(`no hay mas stock`);
		}
	};

	const handleDecrement = () => {
		if (counter > min) {
			setCounter((prev) => prev - 1);
		} else {
			alert(`minimo 1`);
		}
	};

	return (
		<div>
			<div className="counter">
				<button onClick={handleDecrement}> -</button>
				<h1> {counter}</h1>
				<button onClick={handleIncrement}> +</button>
			</div>
			<div>
				<p> agregaste {counter} items al carrito</p>
			</div>
		</div>
	);
};
