import React from 'react'


const CartSummary = (props) => {
    const { cartItems, onAdd, onRemove } = props
    
    return (
        <>
        <div className="container">
            <div id="cart">
                <div id="cartItems">
                    <div id="cartHeader">
                    
                        <p>{cartItems.length === 0 && <div>Your cart is empty </div> || <div>Your cart: {cartItems.length} items </div> }</p>
                        <p className="itemDescription">Description</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>   
                    </div>
                </div>  
                    {cartItems.map((item) => (
                        <div key={item.id} className="cartEntry">
                                <div className="image">
                                    <img src={item.image} alt={item.title}></img>
                                </div>
                                <div className="itemDescription">
                                    <p className="itemDescription">{item.title} || {item.subTitle}</p>
                                </div>
                                <div className="itemPrice">
                                    <span>{item.price}€</span>
                                </div>
                                <div className="itemQuantity">
                                    <form>
                                        <div className="quantityEditor">
                                        <button onClick={() => onRemove(item)}  type="button">
                                            
                                        <i class="fas fa-minus"></i>
                                        </button>
                                        <span className="itemQty">{item.quantity}</span>
                                        <button onClick={() => onAdd(item)} type="button">
                                        <i class="fas fa-plus"></i>
                                        </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="total">
                                    {item.quantity*item.price}€
                                </div>
                            </div>
                            ))}
                                </div>
                            </div>
                           
        </>
    )
}
export default CartSummary