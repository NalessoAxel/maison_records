import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UidContext } from '../../AppContext';
import axios from "axios"

const UserHeader = () => {
    const { uid } = useContext(UidContext)

    return (
        <>
            <div className="userHeader">
                <h1>Hello {uid.first_name} {uid.last_name}</h1>
                   <div className="left">
                   <Link to="/Orders">Your Orders</Link>
                   <Link to="/Adress">Your Adress</Link>
                   <Link to="/UserDetails">Your Details</Link>
                   </div>
            </div>
        </>
    )
}

export default UserHeader
