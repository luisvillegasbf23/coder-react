import "./scss/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./componenst/NavBar";
import reportWebVitals from "./reportWebVitals";
import { ItemListContainer } from "./componenst/ItemListContainer";
import { ItemCount } from "./componenst/ItemCount";
import ItemDetailContainer from "./componenst/ItemDetailContainer";

ReactDOM.render(
	<React.StrictMode>
		<Navbar />
		<ItemListContainer />
		<ItemCount min={1} max={10} />
		<ItemDetailContainer />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
