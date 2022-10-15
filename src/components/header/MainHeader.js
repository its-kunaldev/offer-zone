import React from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';
// import { ImLocation2 } from 'react-icons/im';
import { MdLocationOn } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
// import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/uiSlice';
import { useState } from 'react';

const MainHeader = () => {

    const [isToggle, setIsToggle] = useState(false);

    const dispatch = useDispatch();
    const currentCity = useSelector(state => state.OfferSliceReducer.currentCity);
    const isLogin = useSelector(state => state.uiSliceReducer.isLogin);

    const manageCityHandler = () => {
        dispatch(uiActions.showModal());
    }

    const searchbarFocusHandler = () => {
        dispatch(uiActions.showSearchbar());
    }

    const searchButtonHandler = () => {
        const container = document.querySelector('body');
        const currentWidth = Number.parseFloat(window.getComputedStyle(container).width);
        if(currentWidth < 500){
            dispatch(uiActions.showSearchbar());
        }
    }

    const userAccountHandler = () => {
        setIsToggle(!isToggle);
    }

    return (
        <>
            <header className='main-header'>
                <div className="basic_links">
                    {/* <button onClick={manageCityHandler} className='set_location'>
                        <span><ImLocation2 />Select location</span>
                        <span>
                            <p>{currentCity}</p>
                            <IoMdArrowDropdown />
                        </span>
                    </button> */}

                    <button onClick={manageCityHandler} className="locationCity">
                        {!currentCity && <span>Select <MdLocationOn className='location-icon' /></span>}
                        {currentCity && <span>{currentCity} <MdLocationOn className='location-icon' /></span>}
                    </button>

                    <nav>
                        <ul>
                            <Link to='/policy'>Terms &amp; Condition</Link>
                            <Link to={'/about-us'} >About us</Link>
                            {/* <Link to={isLogin ? '/register' : '/login'}>List your Busines</Link> */}
                            {!isLogin && <Link to={'/login'}>Login/sign in</Link>}
                            {isLogin && <button onClick={userAccountHandler} className='userAccountBtn'><FaUserAlt /></button>}
                        </ul>
                    </nav>

                    <div className="authentications">
                        {!isLogin && <button className='signup'>
                            <Link to={'/signup'}>Sign In</Link>
                        </button>}
                        {!isLogin && <button className='login'>
                            <Link to={'/login'}>Login</Link>
                        </button>}

                        {isLogin && <button onClick={userAccountHandler} className='userAccountBtn'><FaUserAlt /></button>}
                    </div>

                    <div className={`${isToggle ? 'active' : ''} userAccountMenu`}>
                        <div className="userDetail">
                            <span><FaUserAlt /></span>
                            <h4>Signed in as <br /> <p>Kunal Thakur</p></h4>
                        </div>
                        <hr />
                        <ul className='userOptions'>
                            <li><Link to={'/'}>Your Profile</Link></li>
                            <li><Link to={'/'}>Your Orders</Link></li>
                            <li><Link to={'/'}>All Offers</Link></li>
                            <li><Link to={'/'}>Your Wishlist</Link></li>
                            <li><Link to={'/register'}>List Your Business</Link></li>
                            <li><Link to={'/'}>Settings</Link></li>
                        </ul>
                        <hr />
                        <button className='signout'>Sign out</button>
                    </div>

                </div>

                <div className='titleAndSearchbar'>
                    {/* <img src={require('../../assests/logo3.png')} alt="logo" /> */}
                    <p>OfferZone</p>
                    <div className="search_btn">
                        <input onFocus={searchbarFocusHandler} type="text" placeholder='🔍 Search restaurants, spa, events' />
                        <button onClick={searchButtonHandler}>Search</button>
                    </div>
                </div>
            </header>
        </>
    )
};

export default MainHeader;