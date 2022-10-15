import React from 'react'

import Navbar from '../../components/header/Navbar';
import Brands from '../../components/section/brands/Brands';
import NearbyOffer from '../../components/section/offers/NearbyOffer';
import OtherOffers from '../../components/section/offers/other offers/OtherOffers';
import Plans from '../../components/section/subsciption plans/Plans';
import AdsSection from '../../components/UI/ads/AdsSection';
import AnimatedAds from '../../components/UI/ads/AnimatedAds';


const Main = () => {
    return (
        <>
            <Navbar />
            <Brands />
            <AnimatedAds />
            <AdsSection>
                <img src={require('../../assests/ads2.png')} alt="ads" />
            </AdsSection>
            {/* <AnimatedAds /> */}
            <NearbyOffer />
            <AdsSection>
                <img src={require('../../assests/ads3.png')} alt="ads"/>
            </AdsSection>
            <OtherOffers />
            <AdsSection>
                <img src={require('../../assests/ads4.png')} alt="ads"/>
            </AdsSection>
            <Plans />
        </>
    )
};

export default Main;