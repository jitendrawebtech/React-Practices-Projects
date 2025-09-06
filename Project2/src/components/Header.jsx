import Navigation from "./navigations/Navigation";

function Header() {
	return (
		<header>
			<div className="headDiv">
				<div className="logo">
					<a href="#">
						<img src="/images/logo.png" alt="logo" />
					</a>
				</div>
				<Navigation />
			</div>
		</header>
	)
}

export default Header;