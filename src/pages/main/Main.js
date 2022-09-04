import React from 'react'

import Navbar from '../../components/header/Navbar';
import Brands from '../../components/section/brands/Brands';
import NearbyOffer from '../../components/section/offers/NearbyOffer';
import OtherOffers from '../../components/section/offers/other offers/OtherOffers';
import AdsSection from '../../components/UI/ads/AdsSection';
import AnimatedAds from '../../components/UI/ads/AnimatedAds';

import './Main.css';

const Main = () => {
    return (
        <>
            <Navbar />
            <AnimatedAds />
            <AdsSection>
                <img src={require('../../assests/ads2.png')} alt="ads" className='ads-img' />
            </AdsSection>
            <Brands />
            <AnimatedAds />
            <NearbyOffer />
            <AdsSection>
                <img src={require('../../assests/ads3.png')} alt="ads" className='ads-img' />
            </AdsSection>
            <OtherOffers />
            <AdsSection>
                <img src={require('../../assests/ads4.png')} alt="ads" className='ads-img' />
            </AdsSection>
        </>
    )
};

export default Main;