import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom';

import './OfferDetails.css';

import { MdLocationOn } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { BsFillTelephoneXFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';


const OfferDetails = () => {

    const params = useParams();
    const allOffers = useSelector(state => state.OfferSliceReducer.allOffers);

    const clickedOfffer = allOffers.find(offer => offer.name === params.offerId);

    return (
        <section className='single_offer_detail section'>
            <div className="offerBy_company_logo">
                <img src={require('../../../assests/kfc items/item1.png')} alt="items" />
            </div>
            <div className="all_the_details">
                <div className="offers_items">
                    <span className='single_item'>
                        <img src={require('../../../assests/kfc items/item1.png')} alt="items" />
                    </span>
                    <span className='single_item'>
                        <img src={require('../../../assests/kfc items/item2.png')} alt="items" />
                    </span>
                    <span className='single_item'>
                        <img src={require('../../../assests/kfc items/item3.png')} alt="items" />
                    </span>
                    <span className='single_item'>
                        <img src={require('../../../assests/kfc items/item4.png')} alt="items" />
                    </span>
                    <span className='single_item'>
                        <img src={require('../../../assests/kfc items/item5.png')} alt="items" />
                    </span>
                </div>
                <div className="detailling">
                    <h2>Peri Peri 10 Strips with Dynamite</h2>
                    <div className="pricing">
                        <p>Item price - <del>₹799</del></p>
                        <p>With deal - <span>₹499</span></p>
                        <p>You save - ₹300</p>
                    </div>
                </div>
            </div>
            <div className="contact_details_shop">
                <div className="shop_name">
                    <p>KFC</p>
                </div>
                <hr />
                <div className="shop_location">
                    <div className="shop_area">
                        <h3><span><MdLocationOn /></span> Model Town</h3>
                    </div>
                    <div className="locatedAt">
                        <h3><span><HiHome /></span> Address</h3>
                        <p>
                            Rampa Centre Point, Main Market<br/>
                            Model Town<br/>
                            Jalandhar - 144003
                        </p>
                    </div>
                    <div className="contact_to_shopkeeper">
                        <h3><span><BsFillTelephoneXFill /></span> Contact</h3>
                        <p>+91 8042754444</p>
                    </div>
                    <div className="opening_closing_timming">
                        <h3><span><BiTimeFive /></span> Store Timming</h3>
                        <p>10:00AM to 8:00PM</p>
                    </div>
                </div>
            </div>




            {/* <h2>{clickedOfffer.name}</h2>
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
            </div> */}
        </section>
    )
};

export default OfferDetails;
