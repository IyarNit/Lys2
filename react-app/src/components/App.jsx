import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoutes from './appRouter/AppRoutes';
import AppLinks from './appRouter/AppLinks';
import logo from '../pic/fox-logo2.png';
import Footer from './Footer';
import Form from './Form';
import "../components/css/modal.css"

import { MyProvider, LOCALES } from '../translation';
import translate from '../translation/do-translate';

function App() {

    function checkLocation() {
        setInterval(() => {
            let loc = window.location.href;
            if (loc === 'http://localhost:3000/contacts') {
                setContactForm(false);
            }
        }, 1000)
    }
    const checkBrowserLang = () => {
        const defLang = localStorage.getItem("Lys-Lang")
        if (defLang === "ru-RU") {
            setLocale(LOCALES.RUSSIAN)
        }
        if (defLang === "uk-UA") {
            setLocale(LOCALES.UKRAINIAN)
        }
        if (defLang === "en-US" || "en-AU" || "en-GB" || "en-IE" || "en-ZA") {
            localStorage.setItem("Lys-Lang", "en-US")
            setLocale(LOCALES.ENGLISH)
        } else {
            localStorage.setItem("Lys-Lang", "en-US")
            setLocale(LOCALES.ENGLISH)
        }
        const userDefaultLanguage = navigator.language
        console.log(userDefaultLanguage)
        if (!defLang) {
            if (userDefaultLanguage === "ru-RU") {
                localStorage.setItem("Lys-Lang", "ru-RU")
                setLocale(LOCALES.RUSSIAN)
            }
            if (userDefaultLanguage === "uk-UA") {
                localStorage.setItem("Lys-Lang", "uk-UA")
                setLocale(LOCALES.UKRAINIAN)
            }
            if (userDefaultLanguage === "en-US" || "en-AU" || "en-GB" || "en-IE" || "en-ZA") {
                localStorage.setItem("Lys-Lang", "en-US")
                setLocale(LOCALES.ENGLISH)
            } else {
                localStorage.setItem("Lys-Lang", "en-US")
                setLocale(LOCALES.ENGLISH)
            }
        }
    }

    useEffect(() => {
        checkLocation();
        checkBrowserLang()
    }, []);


    const [locale, setLocale] = useState(LOCALES.UKRAINIAN);
    const [contactForm, setContactForm] = useState(false);
    const [navbar, setNavbarOpen] = useState(false);

    const setLanguage = (e) => {
        const changeLanguage = e.target.innerHTML
        localStorage.removeItem("Lys-Lang")
        if (changeLanguage === "Рус.") {
            localStorage.setItem("Lys-Lang", "ru-RU")
            setLocale(LOCALES.RUSSIAN)
        }
        if (changeLanguage === "Укр.") {
            localStorage.setItem("Lys-Lang", "uk-UA")
            setLocale(LOCALES.UKRAINIAN)
        }
        if (changeLanguage === "Eng.") {
            localStorage.setItem("Lys-Lang", "en-US")
            setLocale(LOCALES.ENGLISH)
        }


    }
    return (
        <MyProvider locale={locale}>
            <BrowserRouter>
                <div className="App" style={{ display: 'flex' }}>

                    <div className="left-side-top">
                        <img src={logo} alt="Logo" className="nav-logo" />
                        <button className="burger-button" type="button" onClick={() => setNavbarOpen(!navbar)}>
                            {navbar ? <i className="fas fa-times  fa-2x"></i> : <i className="fas fa-bars fa-3x"></i>}
                        </button>
                    </div>
                    {!navbar ? null :
                        <div className="nuv-div">
                            <ul className="nuv-lu">
                                <li className="nav-item">
                                    <AppLinks />
                                    <p className="nav-links -t">
                                        <button onClick={() => { setLocale(LOCALES.UKRAINIAN) }} className="lang-button">
                                            <p className="-t">Укр.</p></button>/
                                        <button onClick={() => { setLocale(LOCALES.RUSSIAN) }} className="lang-button">
                                            <p className="-t">Рус.</p></button>/
                                        <button onClick={() => { setLocale(LOCALES.ENGLISH) }} className="lang-button">
                                            <p className="-t">Eng.</p></button>
                                        <i className="fas fa-angle-double-right"></i>
                                    </p>
                                </li>
                            </ul>
                        </div>}

                    <div className="NavBar NavBar-burgerOpen">
                        <ul>
                            <li className="nav-item">
                                <AppLinks />
                                <p className="nav-links">
                                    <button onClick={setLanguage} className="lang-button">
                                        <p className="lang">Укр.</p></button>/
                                        <button value="Pyc." onClick={setLanguage} className="lang-button">
                                        <p className="lang">Рус.</p></button>/
                                        <button onClick={setLanguage} className="lang-button">
                                        <p className="lang">Eng.</p></button>
                                    <i className="fas fa-angle-double-right"></i>
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className="main">
                        <Switch>
                            <AppRoutes />
                        </Switch>
                        <Footer></Footer>
                        <br />
                        <div style={{ width: '100%', textAlign: 'center' }}>This site was designed and created by <a href="https://www.linkedin.com/in/julia-orendovskyi-026a30b6/">Julia Oren</a> & <a href="https://www.linkedin.com/in/iyar-nitzan-576184110/">Iyar Nitzan</a></div>
                    </div>

                    <div className="right-side-top">
                        <p> {translate('loz')} </p>
                    </div>

                    <div className="right-side-bottom">
                        <button id='contuct-button' onClick={() => { setContactForm(!contactForm) }}>
                            {!contactForm ? <i className="far fa-comment-dots fa-3x"></i> : <i className="fas fa-times  fa-3x"></i>}
                        </button>
                        {(!contactForm) ? null :
                            <div className="contact-form"> <Form></Form> </div>}
                    </div>
                </div>

            </BrowserRouter >
        </MyProvider>
    );
}

export default App;