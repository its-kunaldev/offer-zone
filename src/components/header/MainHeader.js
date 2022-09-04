import React from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';
import { ImLocation2 } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';

const MainHeader = () => {

    const dispatch = useDispatch();
    const currentCity = useSelector(state => state.OfferSliceReducer.currentCity);

    const manageCityHandler = () => {
        dispatch(uiActions.showModal());
    }

    const searchbarFocusHandler = () => {
        dispatch(uiActions.showSearchbar());
    }

    return (
        <>
            <header className='main-header'>
                <div className="basic_links">
                    <button onClick={manageCityHandler} className='set_location'>
                        <span><ImLocation2 />Select location</span>
                        <span>
                            <p>{currentCity}</p>
                            <IoMdArrowDropdown />
                        </span>
                    </button>
                    <nav>
                        <ul>
                            <Link to=''>We are hiring!</Link>
                            <Link to={'/about-us'} >About us</Link>
                            <Link to={'/register'}>List your Busines</Link>
                            <a href="../../pages/login form/signup/login.php">Login/sign in</a>
                        </ul>
                    </nav>
                </div>
                <div className='header'>
                    <img src={require('../../assests/logo3.png')} alt="logo" />
                    <div className="search_btn">
                        <input onFocus={searchbarFocusHandler} type="text" placeholder='🔍 Search restaurants, spa, events' />
                        <button>Search</button>
                    </div>
                </div>
            </header>
            <hr />
        </>
    )
};

export default MainHeader;