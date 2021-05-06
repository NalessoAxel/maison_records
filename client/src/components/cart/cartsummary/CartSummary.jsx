import React,{useContext,useState} from 'react'
import { UidContext } from '../../AppContext'
import { Link} from "react-router-dom";

const CartSummary = (props) => {
    const { cartItems, onAdd, onRemove } = props
    const { uid, order } = useContext(UidContext)
  
    return (
      <>
        <div className="container">
          <div id="cart">
            <div id="cartItems">
              <div id="cartHeader">
                <p>
                {(Object.entries(order).length === 0 && (
                    <div>Your cart is empty </div>
                  )) || <div>Your cart: {Object.entries(order).length} items </div>}
                </p>
                <p className="itemDescription">Product Name</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
              </div>
            </div>
            {Object.entries(order).map((item) => (
                <>

              <div key={item[0]} className="cartEntry">
                <div className="image">
                    <Link to= {`/ReleaseDetails/${item[1]._id}`}>
                  <img width="60px" src={`${process.env.REACT_APP_API_URL}images/${item[1].image}.png`} alt="VinylImage"></img>
                    </Link>
                </div>
                <div className="itemDescription">
                 <Link to= {`/ReleaseDetails/${item[1]._id}`}>
                  <p className="itemDescription">
                    {item[1].title} 
                  </p>
                </Link>
                </div>
                <div className="itemPrice">
                  <span>{item[1].price} €</span>
                </div>
                <div className="itemQuantity">
                  <form>
                    <div className="quantityEditor">
                      <button onClick={() => {onRemove(item._id)}} type="button">

                        <i class="fas fa-minus"></i>
                      </button>
                      
                        <span className="itemQty">{item[1].quantityPurchased}</span>
   

                        <button onClick={() => {onAdd(item._id)}} type="button">

                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </form>
                </div>
                    <div className="total">{item[1].quantityPurchased * item[1].price}€</div>
              </div>
              </>
            ))}
          </div>
        </div>
      </>
    );
}
export default CartSummary