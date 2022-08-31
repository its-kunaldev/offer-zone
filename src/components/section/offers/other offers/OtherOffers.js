import React from 'react';


import './OtherOffers.css';

const OtherOffers = () => {
    return(
        <>
            <div className="salon_offers section">
                <h2 className='title'>Super Salon days - upto 50% off!! Hurry up!🎉</h2>
                <div className="other_offers">
                    <div className="salon_card">
                        <img src={require('../../../../assests/salon offers/salon1.png')} alt="offer" />
                    </div>
                    <div className="salon_card">
                        <img src={require('../../../../assests/salon offers/salon2.png')} alt="offer" />
                    </div>
                    <div className="salon_card">
                        <img src={require('../../../../assests/salon offers/salon3.png')} alt="offer" />
                    </div>
                    <div className="salon_card">
                        <img src={require('../../../../assests/salon offers/salon4.png')} alt="offer" />
                    </div>
                    <div className="salon_card">
                        <img src={require('../../../../assests/salon offers/salon4.png')} alt="offer" />
                    </div>
                </div>
            </div>

            <div className="dinning_offers section">
                <h2 className='title'>Dining Out - Popular Collections</h2>
                <div className="other_offers">
                    <div className="salon_card">
                        <img src={require('../../../../assests/dinning offers/dinning1.png')} alt="offer" />
                    </div>
                    <div className="salon_card">
                        <img src={require('../../../../assests/dinning offers/dinning2.png')} alt="offer" />
                    </div>
                    <div className="salon_card">
                        <img src={require('../../../../assests/dinning offers/dinning3.png')} alt="offer" />
                    </div>
                    <div className="salon_card">
                        <img src={require('../../../../assests/dinning offers/dinning4.png')} alt="offer" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default OtherOffers;