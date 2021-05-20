import React from "react" 

import {useStateValue} from './StateProvider'
import "./Product.css"

 function Product({id,title,price,rating,image}) {
 
    const [{basket},dispatch]= useStateValue()
    console.log(basket);
    const addToBasket= ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating,rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
               
                <strong>{price} <small>€</small> </strong> 
                </p>
                <div className="product-rating">
                {Array(rating).fill().map((_,i)=>(
                     <p>⭐</p>
                ) )}
                   
                    

                </div>
                
                
            </div>

            <img src={image} alt=""/>
            <button onClick={addToBasket} >Ajouter au panier</button>
        </div>
    )
}
export default Product
