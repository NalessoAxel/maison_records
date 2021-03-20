import React from 'react'
import Logo from '../../img/logo-nobg2.png'
import {Link} from 'react-router-dom'


const Navbar =  () => {
    const links = [
    
        'New',
        'Second Hand',
        'Sell Collection',
        'Merch',
        'Accessories',
        'Live',
        'Sign Up',
        'Sign In'
    
    ]
    const strToUrl = (str) => '/' + str.replace(' ', '')

    return (
            <nav id="nav">
                <div className="logo">
                <Link to="/New">
                <img src={Logo} alt="logo maison records"></img>
                </Link>
                </div>
                <div className="link">
                    <ul>
                        {links.map((link) => (
                            <li><Link to={strToUrl(link)}>{link}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="cart">
                <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                <span id="cart">0</span>
                </div>
                
            </nav>
            
        )
    }


export default Navbar
