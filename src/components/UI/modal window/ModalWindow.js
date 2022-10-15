// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './ModalWindow.css';

import { IoClose } from 'react-icons/io5';
import { uiActions } from '../../../store/uiSlice';
import { useState } from 'react';
import { OfferSliceActions } from '../../../store/OfferSlice';


const ModalWindow = () => {

    const [isChange, setIsChange] = useState('');

    // const dummy_cities = ['jalandhar', 'amritsar', 'ludhiana', 'phagwara', 'batala', 'kapurthala', 'firojpur', 'chandigarh', 'patiala', 'nabha'];

    const isShow = useSelector(state => state.uiSliceReducer.showCitiesmodal);
    const allCities = useSelector(state => state.OfferSliceReducer.allCities);
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(uiActions.showModal());
    }

    const inputChangeHandler = (e) => {
        setIsChange(e.target.value.toLowerCase());
    }

    const isPresent = allCities.filter(d => {
        return d.toLocaleLowerCase().indexOf(isChange) >= 0 && isChange !== '';
    });

    const citySubmitHandler = (e) => {
        e.preventDefault();
        dispatch(uiActions.showModal());
        dispatch(OfferSliceActions.currentLocation(isChange));
        setIsChange('');
    }
    
    // let value;
    const linkHandler = (e) => {
        // value = e.target.innerText;
        dispatch(uiActions.showModal());
        dispatch(OfferSliceActions.currentLocation(e.target.innerText));
        setIsChange('');
    }

    return (
        <>
            <div className={`modal ${!isShow && 'hidden'}`}>
                <div className="box">
                    <h1>Tell Us Your <span>HomeTown</span></h1>
                    <p>Explore the offers nearby you</p>
                    <form action='/jalandhar' onSubmit={citySubmitHandler} className="city_input">
                        <img src={require('../../../assests/location.png')} alt="city" />
                        <input type="text" value={isChange} onChange={inputChangeHandler} placeholder='Enter your city' />
                        <button type='button'>Use my location</button>
                        {isPresent.length > 0 && <div className="city_suggestions">
                            {isPresent.map(offer => <Link to={`/${offer}`} key={offer} onClick={linkHandler}><span key={offer}>{offer}</span></Link>)}
                        </div>}
                    </form>
                    <h2>Top Cities</h2>
                    
                    <div className="top_cities">
                        <Link to='/jalandhar'>Jalandhar</Link>
                        <Link to='/Hyderabad'>Hyderabad</Link>
                        <Link to='/New Dehli'>New Dehli</Link>
                        <Link to='/Mumbai'>Mumbai</Link>
                        <Link to='/Chandigarh'>Chandigarh</Link>
                        <Link to='/Chennai'>Chennai</Link>
                        <Link to='/Pune'>Pune</Link>
                        <Link to='/Maharashtra'>Maharashtra</Link>
                        <Link to='/Gujrat'>Gujrat</Link>
                        <Link to='/Ahmedabad'>Ahmedabad</Link>
                        <Link to='/Goa'>Goa</Link>
                    </div>
                    <div className="app_logo">
                        <img src={require('../../../assests/logo3.png')} alt="" />
                    </div>
                </div>
                <button onClick={closeModalHandler} className="esc_btn">
                    <IoClose className='close' />
                    <span>Esc</span>
                </button>
            </div>
        </>
    )
};

export default ModalWindow;