import HeroSection from "./Hero";
import Navigation from "./Navigation";

function Header() {
    return (
        <div className="wrapper">
            <header>
                <div className="headerBox">
                    <a className="logoBar" href="#">
                        <img src="/images/logo.png" alt="Logo Images" /></a>
                    <Navigation />
                    <button>Login</button>
                </div>
            </header>
            <HeroSection />
        </div>
    )
}

export default Header;