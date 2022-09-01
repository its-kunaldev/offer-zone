import React from 'react'
import { Link } from 'react-router-dom';


import './NearbyOffer.css';

const NearbyOffer = () => {
    return(
        <>
            <div className="nearbuy_offers section">
                <h2 className='title'>Your Near Zone Offer 🎉  <Link to='/all-offer'>view more</Link></h2>
                <div className="offers">
                    <div className="offer_card">
                        <div className="img_section">
                            <img src={require('../../../assests/offers/offer1.png')} alt="offers" />
                        </div>
                        <div className="offer_details">
                            <h2>Hotel aloft</h2>
                            <p className='categories'>AC Rooms</p>
                            <br />
                            <p className='categories'>Buffet available</p>
                            <hr className='line'/>
                            <div className="offer_amount">
                                <div className="price">
                                    <del>&#8377;4700</del>
                                    <p>&#8377;2360</p>
                                </div>
                                <div className="how_much_off">
                                    <p>51% Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer_card">
                        <div className="img_section">
                            <img src={require('../../../assests/offers/offer2.png')} alt="offers" />
                        </div>
                        <div className="offer_details">
                            <h2>Subway</h2>
                            <p className='categories'>Drinks and starters</p>
                            <br />
                            <p className='categories'>Combo Packs</p>
                            <hr className='line'/>
                            <div className="offer_amount">
                                <div className="price">
                                    <del>&#8377;80</del>
                                    <p>&#8377;60</p>
                                </div>
                                <div className="how_much_off">
                                    <p>25% Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer_card">
                        <div className="img_section">
                            <img src={require('../../../assests/offers/offer3.png')} alt="offers" />
                        </div>
                        <div className="offer_details">
                            <h2>The Burger King</h2>
                            <p className='categories'>Party Combo's</p>
                            <br />
                            <p className='categories'>Veg and Non-veg</p>
                            <hr className='line'/>
                            <div className="offer_amount">
                                <div className="price">
                                    <del>&#8377;150</del>
                                    <p>&#8377;99</p>
                                </div>
                                <div className="how_much_off">
                                    <p>34% Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer_card">
                        <div className="img_section">
                            <img src={require('../../../assests/offers/offer4.png')} alt="offers" />
                        </div>
                        <div className="offer_details">
                            <h2>Kalyan- Jewellery</h2>
                            <p className='categories'>Shopping Gifts</p>
                            <br />
                            <p className='categories'>Drinks and starters</p>
                            <hr className='line'/>
                            <div className="offer_amount">
                                <div className="price">
                                    <del>&#8377;4700</del>
                                    <p>&#8377;3500</p>
                                </div>
                                <div className="how_much_off">
                                    <p>51% Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer_card">
                        <div className="img_section">
                            <img src={require('../../../assests/offers/offer5.png')} alt="offers" />
                        </div>
                        <div className="offer_details">
                            <h2>Kill the bill</h2>
                            <p className='categories'>Drinks and starters</p>
                            <br />
                            <p className='categories'>Drinks and starters</p>
                            <hr className='line'/>
                            <div className="offer_amount">
                                <div className="price">
                                    <del>&#8377;4700</del>
                                    <p>&#8377;3500</p>
                                </div>
                                <div className="how_much_off">
                                    <p>51% Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="offer_card">
                        <div className="img_section">
                            <img src={require('../../../assests/offers/offer6.png')} alt="offers" />
                        </div>
                        <div className="offer_details">
                            <h2>Kill the bill</h2>
                            <p className='categories'>Drinks and starters</p>
                            <br />
                            <p className='categories'>Drinks and starters</p>
                            <hr className='line'/>
                            <div className="offer_amount">
                                <div className="price">
                                    <del>&#8377;4700</del>
                                    <p>&#8377;3500</p>
                                </div>
                                <div className="how_much_off">
                                    <p>51% Off</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NearbyOffer;