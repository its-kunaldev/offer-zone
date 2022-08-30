import React, { Fragment } from 'react'
import MainHeader from '../../components/header/MainHeader';
import Brands from '../../components/section/brands/Brands';
import AdsSection from '../../components/UI/ads/AdsSection';
import AnimatedAds from '../../components/UI/ads/AnimatedAds';

import './Main.css';

const Main = () => {
    return(
        <>
            <MainHeader />
            <AnimatedAds />
            <AdsSection>
                <img src={require('../../assests/ads1.png')} alt="ads" className='ads-img' />
            </AdsSection>
            <AdsSection>
                <img src={require('../../assests/ads2.png')} alt="ads" className='ads-img' />
            </AdsSection>
            <Brands />
        </>
    )
};

export default Main;