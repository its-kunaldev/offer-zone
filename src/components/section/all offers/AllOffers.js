import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

import './AllOffers.css';

const AllOffers = () => {

    const location = useLocation();
    // console.log();

    const allOffers = useSelector(state => state.OfferSliceReducer.allOffers);
    // console.log(allOffers);

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
                        <h3>Best deals in your area</h3>
                        <div className="offers_card">
                            {allOffers.map(offer =>
                                <Link to={`${location.pathname}/${offer.category}/${offer.name}`} key={offer.name} className="card-offer">
                                    <div className="offer_img">
                                        <img src={offer.userImg ? offer.userImg : require(`../../../assests/offers/${offer.image}.png`)} alt="" />
                                    </div>
                                    <div className="offer_details">
                                        <h3>{offer.name}</h3>
                                        <p>{offer.location}</p>
                                        <h4 className='about_offer'><span>Deals</span>{offer.discription}</h4>
                                    </div>
                                    <hr />
                                    <span>{offer.offer}% off</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AllOffers;
