import React, {useContext, useState} from 'react'
import Logo from '../../img/logo-nobg2.png'
import { Link } from 'react-router-dom'
import { UidContext } from '../AppContext'
import Logout from "../Page/LogInForm/Signform/LogOut"

const Navbar =  () => {
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false)
    const links = [
        'New',
        'Second Hand',
        'Sell Collection',
        'Merch',
        'Accessories',
        'Live',
            
    ]
    const strToUrl = (str) => '/' + str.replace(' ', '')
    
    const uid = useContext(UidContext);
    
    return (
            <nav id="nav">
                <div className="logo-nav">
                    <div className="logo-container">
                        <Link to="/New">
                        <img src={Logo} alt="logo maison records"  className="logo"/>
                        </Link>
                    </div>
                
                    <ul className={open ? "nav-options active" : "nav-options"}>
                        {links.map((link, index) => (
                            <li class="options" onClick={closeMobileMenu}><Link key={index} to={strToUrl(link)}>{link}</Link></li>
                        ))}
                    </ul>
                </div>
                
                <div className="cart">
                    <div className="log">
                    {uid ? (
                        <>
                            <Logout/>
                        </>
                    ) : (
                        <>
                         <Link to="/UserRegisterPage" onClick={closeMobileMenu}>
                            <span>Log in</span>
                        </Link>
                        <Link to="/AdminDashboard" onClick={closeMobileMenu}>
                            <span>Admin</span>
                        </Link>
                        </>
                    )} 
                    </div>
                    <Link to="/Cart">
                        <i class="fa fa-shopping-cart fa-2x" aria-hidden="true" ></i>
                    </Link>
                </div>
                <div className="iconNav" onClick={handleClick}>
                <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </nav> 
        )
    }


export default Navbar
