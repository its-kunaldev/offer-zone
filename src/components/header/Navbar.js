import React from 'react';

import './Navbar.css';

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';


const Navbar = () => {
    return (
        <>
            <nav className='categories section'>
                <FaArrowLeft className='arrow' />

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

                <FaArrowRight className='arrow' />
            </nav>
            <hr />
        </>
    )
};

export default Navbar;