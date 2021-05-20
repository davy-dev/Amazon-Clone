import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {  Link } from "react-router-dom";
import {useStateValue} from "./StateProvider"

export default function Header() {

  const [{basket},dispatch]=useStateValue()

  

  return (
    <div className="header">
    <Link to="/"><img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazone-logo"
      /></Link>
      <div className="header-option" >
        <span className="header-optionLineOne">Bonjour</span>
        <span className="header-optionLineTwo">Entrez votre adresse</span>
      </div>
      <div className="header-search">
        <input className="header-searchInput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <div className="header-option">
          <span className="header-optionLineOne">Bonjour, Identifier-vous</span>
          <span className="header-optionLineTwo">Compte et listes </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Retours </span>
          <span className="header-optionLineTwo">et Commandes </span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your </span>
          <span className="header-optionLineTwo">Prime </span>
        </div>
        
         <Link to="/checkout"> 
        <div className="header-optionBasket">
        <ShoppingBasketIcon/>
        
        <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}
