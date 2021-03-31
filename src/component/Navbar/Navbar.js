import React from 'react'
import Logo from '../../img/logo-nobg2.png'
import { Link } from 'react-router-dom'


const Navbar =  () => {

    const links = [
        'New',
        'Second Hand',
        'Sell Collection',
        'Merch',
        'Accessories',
        'Live',    
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
                    <div className="log">
                        <Link to="/UserRegisterPage">
                            <span>Log in</span>
                        </Link>
                        <Link to="/AdminDashboard">
                            <span>Admin</span>
                        </Link>
                    </div>
                    <Link to="/Cart">
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true" ></i>
                    </Link>
                </div>
                
            </nav>
            
        )
    }


export default Navbar
