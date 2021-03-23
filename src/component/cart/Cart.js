import React from 'react'
import { Link } from 'react-router-dom'
import CartSummary from './cartsummary/CartSummary'
import SummaryShipping from './summaryshipping/SummaryShipping'

 const Cart = () => {
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
                <CartSummary />
                <SummaryShipping />
            
        </>
    )
}
export default Cart
