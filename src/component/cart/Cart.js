import React from 'react'
import UserHeader from '../Page/User/UserHeader'
import CartSummary from './cartsummary/CartSummary.jsx'
import SummaryShipping from './summaryshipping/SummaryShipping'

 const Cart = (props) => {
     const { cartItems, onAdd, onRemove } = props
    
    console.log(cartItems)
    
    return (
        <>
            <UserHeader />
            <div id="basketSummary">
                <CartSummary cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
                <SummaryShipping cartItems={cartItems}  />
                </div>
            
        </>
    )
}
export default Cart
