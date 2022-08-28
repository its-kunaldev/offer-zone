import React from 'react';

import './AdsSection.css';

const AdsSection = (props) => {
    return(
        <div className='section ads'> {props.children} </div>
    )
};

export default AdsSection;
