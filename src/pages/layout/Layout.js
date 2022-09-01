import React from 'react';
import { useSelector } from 'react-redux';

import Footer from '../../components/footer/Footer';
import MainHeader from '../../components/header/MainHeader';
import ModalWindow from '../../components/UI/modal window/ModalWindow';
import Searches from '../../components/UI/search section/Searches';

const Layout = (props) => {

    const isFocus = useSelector(state => state.uiSliceReducer.isFocus);

    return (
        <>
            <ModalWindow />
            {isFocus && <Searches />}
            <MainHeader />
            <section>
                {props.children}
            </section>
            <Footer />
        </>
    )
};

export default Layout;