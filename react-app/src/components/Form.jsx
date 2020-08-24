import React, { createRef, useState, useRef } from 'react';
import axios from 'axios';
import translate from '../translation/do-translate';
import Modal from "../components/Modal"
import { TranslatedInput, TranslatedMessageArea } from "../translation/SecondaryTransaltor"

const Form = (props) => {
    //////Hooks/////
    const [nameInp, setNameInp] = useState(false)
    const [emailInp, setEmailInp] = useState(false)
    const [phoneInp, setPhoneInp] = useState(false)
    const [textInp, setTextInp] = useState(false)
    const [primaryContact, setPrimaryContact] = useState('email')
    const [showModal, setShowModal] = useState(false)
    const [modalText, setModalText] = useState("")

    const sendingBtn = document.getElementById("sendBtn")
    ////////Functions////////////
    const nameInput = useRef({});
    const emailInput = useRef({});
    const phoneInput = useRef({});
    const textInput = useRef({});

    const sendEmail = async (e) => {
        const sendingBtn = document.getElementById("sendBtn")
        sendingBtn.disabled = true
        const selectedPrimaryContact = primaryContact === 'email' ? emailInput : phoneInput;
        if (!nameInput.current.value || !textInput.current.value || !selectedPrimaryContact.current.value) {
            setNameInp(true)
            setEmailInp(true)
            setPhoneInp(true)
            setTextInp(true)
            setModalText(translate("missing-fields-alert"))
            setShowModal(true)
            sendingBtn.disabled = false
            return
        }
        try {
            const url = `http://localhost:4567/contact`
            const result = await axios.post(url, { name: nameInput.current.value, [primaryContact]: selectedPrimaryContact.current.value, text: textInput.current.value }, { headers: { "Content-Type": "application/json" } })
            if (result.data.message === "Email Sent") {
                setModalText(translate("email-sent"))
                setShowModal(true)
                nameInput.current.value = ""
                selectedPrimaryContact.current.value = ""
                textInput.current.value = ""
                sendingBtn.disabled = false
            }
            else {
                console.log(result.data)
                const { key } = result.data
                // alert(result.data.message, "fix")
                sendingBtn.disabled = false

                if (key === "name") {
                    setModalText(translate("problem-name"))
                    setShowModal(true)
                    nameInput.current.value = ""
                    setNameInp(true)
                }
                if (key === "email") {
                    setModalText(translate("problem-email-not-valid"))
                    setShowModal(true)
                    emailInput.current.value = ""
                    setEmailInp(true)
                }
                if (key === "phone") {
                    setModalText(translate("problem-phone-not-valid"))
                    setShowModal(true)
                    phoneInput.current.value = ""
                    setPhoneInp(true)
                }
                if (key === "message") {
                    setModalText(translate("problem-message"))
                    setShowModal(true)
                    textInput.current.value = ""
                    setTextInp(true)
                }
            }
        }
        catch (error) {
            // console.log("catch", error);
            setModalText(translate("problem-email"))
            setShowModal(true)
            sendingBtn.disabled = false
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

    const hideModal = () => {
        setShowModal(false)
    }

    //////JSX///////
    return (
        <>
            <form>
                <div className="form-group">
                    <label>{translate("contact-page-name-label")}</label>
                    {/* <input type="text" name="name" className={nameInp && !nameInput.current.value ? "form-group misField" : "form-group"}
                    ref={nameInput} onFocus={classReset} /> */}

                    <TranslatedInput element="input" type="text" name="name" className={nameInp && !nameInput.current.value ? "form-group misField" : "form-group"} reference={nameInput} onFocus={classReset} translatedIdTarget="name-input-placeholder" />
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
                        <span>{translate("email-radio-span")}</span>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input name="group1" type="radio" value="phone" onChange={() => {
                            setPrimaryContact("phone")
                        }} />
                        <span>{translate("phone-radio-span")}</span>
                    </label>
                </div>
                {primaryContact == "email" ? <div className="form-group">
                    <label>{translate("contact-page-email-label")}</label>
                    {/* <input type="email" name="email" className={emailInp && !emailInput?.current?.value ? "form-group misField" : "form-group"} ref={emailInput} onFocus={classReset} /> */}
                    <TranslatedInput element="input" type="email" name="email" className={emailInp && !emailInput?.current?.value ? "form-group misField" : "form-group"} reference={emailInput} onFocus={classReset} translatedIdTarget="email-input-placeholder" />
                </div>
                    :
                    <div className="form-group">
                        <label>{translate("contact-page-phone-label")}</label>
                        {/* <input type="number" name="phone" className={phoneInp && !phoneInput?.current?.value ? "form-group misField" : "form-group"} ref={phoneInput} onFocus={classReset} /> */}
                        <TranslatedInput element="input" type="number" name="phone" className={phoneInp && !phoneInput?.current?.value ? "form-group misField" : "form-group"} reference={phoneInput} onFocus={classReset} translatedIdTarget="phone-input-placeholder" />

                    </div>
                }
                <div className="form-group">
                    <label>{translate("contact-page-message-label")}</label>
                    {/* <textarea className={textInp && !textInput.current.value ? "form-control misField" : "form-control"} style={{ resize: "none" }} rows="5" cols="50" name="message" ref={textInput} onFocus={classReset} /> */}

                    <TranslatedMessageArea element="textarea" className={textInp && !textInput.current.value ? "form-control misField" : "form-control"} style={{ resize: "none" }} rows="5" cols="50" name="message" reference={textInput} onFocus={classReset} />
                </div>
                <div className="form-group">
                    <button id="sendBtn" className="btn" type="button" value="submit" onClick={sendEmail}>{translate('contact-page-button-text')}
                        <i className="fas fa-external-link-alt" style={{ marginLeft: '15px' }}></i>
                    </button>
                </div>
            </form>
            <Modal show={showModal} hide={hideModal} btn={""} display={"none"}>
                {modalText}
                <br />
                <button type="button" className="btn btn-dark" style={{ marginTop: "15px", marginBottom: "15px" }} onClick={() => { setShowModal(false) }}>Ok</button>
            </Modal >
        </>
    )
}

export default Form