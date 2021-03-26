import React from 'react'
import UserHeader from './UserHeader'
const Orders = () => {
    return (
        <>
            <UserHeader />
            <div className="order">
                <div className="orderHeader">
                    <p classname="justify">Order</p>
                    <p className="justify">Date</p>
                    <p className="justify">Status</p>
                    <p className="justify">Quantity</p>
                    <p className="justify">Total</p>
                    </div>
                <div className="orderItem">
                    <p className="justify">#3425</p>
                    <p className="justify">2 April 2020</p>
                    <p className="justify">Complete</p>
                    <p className="justify">10</p>
                    <p className="justify">120€</p>
                      <button className="detailsBtn">Details</button> 
                    <p className="justify">#3425</p>
                    <p className="justify">2 April 2020</p>
                    <p className="justify">Complete</p>
                    <p className="justify">10</p>
                    <p className="justify">120€</p>
                    <button className="detailsBtn">Details</button> 
                    <p className="justify">#3425</p>
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

export default Orders
