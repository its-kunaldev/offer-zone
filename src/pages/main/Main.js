import React, { Fragment, useState } from 'react'
import Footer from '../../components/footer/Footer';
import MainHeader from '../../components/header/MainHeader';
import Brands from '../../components/section/brands/Brands';
import NearbyOffer from '../../components/section/offers/NearbyOffer';
import OtherOffers from '../../components/section/offers/other offers/OtherOffers';
import AdsSection from '../../components/UI/ads/AdsSection';
import AnimatedAds from '../../components/UI/ads/AnimatedAds';
import ModalWindow from '../../components/UI/ads/modal window/ModalWindow';

import './Main.css';

const Main = () => {

    const [isClicked, setIsClicked] = useState(false);

    const cityHandler = (val) => {
        setIsClicked(val);
    }

    return(
        <>
            <MainHeader cityButtonClick={cityHandler}/>
            <AnimatedAds />
            {/* <AdsSection>
                <img src={require('../../assests/ads1.png')} alt="ads" className='ads-img' />
            </AdsSection> */}
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
            <ModalWindow isShow={isClicked} cityButtonClick={cityHandler}/>
        </>
    )
};

export default Main;