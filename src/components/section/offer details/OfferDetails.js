import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

import './OfferDetails.css';

const OfferDetails = () => {

    const params = useParams();
    const allOffers = useSelector(state => state.OfferSliceReducer.allOffers);

    const clickedOfffer = allOffers.find( offer => offer.name === params.offerId);

    return (
        <section className='single_offer_detail section'> 
            <h2>{clickedOfffer.name}</h2>
            <div className="detail_container">
                <div className="single_offer_img">
                    <img src={clickedOfffer.userImg ? clickedOfffer.userImg : require(`../../../assests/offers/${clickedOfffer.image}.png`)} alt="about" />
                </div>
                <div className="more_details">
                    <h1>About</h1>
                    <div className="what_user_add">
                        <div className="row1">
                            <p>Owner:- &nbsp;&nbsp;&nbsp; <span>{clickedOfffer.owner}</span></p>
                        </div>
                        <div className="row1">
                            <p>Name of product:- &nbsp;&nbsp;&nbsp; <span>{clickedOfffer.name}</span></p>
                        </div>
                        <div className="row1">
                            <p>Category:- &nbsp;&nbsp;&nbsp; <span>{clickedOfffer.category}</span></p>
                        </div>
                        <div className="row1">
                            <p>Discount:- &nbsp;&nbsp;&nbsp; <span>{clickedOfffer.offer}%</span></p>
                        </div>
                        <div className="row1">
                            <p>state:- &nbsp;&nbsp;&nbsp; <span>{clickedOfffer.state}</span></p>
                        </div>
                        <div className="row1">
                            <p>city:- &nbsp;&nbsp;&nbsp; <span>{clickedOfffer.city}</span></p>
                        </div>
                        <div className="row1">
                            <p>Discription:- &nbsp;&nbsp;&nbsp; <span>{clickedOfffer.discription}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OfferDetails;
