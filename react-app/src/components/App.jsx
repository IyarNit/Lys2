import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import AppRoutes from './appRouter/AppRoutes';
import AppLinks from './appRouter/AppLinks';
import logo from '../pic/fox-logo2.png';
import Footer from './Footer';
import Form from './Form';

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

    useEffect(() => {
        checkLocation();
    }, []);


    const [locale, setLocale] = useState(LOCALES.UKRAINIAN);
    const [contactForm, setContactForm] = useState(false);
    const [navbar, setNavbarOpen] = useState(false);


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
                                    <button onClick={() => { setLocale(LOCALES.UKRAINIAN) }} className="lang-button">
                                        <p className="lang">Укр.</p></button>/
                                        <button onClick={() => { setLocale(LOCALES.RUSSIAN) }} className="lang-button">
                                        <p className="lang">Рус.</p></button>/
                                        <button onClick={() => { setLocale(LOCALES.ENGLISH) }} className="lang-button">
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