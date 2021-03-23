import React from 'react'

const SummaryShipping = (props) => {
    const { cartItems, onAdd, onRemove } = props
    return (
        <>
            <aside>
                <h2>Your cart</h2>
                    <div>
                   {cartItems.length === 0 && <div>Your cart is empty </div> }
                    </div>
                
                    {cartItems.map((item) => (
                        <div key={item.id} className="row">
                            <div>{item.name}</div>
                            <div>
                                <button onClick={() => onAdd(item)} className="add">+</button>
                                <button onRemove={() => onRemove(item)} className="remove">-</button>
                            </div>
                            <div>
                                {item.quantity} x ${item.price.toFixed(2)}
                            </div>
                        </div>
                    ))}
            </aside>
        </>
    )
}
export default SummaryShipping
