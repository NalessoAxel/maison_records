import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import { UidContext } from '../../AppContext';
import axios from "axios"

const UserHeader = () => {
    const { uid } = useContext(UidContext)
    const [userName, setUserName]= useState('')

    const getName = async () =>{
        try {
            const res = await axios({
                method:"get",
                url: `${process.env.REACT_APP_API_URL}api/user/`+ uid.id,
                withCredentials: true,
            })
        setUserName(res.data.first_name)
        }
        catch(err){
            console.log(err);
        }
    }
    getName();


    return (
        <>
            <div className="userHeader">
                <h1>Hello {userName}</h1>
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
