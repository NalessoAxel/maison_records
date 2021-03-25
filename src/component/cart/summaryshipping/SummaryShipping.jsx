import React from 'react'
import { Link } from 'react-router-dom'

const SummaryShipping = (props) => {
    const { cartItems } = props
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0)
    const shippingPrice = itemsPrice > 100 ? 0 : 15;
    const totalPrice = itemsPrice + shippingPrice
    return (
        <>
            <div id='summaryShipping'>
                <div id="summary">
                <h2>Order overview</h2>
                <p className="justify">
                    <span>Quantity</span>
                    <span>
                       {cartItems.length} 
                    </span>
                </p>
                <p className="justify">
                    <span>Subtotal</span>
                    <span className="price">
                    {cartItems.length !== 0 && (
                            <>
                            <div>{itemsPrice}€</div>
                            </>
                        )}
                    </span>
                </p>
                <p className="justify">
                    <span>Delivery</span>
                    <span>Pending</span>
                </p>
                <h2 className="justify">
                    <span>Total</span>
                    <span className="price">{totalPrice}€</span>
                </h2>
                </div>
                <div id="shippingOption">
                    <h2>Delivery option</h2>
                    <form>
                        <div id="shippingAdress">
                            <div className="option">
                                <label>
                                    <input type="radio" name="shippingOption" value="adress" checked />
                                    Home delivery
                                </label>
                            </div>
                        </div>
                        <div className="option">
                                <label>
                                    <input type="radio" name="shippingOption" value="collect"  />
                                    I collect in store
                                </label>
                            
                        </div>
                    </form>
                </div>
                <Link to='/checkoutDetails'>
                    <button id="proceedToCheckout">Proceed to checkout</button>
                </Link>
                    
            </div>
        </>
    )
}
export default SummaryShipping
