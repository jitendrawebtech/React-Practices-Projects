import styles from "./ContactContent.module.css";

function ContactContent() {

    return (
        <>
            <h1 className={`${styles.contactTitle}`}>CONTACT US</h1>
            <p className={`${styles.contactPara}`}>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
        </>
    )
}

export default ContactContent;