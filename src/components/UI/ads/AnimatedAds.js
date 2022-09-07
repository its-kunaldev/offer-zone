import React from 'react'
// import AdsSection from './AdsSection';

import './AnimatedAds.css';

const AnimatedAds = () => {
    return(
        <>
            <div className="moving_ads">
                <div className="all_ads">
                    <a href='https://bhaviblogging.blogspot.com/2022/09/headphones-offer.html' className="ad">
                        <img src={require('../../../assests/ads1.png')} alt="ad1" className='ads-img'/>
                    </a>
                    <a href='https://bhaviblogging.blogspot.com/2022/09/headphones-offer.html' className="ad">
                        <img src={require('../../../assests/ads2.png')} alt="ad1" className='ads-img'/>
                    </a>
                    <a href='https://bhaviblogging.blogspot.com/2022/09/headphones-offer.html' className="ad">
                        <img src={require('../../../assests/ads1.png')} alt="ad1" className='ads-img'/>
                    </a>
                </div>
            </div>
        </>
    )
};

export default AnimatedAds;