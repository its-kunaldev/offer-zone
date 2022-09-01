import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './Searches.css';

import { ImLocation2 } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { uiActions } from '../../../store/uiSlice';

const Searches = () => {

    const [isChange, setIsChange] = useState('');
    // const [filterOffers, setFilteredOffer] = useState([]);

    const dummy = ['Barbeque', 'gucci', 'kfc','armani', 'raymonds', 'burger king', 'dominos','subway', 'kalyan', 'shoes'];

    // const isPresent = [];

    const dispatch = useDispatch();

    const manageCityHandler = () => {
        dispatch(uiActions.showModal());
        dispatch(uiActions.showSearchbar());
    }

    const closeModalHandler = () => {
        dispatch(uiActions.showSearchbar());
    }

    const inputChangeHandler = (e) => {
        // console.log(e.target.value);
        setIsChange(e.target.value);

        // setFilteredOffer(dummy.filter(d => {
        //     return d.indexOf(isChange) >= 0 && isChange != '';
        // }));
    }
    
    const isPresent = dummy.filter(d => {
        return d.toLocaleLowerCase().indexOf(isChange) >= 0 && isChange != '';
    });

    // console.log(isPresent);

    return (
        <>
            <section className="search_area">
                <div className="searchbox">
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
                        {isPresent.map(offer => <a href=""><span key={offer}>{offer}</span></a>)}
                        
                    </div>}
                    <h2>👍 Recommended Searches</h2>
                    <div className="available_offers">
                        <span>Barbeque Nation</span>
                        <span>Pirates of Grill, Jalandhar</span>
                        <span>KFC</span>
                        <span>Domino's pizza</span>
                        <span>Hair straightning</span>
                        <span>Hair spa</span>                        
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