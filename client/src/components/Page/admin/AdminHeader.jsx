import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UidContext } from '../../AppContext';
import axios from 'axios';



const AdminHeader = () => {
    const { uid, loading } = useContext(UidContext)
    const [admin, setAdmin] = useState('');
 
    const getName = async () => {
        try {
        const res = await axios({
            method: "get",
            url: `${process.env.REACT_APP_API_URL}api/user/`+ uid.id,
            withCredentials: true
        })
        setAdmin(res.data.first_name);
        }
        catch(err){
            console.log(err);
            }
    }
    getName();
    


    return (
        <>
            <div className="userHeader">
                <h1>Hello { admin }!</h1>
                   <div className="left">
                   <Link to="/AdminDashboard">Dashboard</Link>
                   <Link to="/AddReference">Add a reference</Link>
                   <Link to="/AdminOrders">Orders</Link>
                   <Link to="/AdminVisitors">Visitors</Link>
                   <Link to='/VinylDashboard'>Vinyls edition</Link>
                   </div>
            </div>
        </>
    )
}

export default AdminHeader