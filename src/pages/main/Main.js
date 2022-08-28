import React, { Fragment } from 'react'
import MainHeader from '../../components/header/MainHeader';
import AdsSection from '../../components/UI/ads/AdsSection';

import './Main.css';

const Main = () => {
    return(
        <>
            <MainHeader />
            <AdsSection>
                <img src={require('../../assests/ads1.png')} alt="ads" className='ads-img' />
            </AdsSection>
            <AdsSection>
                <img src={require('../../assests/ads2.png')} alt="ads" className='ads-img' />
            </AdsSection>
        </>
    )
};

export default Main;