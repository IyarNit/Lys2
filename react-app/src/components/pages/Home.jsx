import React, { useEffect } from 'react';
import pictcher1 from '../../pic/IMG_4108.jpg';
import pictcher2 from '../../pic/IMG_52508.jpg';
import pictcher3 from '../../pic/IMG_3245.jpg';
import pictcher4 from '../../pic/DSC_0495.jpg';
import pictcher5 from '../../pic/DSC_0764.jpg';
import family from '../../pic/aboutUs.jpg';
import fenix from '../../pic/DSC_0200.JPG';
import sketch from '../../pic/urn_cambridge.org_id_binary_20190806050935696-0565_9780511979743_47071fig12_40.png';
import openingVid from '../../videos/fox_welcome_vid2.mp4';
import './Home.css';

import translate from '../../translation/do-translate';

export const Home = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className="column" style={{ width: '100%' }}>
            <video autoPlay loop muted className="openingVid" >
                <source src={openingVid} type="video/mp4" />
            </video>

            <div className="HomeFirst">
                <div className="text2">
                    <p> {translate('home-1-text')}</p>
                </div>
                <div className="yellow-box-two"></div>
                <div className="fenix"><img src={fenix} alt="fenix" style={{ width: '100%' }} /></div>
                <p className="LYS" style={{
                    fontSize: '200px',
                    fontFamily: 'Futara',
                    color: 'rgba(128, 128, 128, 0.3)'
                }}>
                    LYS</p>
            </div>

            <div className="HomeSecond column">
                <div style={{
                    fontSize: 'xx-large',
                    width: '100%',
                    textAlign: 'center'
                }}>
                    {translate('home-2-text')}</div>
                <br />
                <img className="img-family" src={family} alt="..." />
                <div className="yellow-box-three">
                    {translate('home-3-text')} &laquo;LYS&raquo; .</div>
                <img className="sketch" src={sketch} alt="..." />
                <div className="text3">
                    <p>{translate('home-4-text')}</p>
                </div>
            </div>

            <div className="HomeTherd column">
                <div className="row">
                    <div className="text4">
                        {translate('home-5-text')}
                    </div>
                    <img className="img-1" src={pictcher4} alt="..." />
                </div>
                <div className="row">
                    <img className="img-2" src={pictcher5} alt="..." />
                    <p className="text5">{translate('home-6-text')}</p>
                </div>
                <div className="row">
                    <div className="text6">{translate('home-7-text')}</div>
                    <div className="text7">{translate('home-8-text')}</div>
                </div>
                <br /><br />
                <div style={{
                    fontSize: 'xxx-large',
                    textAlign: 'center',
                    fontFamily: 'Century Gothic'
                }}>
                    {translate('home-9-text')}</div>
            </div>

            <div className="HomeFourth">
                <br />
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators" >
                        <li data-target="#myCarousel" data-slide-to="0" className="active">
                        </li>
                        <li data-target="#myCarousel" data-slide-to="1">
                        </li>
                        <li data-target="#myCarousel" data-slide-to="2">
                        </li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner">
                        <div className="item active">


                            <div className="carousel-div">
                                <p className="carousel-text">
                                    {translate('home-10-text')}
                                </p>
                                <img className='im' src={pictcher1} alt="pictcher1" />
                            </div>
                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <p className="carousel-text">
                                    {translate('home-11-text')}
                                </p>
                                <img className='im' src={pictcher2} alt="pictcher2" />
                            </div>

                        </div>

                        <div className="item">
                            <div className="carousel-div">
                                <p className="carousel-text">
                                    {translate('home-12-text')}
                                </p>
                                <img className='im' src={pictcher3} alt="pictcher3" />
                            </div>

                        </div>
                    </div>

                    {/* <!-- Left and right controls --> */}
                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default function HomeComp(props) {

    return (
        <Home></Home>
    )
}