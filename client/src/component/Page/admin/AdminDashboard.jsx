import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import addRefLogo from '../../../img/addRef.svg'
import lastOrdersLogo from '../../../img/lastOrders.svg'
import visitorsLogo from '../../../img/visitors.svg'
import { UidContext } from '../../AppContext';

const AdminDashboard = () => {
    
    const {uid, loading} = useContext(UidContext)
    
    if(loading){ 
        return <h3> Loading ...  </h3> }
    
    
    return (
        <>
         {uid.admin ? (
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
            ) : (
                    <h3>WARNING WARNING HACKER ATTACK</h3>            
            ) }
            
        </>
    )
}

export default AdminDashboard
