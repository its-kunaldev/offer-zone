import React from 'react';

import './AdsSection.css';

const AdsSection = (props) => {
    return(
        <a href='https://bhaviblogging.blogspot.com/2022/09/headphones-offer.html' className='section ads'> {props.children} </a>
    )
};

export default AdsSection;
