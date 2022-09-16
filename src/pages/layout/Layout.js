import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Layout.css';

import Footer from '../../components/footer/Footer';
import MainHeader from '../../components/header/MainHeader';
import ModalWindow from '../../components/UI/modal window/ModalWindow';
import Searches from '../../components/UI/search section/Searches';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';

const Layout = (props) => {

    const location = useLocation();

    const isFocus = useSelector(state => state.uiSliceReducer.isFocus);
    const isLogin = useSelector(state => state.uiSliceReducer.isLogin);

    return (
        <>
            <ModalWindow />
            {isFocus && location.pathname !== '/signup' && location.pathname !== '/login' && <Searches />}
            {!isFocus && location.pathname !== '/signup' && location.pathname !== '/login' && <MainHeader />}
            <section>
                {props.children}
            </section>
            {location.pathname !== '/signup' && location.pathname !== '/login' && <div className="all_offer_btn">
                <Link to={isLogin ? '/all-offers' : '/login'}>View All Offers</Link>
                {/* {isLogin && <Link to={'/all-offers'}>View All Offersss</Link>} */}
            </div>}
            {location.pathname !== '/signup' && location.pathname !== '/login' && <Footer />}
        </>
    )
};

export default Layout;