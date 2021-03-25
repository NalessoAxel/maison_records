import React from 'react'
import { Link } from 'react-router-dom'
import CartSummary from './cartsummary/CartSummary.jsx'
import SummaryShipping from './summaryshipping/SummaryShipping'

 const Cart = (props) => {
     const { cartItems, onAdd, onRemove } = props
    
    console.log(cartItems)
    
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
            <div id="basketSummary">
                <CartSummary cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
                <SummaryShipping cartItems={cartItems}  />
                </div>
            
        </>
    )
}
export default Cart
