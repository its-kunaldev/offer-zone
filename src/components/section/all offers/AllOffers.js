import React from 'react';
import { useSelector } from 'react-redux';

import './AllOffers.css';

const AllOffers = () => {

    const allOffers = useSelector(state => state.OfferSliceReducer.allOffers);

    return (
        <section className='all_offers_section'>
            <div className="all_offers section">
                <p>offerZone  &#62; offers nears you</p>
                <hr className='hr2' />
                <div className="container">
                    <div className="discription">
                        <h3>Promos &amp; filters</h3>
                    </div>
                    <div className="offers_container">
                        <h3>Best deals in Jalandhar</h3>
                        <div className="offers_card">

                            {allOffers.map(offer =>
                                <div key={offer.name} className="card-offer">
                                    <div className="offer_img">
                                        <img src={require(`../../../assests/offers/${offer.image}.png`)} alt="" />
                                    </div>
                                    <div className="offer_details">
                                        <h3>{offer.name}</h3>
                                        <p>{offer.location}</p>
                                        <h4 className='about_offer'><span>Deals</span>{offer.discription} &#8377;{offer.price}</h4>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AllOffers;
