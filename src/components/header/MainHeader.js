import React from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.css';
import { ImLocation2 } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
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
                {/* </header> */}
                <div className='header'>
                    <img src={require('../../assests/logo3.png')} alt="logo"/>
                    <div className="search_btn">
                        <input onFocus={searchbarFocusHandler} type="text" placeholder= '🔍 Search restaurants, spa, events'/>
                        <button>Search</button>
                    </div>
                </div>
            </header>
            <hr />

            <nav className='categories section'>
                <FaArrowLeft className='arrow'/>

                <ul>
                    <div className="category">
                        {/* <a href=""> */}
                            <button>
                                <div className='inner-circle'>
                                    <img src={require('../../assests/mobile.png')} alt="" />
                                </div>
                            </button>
                            <p>Mobile</p>
                        {/* </a> */}
                    </div>
                    <div className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/fashion.png')} alt="" />
                            </div>
                        </button>
                        <p>Fashion</p>
                    </div>
                    <div className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/electronics.png')} alt="" />
                            </div>
                        </button>
                        <p>Electronics</p>
                    </div>
                    <div className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/sports.png')} alt="" />
                            </div>
                        </button>
                        <p>Sports</p>
                    </div>
                    <div className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/home.png')} alt="" />
                            </div>
                        </button>
                        <p>Home</p>
                    </div>
                    <div className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/gym.png')} alt="" />
                            </div>
                        </button>
                        <p>Gym</p>
                    </div>
                    <div className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/food.png')} alt="" />
                            </div>
                        </button>
                        <p>Food</p>
                    </div>
                    <div className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/sports.png')} alt="" />
                            </div>
                        </button>
                        <p>Mobile</p>
                    </div>
                </ul>

                <FaArrowRight className='arrow'/>
            </nav>
            <hr />
        </>
    )
};

export default MainHeader;