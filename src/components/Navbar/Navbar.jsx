/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Logo from '../../img/logo-nobg2.png'

const Navbar = () => {
  const links = [
    'New',
    'Second Hand',
    'Sell Collection',
    'Merch',
    'Accessories',
    'Live',
  ]
  const strToUrl = (str) => `/${str.replace(' ', '')}`

  const [open, setOpen] = useState(false)
  const handleClick = () => setOpen(!open)

  return (
    <nav id="nav">
      <div className="logo">
        <Link to="/New">
          <img src={Logo} alt="logo maison records" />
        </Link>
      </div>
      <div className="link">
        <ul className={open ? 'link.active' : 'link'}>
          {links.map((link) => (
            <li>
              <Link to={strToUrl(link)}>{link}</Link>
            </li>
          ))}
          <li>
            <Link to="/UserRegisterPage">
              <span>Log in</span>
            </Link>
          </li>
          <li>
            <Link to="/AdminDashboard">
              <span>Admin</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="cart">
        <li>
          <Link to="/Cart">
            <i className="fa fa-shopping-cart fa-2x" aria-hidden="true" />
          </Link>
        </li>
      </div>

      <div className="nav-icon" onClick={handleClick}>
        <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
    </nav>
  )
}

export default Navbar
