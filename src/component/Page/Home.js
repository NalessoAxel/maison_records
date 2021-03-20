
import React from 'react'
import logo_svg from '../../img/MaisonRecords.svg'
import { Link } from 'react-router-dom'
import Animations from '../Header/Animations'
import FooterBottom from '../Footer/FooterBottom'



const Home = () => {

    return (
        <>
        <Animations />
        <div className="logoAnimation">
        
        <Link to="/New">
        <img src={logo_svg} alt="" className="logo" />
        </Link>
        </div>
       <FooterBottom />
        </>
        
        )   
    }

export default Home