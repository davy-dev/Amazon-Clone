import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"

function CheckoutProduct({price,image,title,id}) {
    const[{basket},dispatch]=useStateValue()

    const removeFromBasket= ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
    return (
        <div className="checkoutProduct">
        <img className="checkoutProduct-image"  src={image}/>
        <div className="checkoutProduct-info">
         </div>
            <p className="checkoutProduct-title">{title} </p>
            <p className="checkoutProduct-price">
                <strong> {price} <small>€</small> </strong>
             </p>
             <button onClick={removeFromBasket} className="checkoutProduct-deleteItem"> Supprimer </button>
        </div>
    )
}

export default CheckoutProduct
