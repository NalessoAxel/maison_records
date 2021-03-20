import React from 'react';
import Logo from '../../img/logo-nobg2.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="footerRow first">
                    <a href="/TermsAndCondition">Term And Condition</a>
                    <a href="/About">About</a>
                    
                </div>
                <div className="footerRow second">
                    <img src={Logo} alt="logo maison records"/>
                </div>
                <div className="footerRow third">
                    <a href="/contact">Contact</a>
                    <a href="/ShippingInfos">Shipping Infos</a>
                    
                </div>    
            </div>
            
            
        </div>
    );
}

export default Footer;
