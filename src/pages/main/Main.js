import React from 'react'

// import Footer from '../../components/footer/Footer';
// import MainHeader from '../../components/header/MainHeader';
import Navbar from '../../components/header/Navbar';
// import AllOffers from '../../components/section/all offers/AllOffers';
import Brands from '../../components/section/brands/Brands';
// import OfferDetails from '../../components/section/offer details/OfferDetails';
import NearbyOffer from '../../components/section/offers/NearbyOffer';
import OtherOffers from '../../components/section/offers/other offers/OtherOffers';
import AdsSection from '../../components/UI/ads/AdsSection';
import AnimatedAds from '../../components/UI/ads/AnimatedAds';
// import ModalWindow from '../../components/UI/modal window/ModalWindow';
// import Searches from '../../components/UI/search section/Searches';
// import Layout from '../layout/Layout';
// import Register from '../register business/Register';

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