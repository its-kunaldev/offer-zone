import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Searches.css';

import { ImLocation2 } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { uiActions } from '../../../store/uiSlice';
import { Link } from 'react-router-dom';

const Searches = () => {

    const [isChange, setIsChange] = useState('');
    const allOffers = useSelector(state => state.OfferSliceReducer.allOffers);

    const allProductsName = allOffers.map(offer => offer.name);

    const dispatch = useDispatch();

    const manageCityHandler = () => {
        dispatch(uiActions.showModal());
        dispatch(uiActions.showSearchbar());
    }

    const closeModalHandler = () => {
        dispatch(uiActions.showSearchbar());
    }

    const inputChangeHandler = (e) => {
        setIsChange(e.target.value.toLowerCase());
    }

    const isPresent = allProductsName.filter(d => {
        return d.toLocaleLowerCase().indexOf(isChange) >= 0 && isChange !== '';
    });

    const handler = () =>{
        dispatch(uiActions.showSearchbar());
    }

    return (
        <>
            <section className="search_area">
                <div className="searchbox section">
                    <button onClick={manageCityHandler} className='set_location'>
                        <span><ImLocation2 />Change location</span>
                        <span>
                            <p>new dehli</p>
                            <IoMdArrowDropdown />
                        </span>
                    </button>
                    <form className="search">
                        <input onChange={inputChangeHandler} value={isChange} type="text" placeholder='🔍 Search restaurants, spa, events' />
                        <button>Search</button>
                    </form>
                    {isPresent.length > 0 && <div className="suggestions">
                        {isPresent.map(offer => <Link onClick={handler} key={offer} to={`/offer/${offer}`}><span>{offer}</span></Link>)}

                    </div>}
                    <h2>👍 Recommended Searches</h2>
                    <div className="available_offers">
                        <span>Barbeque Nation</span>
                        <span>Pirates of Grill</span>
                        <span>KFC</span>
                        <span>Domino's pizza</span>
                        <span>Hair straightning</span>
                        <span>Hair spa</span>
                        <span>Gucci</span>
                        <span>D-mart</span>
                    </div>
                    <button onClick={closeModalHandler} className="esc_btn">
                        <IoClose className='close' />
                        <span>Esc</span>
                    </button>
                </div>
            </section>
        </>
    )
};

export default Searches;