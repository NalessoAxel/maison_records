import React from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import addRefLogo from '../../../img/addRef.svg'
import lastOrdersLogo from '../../../img/lastOrders.svg'
import visitorsLogo from '../../../img/visitors.svg'

const AdminDashboard = () => {
    return (
        <>
            <AdminHeader/>
                <div className="adminWrapper">
                    <div className="addReference">
                        <Link to='/addReference'>
                        <img src={addRefLogo} alt=""/>
                        </Link>
                    </div>
                    <div className="lastOrders">
                    <Link to='/AdminOrders'>
                        <img src={lastOrdersLogo} alt=""/>
                        </Link>
                    </div>
                    <div className="visitors">
                    <Link to='/AdminVisitors'>
                        <img src={visitorsLogo} alt=""/>
                        </Link>
                    </div>
                </div>
        </>
    )
}

export default AdminDashboard
