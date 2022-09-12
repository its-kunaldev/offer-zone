import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './Layout.css';

import Footer from '../../components/footer/Footer';
import MainHeader from '../../components/header/MainHeader';
import ModalWindow from '../../components/UI/modal window/ModalWindow';
import Searches from '../../components/UI/search section/Searches';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const Layout = (props) => {

    const history = useHistory();
    console.log(history.location.pathname);


    const isFocus = useSelector(state => state.uiSliceReducer.isFocus);

    return (
        <>
            <ModalWindow />
            {isFocus && history.location.pathname !== '/signup' && history.location.pathname !== '/login' && <Searches />}
            {!isFocus && history.location.pathname !== '/signup' && history.location.pathname !== '/login' && <MainHeader />}
            <section>
                {props.children}
            </section>
            {history.location.pathname !== '/signup' && history.location.pathname !== '/login' && <div className="all_offer_btn">
                <Link to={'/all-offers'}>View All Offers</Link>
            </div>}
            {history.location.pathname !== '/signup' && history.location.pathname !== '/login' && <Footer />}
        </>
    )
};

export default Layout;