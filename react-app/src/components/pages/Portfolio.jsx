
import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import translate from '../../translation/do-translate';
import BigImg from "../pages/BigImg"
import picturesArr, { picturesArrCol1, picturesArrCol2, picturesArrCol3 } from "../picImports/picImporter"

export const Images = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [bigPicture, setBigPicture] = useState(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="vid-row titles-div">
                <h2 className="_title">{translate('portfolio-1-text')}</h2>
            </div>
            <div className="row">
                {!bigPicture ? null :
                    <div className="big-img-div row" style={{ width: '100%' }} >
                        <div className="big-pic">
                            <img src={bigPicture} alt="" className="big-img" />
                            <button className="close-b" type="button" onClick={() => setBigPicture(null)}><i className="fas fa-times  fa-3x"></i></button>
                        </div>
                        <div className="column thumbnail-col">
                            {picturesArr.map(({ pic }) => {
                                return <BigImg className="thumbnail" src={pic} onClick={() => { setBigPicture(pic) }} />
                            })}
                        </div>
                    </div>
                }
                <div className="porfolio-col">
                    {picturesArrCol1.map(({ pic }) => {
                        return <BigImg className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
                    })}
                </div>
                <div className="porfolio-col">
                    {picturesArrCol2.map(({ pic }) => {
                        return <BigImg className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
                    })}
                </div>
                <div className="porfolio-col">
                    {picturesArrCol3.map(({ pic }) => {
                        return <BigImg className="portfolio-img" src={pic} onClick={() => { setBigPicture(pic) }} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default function PortfolioUkr(props) {
    return (
        <Images></Images>
    )
}
