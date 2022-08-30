import React from 'react'
import AdsSection from './AdsSection';

import './AnimatedAds.css';

const AnimatedAds = () => {
    return(
        <>
            <div className="moving_ads">
                <div className="all_ads">
                    <AdsSection>
                        <img src={require('../../../assests/ads1.png')} alt="ad1" className='ads-img'/>
                    </AdsSection>
                    <AdsSection>
                        <img src={require('../../../assests/ads2.png')} alt="ad2" className='ads-img'/>
                    </AdsSection>
                    <AdsSection>
                        <img src={require('../../../assests/ads1.png')} alt="ad1" className='ads-img'/>
                    </AdsSection>
                </div>
            </div>
        </>
    )
};

export default AnimatedAds;