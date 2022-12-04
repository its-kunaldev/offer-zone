import React from 'react';

import './Navbar.css';

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // const { fetchFirebaseStorage: fetchData, data, error } = useGetStorage();
    // console.log(data);

    // useEffect(() => {
    //     fetchData('allCategories');
    // }, [fetchData]);

    // if (error) {
    //     return (
    //         <h1>Failed!</h1>
    //     )
    // }

    const allCategories = [
        {
            categoryName: 'Mobile',
            imgUrl: 'mobile.png'
        },
        {
            categoryName: 'Fashion',
            imgUrl: 'fashion.png'
        },
        {
            categoryName: 'Food',
            imgUrl: 'food.png'
        },
        {
            categoryName: 'Electronics',
            imgUrl: 'electronics.png'
        },
        {
            categoryName: 'Home',
            imgUrl: 'home.png'
        },
        {
            categoryName: 'Sports',
            imgUrl: 'sports.png'
        },
        {
            categoryName: 'Gym',
            imgUrl: 'gym.png'
        },
        {
            categoryName: 'Salon Deals',
            imgUrl: 'sports.png'
        }
    ];

    return (
        <>
            <nav className='categories section'>
                <FaArrowLeft className='arrow' />

                <ul>
                    {allCategories.map(data =>
                        <Link key={data.categoryName} to={`all-offers/${data.categoryName.toLowerCase()}`} className="category">
                            <button>
                                <div className='inner-circle'>
                                    <img src={require(`../../assests/allCategories/${data.imgUrl}`)} alt="" />
                                </div>
                            </button>
                            <p>{data.categoryName}</p>
                        </Link>
                    )}
                    {/* <Link to='all-offers/fashion' className="category">
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
                    </Link> */}
                </ul>

                <FaArrowRight className='arrow' />
            </nav>
            <hr />
        </>
    )
};

export default Navbar;