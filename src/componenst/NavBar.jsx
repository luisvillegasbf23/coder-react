import logo from "../img/logo-lv.png";
import { CartWidget } from "./CartWidget";

function NavBar() {
	return (
		<div className="App">
			<img className="logo" src={logo} alt="" />
			<ul className="ul">
				<li> HOME</li>
				<li> CATEGORIES</li>
				<li> WHO WE ARE </li>
			</ul>
			<CartWidget />
		</div>
	);
}

export default NavBar;
