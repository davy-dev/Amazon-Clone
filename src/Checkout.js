import React, { useEffect, useState } from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";


export default function Checkout() {
  const [{basket},dispatch]=useStateValue()
  const [subTotal,setSubTotal]=useState()

  useEffect(()=>{
    setSubTotal(basket?.reduce((amount,item)=>item.price+amount,0))
},[basket])


  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/FR_2021_handpicked_asset/XCM_Manual_1318653_1636561_FR_fr_ce_handpicked_3757932_1500x150_fr_FR.jpg"
          alt=""
        />
        <div className="checkout-list">
          <div className="checkout-title">
            <h2>votre panier </h2> 
            <small>Prix</small>
           </div>
          {basket.map((item,id)=>(
            <CheckoutProduct
              key={id}
              price={item.price}
              title={item.title}
              image={item.image}
              id={item.id}
              
            />
          ))}
            <div className="checkout-subTotalList">
             <p>Sous-total ({basket.length} {basket.length>1?"articles":"article"}) : <strong>{subTotal}</strong> </p> 
            </div>
        </div>
      </div>
      <div className="checkout-right">

      <SubTotal/> 

      </div>
    </div>
  );
}
