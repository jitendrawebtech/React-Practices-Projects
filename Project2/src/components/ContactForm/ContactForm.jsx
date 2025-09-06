import Button from "../button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import styles from "./ContactForm.module.css";
import { useState } from "react";

function ContactForm() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [area, setArea] = useState("");

    function submitForm(e) {
        e.preventDefault();
        setName(e.target[0].value);
        setMail(e.target[1].value);
        setArea(e.target[2].value);
    }

    return (
        <>
            <div className={`${styles.formBox}`}>
                <div>
                    <div className={styles.btnBox}>
                        <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
                        <Button text="VIA CALL" icon={<FaPhoneAlt />} />
                    </div>
                    <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail />} />
                    <div className={`${styles.contactForm}`}>
                        <form onSubmit={submitForm}>
                            <div>
                                <label htmlFor="fName">Name</label>
                                <input type="text" id="fName" />
                            </div>
                            <div>
                                <label htmlFor="email">E-Mail</label>
                                <input type="email" id="email" />
                            </div>
                            <div>
                                <label htmlFor="textArea">Text</label>
                                <textarea name="" id="textArea" rows="10"></textarea>
                            </div>
                            <div className="text-right">
                                <Button text="SUBMIT" icon={<MdMessage />} />
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <img src="./images/formImg.svg" alt="Form Side Images" />
                </div>
            </div>
            <p>{`${name} ${mail} ${area}`}</p>
        </>
    )
}

export default ContactForm;