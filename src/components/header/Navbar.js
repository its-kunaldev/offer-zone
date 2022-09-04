import React from 'react';

import './Navbar.css';

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {

    return (
        <>
            <nav className='categories section'>
                <FaArrowLeft className='arrow' />

                <ul>
                    <Link to={`all-offers/mobile`} className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/mobile.png')} alt="" />
                            </div>
                        </button>
                        <p>Mobile</p>
                    </Link>
                    <Link to='all-offers/fashion' className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/fashion.png')} alt="" />
                            </div>
                        </button>
                        <p>Fashion</p>
                    </Link>
                    <Link to='all-offers/electronics' className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/electronics.png')} alt="" />
                            </div>
                        </button>
                        <p>Electronics</p>
                    </Link>
                    <Link to='all-offers/sports' className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/sports.png')} alt="" />
                            </div>
                        </button>
                        <p>Sports</p>
                    </Link>
                    <Link to='all-offers/home' className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/home.png')} alt="" />
                            </div>
                        </button>
                        <p>Home</p>
                    </Link>
                    <Link to='all-offers/gym' className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/gym.png')} alt="" />
                            </div>
                        </button>
                        <p>Gym</p>
                    </Link>
                    <Link to='all-offers/food' className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/food.png')} alt="" />
                            </div>
                        </button>
                        <p>Food</p>
                    </Link>
                    <Link to='all-offers/salon' className="category">
                        <button>
                            <div className='inner-circle'>
                                <img src={require('../../assests/sports.png')} alt="" />
                            </div>
                        </button>
                        <p>Salon Deals</p>
                    </Link>
                </ul>

                <FaArrowRight className='arrow' />
            </nav>
            <hr />
        </>
    )
};

export default Navbar;