import React, {useContext} from 'react'
import Logo from '../../img/logo-nobg2.png'
import { Link } from 'react-router-dom'
import { UidContext } from '../AppContext'
import Logout from "../Page/LogInForm/Signform/LogOut"



const Navbar =  () => {
    
    const links = [
        'New',
        'Second Hand',
        'Sell Collection',
        'Merch',
        'Accessories',
        'Live',
        'Profile'    
    ]
    const strToUrl = (str) => '/' + str.replace(' ', '')
    
    const { uid } = useContext(UidContext)
 
    
    return (
            <nav id="nav">
                <div className="logo">
                <Link to="/New">
                <img src={Logo} alt="logo maison records"></img>
                </Link>
                </div>
                <div className="link">
                    <ul>
                        {links.map((link) => {
                            if (link=="Profile" && uid && !uid.admin){
                            return (<li><Link to={strToUrl(link)}>{link}</Link></li>)
                            }
                            else if (link != 'Profile') {
                             return (<li><Link to={strToUrl(link)}>{link}</Link></li>)
                            }
                            })}
                    </ul>
                </div>
    
                <div className="cart">
                    <div className="log">
                    {uid ? (
                        <>
                            <Logout/>
                            {!uid.admin ? (<Link to="/Cart"> 
                             <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" ></i>
                             </Link>):(<></>)}
                        </>
                    ) : (
                        <>
                        
                         <Link to="/UserRegisterPage">
                            <span>Log in</span>
                        </Link>
                        {/* <Link to="/AdminDashboard">
                            <span>Admin</span>
                        </Link> */}
                        </>
                    )}
                            
                    </div>
                    
                </div>
                
            </nav>
            
        )
    }


export default Navbar
