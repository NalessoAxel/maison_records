import React from 'react'
import { Link } from 'react-router-dom'
import Logosvg from '../../img/MaisonRecords.svg'
import Animations from '../Header/Animations'
import FooterBottom from '../Footer/FooterBottom'

const Home = () => (
  <>
    <Animations />
    <div className="logoAnimation">
      <Link to="/New">
        <img src={Logosvg} alt="" className="logo" />
      </Link>
    </div>
    <FooterBottom />
  </>
)

export default Home
