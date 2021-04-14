import React from 'react';
import Logo from '../../img/logo-nobg2.png'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container-footer">
                <div className="footerRow">
                    <a href="/TermsAndCondition">Term And Condition</a>
                    <a href="/About">About</a>
                    <img src={Logo} alt="logo maison records"/>
                    <a href="/contact">Contact</a>
                    <a href="/ShippingInfos">Shipping Infos</a>
                    </div>
                    <div className="extraInfos">
                        <div className="adress">
                                <p>Maison Records is located at Supermarket,</p>
                                <p>156A rue Franz Merjay 1050, Ixelles Belgique</p>
                            </div>
                        <div className="copyright">
                            <p>Maison Records 2021 &copy;</p>
                        </div> 
                    </div> 
                 
            </div> 
        </div> 
    </>
        
    );
}

export default Footer;
