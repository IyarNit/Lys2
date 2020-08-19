import React, { useEffect } from 'react';
import translate from '../../translation/do-translate';
import Form from '../Form';
import './Contacts.css';


export const ContactUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="column">

            <div className="vid-row titles-div">
                <h2 className="_title">{translate('contacts-1-text')}</h2>
            </div>

            <div className="content">
                <div className="contact-div">
                    <Form prop={props}></Form>
                </div>
                <div className="column contact-div">
                    <div style={{
                        width: '100%',
                        marginTop: '5%',
                        marginBottom: '7%',
                        paddingLeft: '10%'
                    }}>
                        <p>{translate('contacts-2-text')}:</p>
                        <p>{translate('contacts-3-text')}</p>
                        <p>{translate('contacts-4-text')}</p>
                        <p>{translate('contacts-5-text')}</p>
                        <p>{translate('contacts-6-text')}</p>
                        <p>{translate('contacts-7-text')}</p>
                        <p>{translate('contacts-8-text')}</p>
                    </div>

                    <iframe title="googleMap" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.506675436036!2d24.009255315877372!3d49.75772544491529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQ1JzI3LjgiTiAyNMKwMDAnNDEuMiJF!5e0!3m2!1sen!2sil!4v1597038061534!5m2!1sen!2sil"
                        style={{
                            border: "0.5px solid black",
                            height: '200px',
                            width: '89%',
                            margin: '3%'
                        }}>
                    </iframe>

                </div>
            </div>

        </div>
    )
}

export default function ContactUsComp() {
    return (
        <ContactUs></ContactUs>
    )
}