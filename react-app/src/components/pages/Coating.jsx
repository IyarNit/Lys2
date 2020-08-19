import React, { useState, useEffect } from 'react';
import translate from '../../translation/do-translate';
import './Coating.css';


import texture_1 from '../../pic/coating/coat-1 (1).JPG';
import texture_2 from '../../pic/coating/coat-1 (2).jpg';
import texture_3 from '../../pic/coating/coat-1 (3).jpg';
import texture_4 from '../../pic/coating/coat-2 (1).JPG';
import texture_5 from '../../pic/coating/coat-2 (2).jpg';
import texture_6 from '../../pic/coating/coat-2 (3).jpg';
import texture_7 from '../../pic/coating/coat-3  (1).jpg';
import texture_8 from '../../pic/coating/coat-3  (2).jpg';
import texture_9 from '../../pic/coating/coat-3  (3).jpg';
import texture_10 from '../../pic/coating/coat-4 (1).jpg';
import texture_11 from '../../pic/coating/coat-4 (2).jpg';
import texture_12 from '../../pic/coating/coat-4 (3).jpg';
import texture_13 from '../../pic/coating/coat-5 (1).jpg';
import texture_14 from '../../pic/coating/coat-5 (2).jpg';
import texture_15 from '../../pic/coating/coat-5 (3).jpg';
import texture_16 from '../../pic/coating/coat-6 (1).jpg';
import texture_17 from '../../pic/coating/coat-6 (2).jpg';
import texture_18 from '../../pic/coating/coat-6 (3).jpg';
import texture_19 from '../../pic/coating/coat-7 (1).jpg';
import texture_20 from '../../pic/coating/coat-7 (2).jpg';
import texture_21 from '../../pic/coating/coat-7 (3).jpg';
import texture_22 from '../../pic/coating/coat-8 (1).jpg';
import texture_23 from '../../pic/coating/coat-8 (2).jpg';
import texture_24 from '../../pic/coating/coat-8 (3).JPG';
import texture_25 from '../../pic/coating/coat-9 (1).jpg';
import texture_26 from '../../pic/coating/coat-9 (2).jpg';
import texture_27 from '../../pic/coating/coat-9 (3).jpg';

export const Coating = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [toningOpen, setToningOpen] = useState(false);
    const [paintingWithEnamelsOpen, setPaintingWithEnamelsOpen] = useState(false);
    const [oilCoatingOpen, setOilCoatingOpen] = useState(false);
    const [agingEffectOpen, setAgingEffectOpen] = useState(false);
    const [antiquityEffectOpen, setAntiquityEffectOpen] = useState(false);
    const [provenceFlaxOpen, setProvanceFlaxOpen] = useState(false);
    const [provenceBrushOpen, setProvenceBrushOpen] = useState(false);
    const [brushingOpen, setBrushingOpen] = useState(false);
    const [decorOpen, setDecorOpen] = useState(false);


    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '5%' }}>
            <div className="vid-row titles-div">
                <h2 className="_title">{translate('coating-1-text')}</h2>
            </div>

            <div onClick={() => setToningOpen(!toningOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-2-row-1')} {!toningOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={toningOpen ? "row -open" : "row -closed"}>
                    <div className={toningOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-2-text')}</p>
                                <div className='list'>
                                    <li>{translate('coating-2-row-2')}</li>
                                    <li>{translate('coating-2-row-3')}</li>
                                </div>
                                <br />
                                <p>{translate('coating-2-row-4')}</p>
                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_1} alt="texture" />
                                <img className="texture-img" src={texture_2} alt="photo1" />
                                <img className="texture-img" src={texture_3} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setPaintingWithEnamelsOpen(!paintingWithEnamelsOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-3-row-1')} {!paintingWithEnamelsOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={paintingWithEnamelsOpen ? "row -open" : "row -closed"}>
                    <div className={paintingWithEnamelsOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-2-text')}</p>
                                <div className='list'>
                                    <li>{translate('coating-3-row-2')}</li>
                                    <li>{translate('coating-3-row-3')}</li>
                                </div>
                                <br />
                                <p>{translate('coating-3-row-4')}</p>
                                <p>{translate('coating-3-row-5')}</p>                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_4} alt="texture" />
                                <img className="texture-img" src={texture_6} alt="photo1" />
                                <img className="texture-img" src={texture_5} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setOilCoatingOpen(!oilCoatingOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-4-row-1')} {!oilCoatingOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={oilCoatingOpen ? "row -open" : "row -closed"}>
                    <div className={oilCoatingOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-2-text')}</p>
                                <div className='list'>
                                    <li>{translate('coating-4-row-2')}</li>
                                    <li>{translate('coating-4-row-3')}</li>
                                </div>
                                <br />
                                <p>{translate('coating-4-row-4')}</p>
                                <p>{translate('coating-4-row-5')}</p>
                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_7} alt="texture" />
                                <img className="texture-img" src={texture_9} alt="photo1" />
                                <img className="texture-img" src={texture_8} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setAgingEffectOpen(!agingEffectOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-5-row-1')} {!agingEffectOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={agingEffectOpen ? "row -open" : "row -closed"}>
                    <div className={agingEffectOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-2-text')}</p>
                                <div className='list'>
                                    <li>{translate('coating-5-row-2')}</li>
                                    <li>{translate('coating-5-row-3')}</li>
                                    <li>{translate('coating-5-row-4')}</li>
                                </div>
                                <br />
                                <p>{translate('coating-5-row-5')}</p>
                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_10} alt="texture" />
                                <img className="texture-img" src={texture_11} alt="photo1" />
                                <img className="texture-img" src={texture_12} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setAntiquityEffectOpen(!antiquityEffectOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-6-row-1')} {!antiquityEffectOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={antiquityEffectOpen ? "row -open" : "row -closed"}>
                    <div className={antiquityEffectOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-2-text')}</p>
                                <div className='list'>
                                    <li>{translate('coating-6-row-2')}</li>
                                    <li>{translate('coating-6-row-3')}</li>
                                    <li>{translate('coating-6-row-4')}</li>
                                    <li>{translate('coating-6-row-5')}</li>
                                </div>
                                <br />
                                <p>{translate('coating-6-row-6')}</p>
                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_15} alt="texture" />
                                <img className="texture-img" src={texture_14} alt="photo1" />
                                <img className="texture-img" src={texture_13} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setProvanceFlaxOpen(!provenceFlaxOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-7-row-1')} {!provenceFlaxOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={provenceFlaxOpen ? "row -open" : "row -closed"}>
                    <div className={provenceFlaxOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-2-text')}</p>
                                <div className='list'>
                                    <li>{translate('coating-7-row-2')}</li>
                                    <li>{translate('coating-7-row-3')}</li>
                                    <li>{translate('coating-7-row-4')}</li>
                                    <li>{translate('coating-7-row-5')}</li>
                                </div>
                                <br />
                                <p>{translate('coating-7-row-6')}</p>
                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_16} alt="texture" />
                                <img className="texture-img" src={texture_17} alt="photo1" />
                                <img className="texture-img" src={texture_18} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setProvenceBrushOpen(!provenceBrushOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-8-row-1')} {!provenceBrushOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={provenceBrushOpen ? "row -open" : "row -closed"}>
                    <div className={provenceBrushOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-2-text')}</p>
                                <div className='list'>
                                    <li>{translate('coating-8-row-2')}</li>
                                    <li>{translate('coating-8-row-3')}</li>
                                    <li>{translate('coating-8-row-4')}</li>
                                    <li>{translate('coating-8-row-5')}</li>
                                </div>
                                <br />
                                <p>{translate('coating-8-row-6')}</p>
                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_19} alt="texture" />
                                <img className="texture-img" src={texture_20} alt="photo1" />
                                <img className="texture-img" src={texture_21} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setBrushingOpen(!brushingOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-9-row-1')} {!brushingOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={brushingOpen ? "row -open" : "row -closed"}>
                    <div className={brushingOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-9-row-2')}</p>
                                <p>{translate('coating-9-row-3')}</p>
                                <p>{translate('coating-9-row-4')}</p>
                                <p>{translate('coating-9-row-5')}</p>
                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_22} alt="texture" />
                                <img className="texture-img" src={texture_23} alt="photo1" />
                                <img className="texture-img" src={texture_24} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div onClick={() => setDecorOpen(!decorOpen)} className="column part" style={{ width: '100%' }}>
                <h4>{translate('coating-10-row-1')} {!decorOpen ? <i className="fas fa-angle-double-right"></i> : <i className="fas fa-angle-down"></i>}</h4>
                <svg height="7" width="100%" style={{ marginTop: '-10px' }}>
                    <line x1="0" y1="0px" x2="100%" y2="0px" className="line" />
                </svg>

                <div className={decorOpen ? "row -open" : "row -closed"}>
                    <div className={decorOpen ? " -blc-open" : " -blc-closed"}>
                        <div className="row">

                            <div style={{ width: '45%', padding: '3%' }}>
                                <p>{translate('coating-2-text')}</p>
                                <div className='list'>
                                    <li>{translate('coating-10-row-2')}</li>
                                    <li>{translate('coating-10-row-3')}</li>
                                </div>
                                <br />
                                <p>{translate('coating-10-row-4')}</p>
                                <p>{translate('coating-10-row-5')}</p>
                                <p>{translate('coating-10-row-6')}</p>                            </div>
                            <div style={{ width: '55%', padding: '1%' }}>
                                <img className="texture-img" src={texture_25} alt="texture" />
                                <img className="texture-img" src={texture_26} alt="photo1" />
                                <img className="texture-img" src={texture_27} alt="photo2" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};


export default function CoatingComp(props) {
    return (
        <Coating></Coating>
    )
};