import styles from "./Button.module.css";
function Button({ isOutline, icon, text, ...rest }) {

    return (
        <button className={`${isOutline ? styles.outlineBtn : styles.btn1}`}>{icon} {text} </button>
    )
}

export default Button;