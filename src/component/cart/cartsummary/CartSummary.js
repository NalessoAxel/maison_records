import React from 'react'
import ImgVinyl from '../../../img/test-vinyl1.jpg'
const CartSummary = () => {
    return (
        <>
        <div className="container">
            <div id="cart">
                <div id="cartItems">
                    <div id="cartHeader">
                    
                        <p>Your Cart<span>0</span></p>
                        <p className="itemDescription">Description</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>   
                    </div>
                </div>
                        <div className="cartEntry">
                                <div className="image">
                                    <img src={ImgVinyl} alt=""></img>
                                </div>
                                <div className="itemDescription">
                                    <p className="itemDescription">Various Artists | Soma Dubs vol.4</p>
                                </div>
                                <div className="itemPrice">
                                    <span>20€</span>
                                </div>
                                <div className="itemQuantiy">
                                    <form>
                                        <div className="quantityEditor">
                                        <button type="button">
                                        <i class="fas fa-minus"></i>
                                        </button>
                                        <input type="number" name="quantity"></input>
                                        <button type="button">
                                        <i class="fas fa-plus"></i>
                                        </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="total">
                                    <span className="price">20€</span>
                                </div>
                            </div>
                            <div className="cartEntry">
                            <div className="image">
                                    <img src={ImgVinyl} alt=""></img>
                                </div>
                                <div className="itemDescription">
                                    <p className="itemDescription">Various Artists | Soma Dubs vol.4</p>
                                </div>
                                <div className="itemPrice">
                                    <span>20€</span>
                                </div>
                                <div className="itemQuantiy">
                                    <form>
                                        <div className="quantityEditor">
                                        <button type="button">
                                        <i class="fas fa-minus"></i>
                                        </button>
                                        <input type="number" name="quantity"></input>
                                        <button type="button">
                                        <i class="fas fa-plus"></i>
                                        </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="total">
                                    <span className="price">20€</span>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    
        </>
    )
}
export default CartSummary