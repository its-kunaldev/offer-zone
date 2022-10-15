import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

import './AllOffers.css';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';


const AllOffers = () => {

    // const container = document.querySelector('body');
    // const currentWidth = Number.parseFloat(window.getComputedStyle(container).width);
    // console.log(currentWidth)

    const [isClicked, setIsClicked] = useState(false);

    const location = useLocation();

    const allOffers = useSelector(state => state.OfferSliceReducer.allOffers);

    const filtersClickHandler = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <section className='all_offers_section'>
                <div className="all_offers section">
                    <p>OfferZone → offers nears you</p>
                    <hr className='hr2' />
                    <div className="container">
                        <div className="filter_offers">
                            <h3 onClick={filtersClickHandler}>Filters &nbsp; {isClicked ? <IoIosArrowDown/> : <IoIosArrowUp />}</h3>
                            {!isClicked && <div className="filter_card">
                                <div className="filterBy">
                                    <div className="title">
                                        <p>Discount(off)</p>
                                        <span></span>
                                    </div>
                                    <div className="available_discounts">
                                        <button>0-30%</button>
                                        <button>30% - 60%</button>
                                        <button>60% - 100%</button>
                                    </div>
                                </div>
                                <div className="filterBy">
                                    <div className="title">
                                        <p>Categories</p>
                                        <span></span>
                                    </div>
                                    <div className="available_categories">
                                        <button>Fashion</button>
                                        <button>Food</button>
                                        <button>Sports</button>
                                        <button>Mobile</button>
                                        <button>Electronics</button>
                                        <button>Salon</button>
                                        <button>Buffet</button>
                                    </div>
                                </div>
                                <div className="filterBy">
                                    <div className="title">
                                        <p>Area</p>
                                        <span></span>
                                    </div>
                                    <div className="areas">
                                        <button>Jalandhar</button>
                                        <button>Chandigarh</button>
                                        <button>Dehli</button>
                                        <button>Phagwara</button>
                                        <button>Ludhiana</button>
                                        <button>Mumbai</button>
                                        <button>Bangalore</button>
                                    </div>
                                </div>
                            </div>}

                        </div>
                        <div className="offers_container">
                            <h3 className='container_title'>Best deals in your area</h3>
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
        </>
    )
};

export default AllOffers;
