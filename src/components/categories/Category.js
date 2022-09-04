import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import './Category.css';


const Category = () => {

    const params = useParams();

    const allOffers = useSelector(state => state.OfferSliceReducer.allOffers);
    const categoryWiseOffer = allOffers.filter(offer => params.category === offer.category);

    if(categoryWiseOffer.length === 0){
        return (
            <div className="no-found section">
                <p>No Offer Found!!</p>
            </div>
        )
    }

    return (
        <section className='Categories_section'>
            <div className="section">
                <h2>category :- {params.category}</h2>
                <div className="categorywise_offer section">
                    {categoryWiseOffer.map(offer =>
                        <Link to={`/offer/${offer.name}`} key={offer.name} className="card-offer">
                            <div className="offer_img">
                                <img src={require(`../../assests/offers/${offer.image}.png`)} alt="" />
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
        </section>
    )
};

export default Category;
