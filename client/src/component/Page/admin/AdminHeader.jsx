import React from 'react'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <>
            <div className="userHeader">
                <h1>Hello Admin!</h1>
                   <div className="left">
                    <Link to="/AdminDashboard">Dashboard</Link>
                   <Link to="/AddReference">Add a reference</Link>
                   <Link to="/AdminOrders">Orders</Link>
                   <Link to="/AdminVisitors">Visitors</Link>
                   </div>
            </div>
        </>
    )
}

export default AdminHeader