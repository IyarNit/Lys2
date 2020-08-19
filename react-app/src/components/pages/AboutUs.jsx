import React, { useEffect } from 'react';
import sign from '../../pic/about/sign.jpg';
import translate from '../../translation/do-translate';
import './AboutUs.css';


export const AboutUs = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <div className="vid-row titles-div">
                <h2 className="_title">{translate('about-0-text')}</h2>
            </div>

            <div className="parallax par-1"></div>

            <div className="aboutTextDiv">
                <p>{translate('about-1-text')}</p>
                <p>{translate('about-2-text')}</p>
            </div>

            <div className="parallax par-2"></div>

            <div className="aboutTextDiv">
                <p>{translate('about-3-text')}</p>
                <p>{translate('about-4-text')}</p>
            </div>

            <div className="parallax par-3"></div>

            <div className="aboutTextDiv">
                <p>{translate('about-5-text')}</p>
                <p>{translate('about-6-text')}</p>
            </div>

            <div className="parallax par-4"></div>
            <div>
                <h5 style={{ marginLeft: '50%', marginTop: '5%' }}>{translate('about-7-text')}</h5>
                <img style={{ width: '1000px', marginLeft: '10%' }} src={sign} alt="Андрій та Ольга Лисіхіни" />
            </div><br />

        </div >
    )
}

export default function AboutUsComp(props) {
    return (
        <AboutUs></AboutUs>
    )
}