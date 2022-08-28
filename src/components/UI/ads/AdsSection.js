import React from 'react';

import './AdsSection.css';

const AdsSection = (props) => {
    return(
        <div className='adSection section'> {props.children} </div>
    )
};

export default AdsSection;
