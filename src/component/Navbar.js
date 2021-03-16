import React from 'react'
import Logo from '../img/logo-nobg2.png'
import {Link} from 'react-router-dom'


const Navbar =  () => {
    return (
            <nav>
                <div className="logo">
                <Link to="/New">
                <img src={Logo}></img>
                </Link>
                </div>
                <div className="link">
                    <ul>
                        <Link to="/New">
                        <li>New</li>
                        </Link>
                        <Link to="/SecondHand">
                        <li>Second Hand</li>
                        </Link>
                        <Link to="/Merch">
                        <li>Merch</li>
                        </Link>
                        <Link to="/Accessories">
                        <li>Accessories</li>
                        </Link>
                        <Link to="/Live">
                        <li>Live</li>
                        </Link>
                        <Link to="/SignUp"> 
                        <li>Sign-up</li>
                        </Link>
                        <Link to="/SignIn"> 
                        <li>Sign-in</li>
                        </Link>
                </ul>
                </div>
                <div className="cart">
                <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                <p>Cart</p>
                <span id="cart">0</span>
                </div>
                
            </nav>
            
        )
    }


export default Navbar
