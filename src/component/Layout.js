import React from 'react'

import HeaderTop from './Header/HeaderTop';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Animations from './Header/Animations'
import FooterBottom from './Footer/FooterBottom';

function Layout(props) {

    return (
        <>
            <Animations />
            <HeaderTop />
            <Navbar />
            {props.children}
            <Footer />
            <FooterBottom />
        </>
    )
}

export default Layout


