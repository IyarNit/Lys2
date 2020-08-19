import React, { createRef, useState, useRef } from 'react';
import axios from 'axios';
import translate from '../translation/do-translate';


const Form = (props) => {
    //////Hooks/////
    const [show, setShow] = useState(false)
    const [nameInp, setNameInp] = useState(false)
    const [emailInp, setEmailInp] = useState(false)
    const [phoneInp, setPhoneInp] = useState(false)
    const [textInp, setTextInp] = useState(false)


    const [primaryContact, setPrimaryContact] = useState('email')

    ////////Functions////////////
    const nameInput = useRef({});
    const emailInput = useRef({});
    const phoneInput = useRef({});
    const subjectInput = useRef({});
    const textInput = useRef({});

    const sendEmail = async () => {

        const selectedPrimaryContact = primaryContact === 'email' ? emailInput : phoneInput;


        if (!nameInput.current.value || !textInput.current.value || !selectedPrimaryContact.current.value) {
            setNameInp(true)
            setEmailInp(true)
            setPhoneInp(true)
            setTextInp(true)
            alert("You have not filled all necessary fields")
            return
        }
        try {
            const url = `http://localhost:4567/contact`
            const result = await axios.post(url, { name: nameInput.current.value, [primaryContact]: selectedPrimaryContact.current.value, text: textInput.current.value }, { headers: { "Content-Type": "application/json" } })
            if (result.data.message === "Email Sent") {
                alert(result.data.message)
                nameInput.current.value = ""
                selectedPrimaryContact.current.value = ""
                subjectInput.current.value = ""
                textInput.current.value = ""
            }
            else {
                alert(result.data.message)
                const { key } = result.data
                if (key === "name") {
                    nameInput.current.value = ""
                    setNameInp(true)
                }
                if (key === "email") {
                    emailInput.current.value = ""
                    setEmailInp(true)
                }
                if (key === "phone") {
                    phoneInput.current.value = ""
                    // setShow(true)
                    setPhoneInp(true)
                }
                if (key === "message") {
                    textInput.current.value = ""
                    setTextInp(true)
                }
            }
        }
        catch (error) {
            console.error("catch", error);
        }
    }

    const classReset = (e) => {
        if (e.target.name === "name") {
            setNameInp(false)
        }
        if (e.target.name === "email") {
            setEmailInp(false)
        }
        if (e.target.name === "phone") {
            setPhoneInp(false)
        }
        if (e.target.name === "message") {
            setTextInp(false)
        }
    }

    const changeToEmail = () => {
        setPrimaryContact("email")
        if (!emailInput?.current?.value) {
            phoneInput.current.value = ""
        }
    }


    //////JSX///////
    return (
        <form>
            <div className="form-group">
                <label>{translate("contact-page-name-label")}</label>
                <input type="text" name="name" className={nameInp && !nameInput.current.value ? "form-group misField" : "form-group"}
                    ref={nameInput} onFocus={classReset} />
            </div>
            {/* <div className="form-group">
                <label>{translate("contact-page-subject-label")}</label>
                <select className="form-control" ref={subjectInput}>
                    <option></option>
                    <option>{translate('contact-page-subject-option-1')}</option>
                    <option>{translate('contact-page-subject-option-2'}</option>
                    <option>{translate('contact-page-subject-option-3'}</option>
                    <option>{translate('contact-page-subject-option-4'}</option>
                    <option>{translate('contact-page-subject-option-5'}</option> 
                </select>
            </div>  */}
            <div className="form-group">
                <label>
                    <input name="group1" type="radio" value="email" checked={primaryContact === 'email'} onChange={changeToEmail} />
                    <span>Email</span>
                </label>
            </div>
            <div className="form-group">
                <label>
                    <input name="group1" type="radio" value="phone" onChange={() => {
                        setPrimaryContact("phone")
                    }} />
                    <span>Phone</span>
                </label>
            </div>
            {primaryContact == "email" ? <div className="form-group">
                <label>{translate("contact-page-email-label")}</label>
                <input type="email" name="email" className={emailInp && !emailInput?.current?.value ? "form-group misField" : "form-group"} ref={emailInput} onFocus={classReset} />
            </div>
                :
                <div className="form-group">
                    <label>{translate("contact-page-phone-label")}</label>
                    <input type="number" name="phone" className={phoneInp && !phoneInput?.current?.value ? "form-group misField" : "form-group"} ref={phoneInput} onFocus={classReset} />
                </div>
            }
            <div className="form-group">
                <label>{translate("contact-page-message-label")}</label>
                <textarea className={textInp && !textInput.current.value ? "form-control misField" : "form-control"} style={{ resize: "none" }} rows="5" cols="50" name="message" ref={textInput} onFocus={classReset} />
            </div>
            <div className="form-group">
                <button className="btn" type="button" onClick={sendEmail}>{translate('contact-page-button-text')}
                    <i className="fas fa-external-link-alt" style={{ marginLeft: '15px' }}></i>
                </button>
            </div>
        </form>
    )
}

export default Form