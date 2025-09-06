import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <nav className={`${styles.nav}`}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Help Us</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;