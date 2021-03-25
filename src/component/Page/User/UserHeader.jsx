import React from 'react'
import { Link } from 'react-router-dom'

const UserHeader = () => {
    return (
        <>
            <div className="userHeader">
                <h1>Hello @username</h1>
                   <div className="left">
                   <Link to="/Orders">Your Orders</Link>
                   <Link to="/Adress">Your Adress</Link>
                   <Link to="/AccountDetails">Your Details</Link>
                   </div>
            </div>
        </>
    )
}

export default UserHeader
