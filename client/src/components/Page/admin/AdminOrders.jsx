import React from 'react'
import AdminHeader from './AdminHeader'

const AdminOrders = () => {
    return (
        <>
            <AdminHeader/>
            <div className="order">
                <div className="orderHeader">
                    <p classname="justify">User Name</p>
                    <p classname="justify">Order Id</p>
                    <p className="justify">Date</p>
                    <p className="justify">Status</p>
                    <p className="justify">Quantity</p>
                    <p className="justify">Total</p>
                    </div>
                <div className="orderItem">
                    <p className="justify">axelnalesso@gmail.com</p>
                    <p className="justify">#2342</p>
                    <p className="justify">23 april 2020</p>
                    <p className="justify">Complete</p>
                    <p className="justify">10</p>
                    <p className="justify">120€</p>
                      <button className="detailsBtn">Details</button> 
                    <p className="justify">axelnalesso@gmail.com</p>
                    <p className="justify">#2342</p>
                    <p className="justify">2 April 2020</p>
                    <p className="justify">Complete</p>
                    <p className="justify">10</p>
                    <p className="justify">120€</p>
                    <button className="detailsBtn">Details</button> 
                    <p className="justify">axelnalesso@gmail.com</p>
                    <p className="justify">#2342</p>
                    <p className="justify">2 April 2020</p>
                    <p className="justify">Complete</p>
                    <p className="justify">10</p>
                    <p className="justify">120€</p>
                    <button className="detailsBtn">Details</button>       
                </div>
            </div>
        </>
    )
}

export default AdminOrders
