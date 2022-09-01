import React from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';
import { ImLocation2 } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/uiSlice';

const MainHeader = () => {

    const dispatch = useDispatch();

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
                            <p>new dehli</p>
                            <IoMdArrowDropdown />
                        </span>
                    </button>
                    <nav>
                        <ul>
                            <button><Link to=''>We are hiring!</Link></button>
                            <button>How it works</button>
                            <button><Link to='/register'>List your Busines</Link></button>
                            <button>Login/Sign in</button>
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