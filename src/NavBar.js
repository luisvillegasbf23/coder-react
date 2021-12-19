import "./scss/app.scss";
import logo from "./img/logo-lv.png";

function NavBar() {
	return (
		<div className="App">
			<img className="logo" src={logo} alt="" />
			<ul className="ul">
				<li> home</li>
				<li> categories</li>
				<li> who we are</li>
			</ul>
		</div>
	);
}

export default NavBar;
