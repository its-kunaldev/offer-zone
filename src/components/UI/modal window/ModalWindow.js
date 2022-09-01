// import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './ModalWindow.css';

import { IoClose } from 'react-icons/io5';
import { uiActions } from '../../../store/uiSlice';



const ModalWindow = () => {

    const isShow = useSelector(state => state.uiSliceReducer.showCitiesmodal);
    const dispatch = useDispatch();

    const closeModalHandler = () => {
        dispatch(uiActions.showModal());
    }

    return (
        <>
            <div className={`modal ${ !isShow && 'hidden' }`}>
                <div className="box">
                    <h1>Tell Us Your <span>HomeTown</span></h1>
                    <p>Explore the offers nearby you</p>
                    <form className="city_input">
                        <img src={require('../../../assests/location.png')} alt="city" />
                        <input type="text" placeholder='Enter your city'/>
                        <button>Use My Current Location</button>
                    </form>
                    <h2>Top Cities</h2>
                    <div className="top_cities">
                        <span>Jalandhar</span>
                        <span>Hyderabad</span>
                        <span>New Dehli</span>
                        <span>Mumbai</span>
                        <span>Chandigarh</span>
                        <span>Chennai</span>
                        <span>Pune</span>
                        <span>Maharashtra</span>
                        <span>Gujrat</span>
                        <span>Ahmedabad</span>
                        <span>Goa</span>
                    </div>
                    <div className="app_logo">
                        <img src={require('../../../assests/logo3.png')} alt="" />
                    </div>
                </div>
                <button onClick={closeModalHandler} className="esc_btn">
                    <IoClose className='close'/>
                    <span>Esc</span>
                </button>
            </div>
        </>
    )
};

export default ModalWindow;