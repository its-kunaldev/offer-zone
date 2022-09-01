import React  from 'react'
import { useSelector } from 'react-redux';

import Footer from '../../components/footer/Footer';
import MainHeader from '../../components/header/MainHeader';
import Brands from '../../components/section/brands/Brands';
import NearbyOffer from '../../components/section/offers/NearbyOffer';
import OtherOffers from '../../components/section/offers/other offers/OtherOffers';
import AdsSection from '../../components/UI/ads/AdsSection';
import AnimatedAds from '../../components/UI/ads/AnimatedAds';
import ModalWindow from '../../components/UI/modal window/ModalWindow';
import Searches from '../../components/UI/search section/Searches';

import './Main.css';

const Main = () => {

    const isFocus = useSelector(state => state.uiSliceReducer.isFocus);

    return(
        <>
            <ModalWindow />
            {isFocus && <Searches />}
            <MainHeader />
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
            <Footer />
        </>
    )
};

export default Main;