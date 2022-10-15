import React from 'react';

import './AdsSection.css';

const AdsSection = (props) => {
    return(
        <div className='ads'> {props.children} </div>
    )
};

export default AdsSection;
