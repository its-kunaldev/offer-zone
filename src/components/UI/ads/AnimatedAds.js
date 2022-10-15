import React from 'react'
// import AdsSection from './AdsSection';

import './AnimatedAds.css';

const AnimatedAds = () => {
    return(
        <>
            <div className="moving_ads">
                <div className="all_ads">
                    <div className="ad">
                        <img src={require('../../../assests/ads1.png')} alt="ad1" className='ads-img'/>
                    </div>
                    <div className="ad">
                        <img src={require('../../../assests/ads2.png')} alt="ad1" className='ads-img'/>
                    </div>
                    <div className="ad">
                        <img src={require('../../../assests/ads1.png')} alt="ad1" className='ads-img'/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AnimatedAds;