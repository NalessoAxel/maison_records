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
            <div className="extraInfos">
                <div className="adress">
                        <p>Maison Records is located at Supermarket.</p>
                        <p>156A rue Franz Merjay 1050, Ixelles Belgique</p>
                    </div>
                    <div className="copyright">
                        <p>Maison Records 2021 &copy;</p>
                    </div>
                </div>
            
        </div>
    );
}

export default Footer;
