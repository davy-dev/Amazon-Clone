import React, { useEffect, useState } from 'react'
import "./SubTotal.css"
import {useStateValue} from "./StateProvider"
import {getBasketTotal} from "./reducer"


export default function SubTotal() {
const [{basket},dispatch]=useStateValue()
 const [subTotal,setSubTotal]=useState()

useEffect(()=>{
    setSubTotal(basket?.reduce((amount,item)=>item.price+amount,0))
},[basket])


    return (
        <div className="subtotal">

            <div className="currencyFormat">
                <p> Sous-total ({basket?.length} {basket?.length>1?"articles":"article"} ): <strong> {subTotal} €</strong></p>
                <small className="subtotal-gift">
                    <input type="checkbox"/> Commande contenant un cadeau
                </small>
            </div>

            <button>Passer la commande </button>

            
        </div>
    )
}

