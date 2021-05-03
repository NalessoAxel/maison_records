import React from 'react';
import Logo from '../../img/logo-nobg2.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-footer">
                    <a href="/TermsAndCondition">Term And Condition</a>
                    <a href="/About">About</a>
                    <img src={Logo} alt="logo maison records" className="logoFooter" />
                    <a href="/contact">Contact</a>
                    <a href="/ShippingInfos">Shipping Infos</a>
                </div>  
                <div className="extraInfos">
                <div className="adressFooter">
                        <p>Maison Records is located at Supermarket 156A rue Franz Merjay 1050, Ixelles Belgique</p>
                    </div>
                    <div className="copyright">
                        <p>Maison Records 2021 &copy;</p>
                    </div> 
                    </div>  
        </div>
    );
}

export default Footer;
