import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


import './NearbyOffer.css';


const NearbyOffer = () => {
    
    const data = useSelector(state => state.OfferSliceReducer.allOffers);
    const currentCity = useSelector(state => state.OfferSliceReducer.currentCity);
    
    
    const filteredCity = data.filter((d, i) => {
        return d.city === currentCity && i < 7;
    });
    
    let isOfferHad = true;
    
    if(filteredCity.length === 0){
        isOfferHad = false;
    }

    return (
        <>
            <div className="nearbuy_offers section">
                <h2 className='title'>Your Near Zone Offer 🎉 {isOfferHad && <Link to='/all-offers'>view more</Link>}</h2>
                {isOfferHad && <div className="offers">
                    {filteredCity.map(offer =>
                        <Link to={`/offer/${offer.name}`} key={offer.name} className="offer_card">
                            <div className="img_section">
                                <img src={require(`../../../assests/offers/${offer.image}.png`)} alt="offers" />
                            </div>
                            <div className="offer_details">
                                <h2>{offer.name}</h2>
                                <p className='categories'>AC Rooms</p>
                                <br />
                                <p className='categories'>Buffet available</p>
                                <hr className='line' />
                                <div className="offer_amount">
                                    <div className="price">
                                        <del>&#8377;4700</del>
                                        <p>&#8377;2360</p>
                                    </div>
                                    <div className="how_much_off">
                                        <p>{offer.offer}%</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>}
                {!isOfferHad && <h3 className='no_found'>Offers not currently available</h3>}
            </div>
        </>
    )
};

export default NearbyOffer;