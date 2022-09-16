import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

import './Category.css';


const Category = () => {

    const location = useLocation();

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
                        <Link to={`${location.pathname}/${offer.name}`} key={offer.name} className="category_card-offer">
                            <div className="category_offer_img">
                                <img src={require(`../../assests/offers/${offer.image}.png`)} alt="" />
                            </div>
                            <div className="category_offer_details">
                                <h3>{offer.name}</h3>
                                <p>{offer.location}</p>
                                <h4 className='category_about_offer'><span>Deals</span>{offer.discription}</h4>
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
