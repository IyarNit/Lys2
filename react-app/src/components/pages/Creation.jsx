import React, { useEffect } from 'react';
import translate from '../../translation/do-translate';
import './Creation.css';

import ReactCompareImage from 'react-compare-image';
import photo_1 from '../../pic/creation/photo-1.jpg';
import sketch_1 from '../../pic/creation/sketch-1.jpg';
import photo_2 from '../../pic/creation/photo-2.jpg';
import sketch_2 from '../../pic/creation/sketch-2.jpg';

import scatch from '../../videos/scatch_fox_2.mp4';
import cr from '../../videos/cr_fox.mp4';
import work from '../../videos/work_p_fox.mp4';
import coating from '../../videos/coating_fox.mp4';
import packaging from '../../videos/packaging_fox.mp4';
import assembling from '../../videos/assembling_fox.mp4';

export const Creation = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0, { pasive: true });
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="vid-row titles-div">
                <h2 className="_title">{translate('creation-1-text')}</h2>
            </div>

            <br />

            <div className="vid-row">
                <div className="video-div-left">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={scatch} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h3 style={{ fontFamily: 'Comic Sans MS' }}>{translate('creation-2-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-2-text')}</p>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="text-bl-right">
                    <h3 style={{ fontFamily: 'Comic Sans MS', textAlign: 'right' }}>{translate('creation-3-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-3-text')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={cr} type="video/mp4" />
                    </video>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="video-div-left">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={work} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h3 style={{ fontFamily: 'Comic Sans MS' }}>{translate('creation-4-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-4-text')}</p>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="text-bl-right">
                    <h3 style={{ fontFamily: 'Comic Sans MS', textAlign: 'right' }}>{translate('creation-5-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-5-text')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={coating} type="video/mp4" />
                    </video>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="video-div-left">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={packaging} type="video/mp4" />
                    </video>
                </div>
                <div className="text-bl-left">
                    <h3 style={{ fontFamily: 'Comic Sans MS' }}>{translate('creation-6-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-6-text')}</p>
                </div>
            </div>

            <br />

            <div className="vid-row">
                <div className="text-bl-right">
                    <h3 style={{ fontFamily: 'Comic Sans MS', textAlign: 'right' }}>{translate('creation-7-title')}</h3>
                    <p style={{ paddingTop: '5%' }}>{translate('creation-7-text')}</p>
                </div>
                <div className="video-div-right">
                    <video id="video1" className="videos" autoPlay loop muted>
                        <source src={assembling} type="video/mp4" />
                    </video>
                </div>
            </div>

            <br />

            <div>
                <h3 style={{ textAlign: 'center', marginTop: '9%' }}>{translate('creation-8-text')}</h3>
            </div>
            <RenderImages></RenderImages>
            <br />
        </div>
    )
}


export const RenderImages = (props) => {
    return (
        <div className="img-row">
            <div className="img-row1">
                <ReactCompareImage leftImage={sketch_1} rightImage={photo_1} />
            </div>

            <div className="img-row2">
                <ReactCompareImage leftImage={sketch_2} rightImage={photo_2} />
            </div>
        </div>
    )
}


export default function CreationComp(props) {

    return (
        <Creation></Creation>
    )
}