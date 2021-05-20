import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
            <div className="footer-returnTop">
                <span>Retour en haut</span>
            </div>
            <div className="footer-info">
            <div className="footer-infoContainer">
                <div className="footer-infoContainer-part1" >
                    <h3>Pour mieux nous connaître</h3>
                    <ul>
                        <li><a href="#">A propos d'Amazon</a></li>
                        <li><a href="#">Carrières</a></li>
                        <li><a href="#">Durabilité</a></li>
                    </ul>
                </div>
                <div className="footer-infoContainer-part2">
                    <h3>Gagnez de l'argent</h3>
                    <ul>
                        <li><a href="#">Vendez sur Amazon</a></li>
                        <li><a href="#">Vendre sous Amazon Accelerator</a></li>
                        <li><a href="#">Vendez sur Amazon Business</a></li>
                        <li><a href="#">Vendez sur Amazon Handmande</a></li>
                        <li><a href="#">Devenez Partenaire</a></li>
                        <li><a href="#">Expédié par Amazon</a></li>
                        <li><a href="#">Faites la promotion de vos produits</a></li>
                        <li><a href="#">Auto-publiez votre livre</a></li>
                        <li><a href="#">Amazon Pay</a></li>
                        <li><a href="#">Tous nos programmes</a></li>
                        
                    </ul>
                </div>
                <div className="footer-infoContainer-part3" >
                  <h3>Moyens de paiement Amazon</h3>
                  <ul>
                        <li><a href="#">Cartes de paiement</a></li>
                        <li><a href="#">Paiement en plusieurs fois</a></li>
                        <li><a href="#">Amazon Currency Converter</a></li>
                        <li><a href="#">Chèque-cadeaux</a></li>
                        <li><a href="#">Recharge en ligne</a></li>
                        <li><a href="#">Rechargeen point de vente</a></li>
                    </ul>
                </div>
                <div className="footer-infoContainer-part4" >
                    <h3>Besoin d'aide ?</h3>
                    <ul>
                        <li><a href="#">Amazon et COVID-19</a></li>
                        <li><a href="#">Voir ou suivre vos commandes</a></li>
                        <li><a href="#">Tarifs et options de livraison</a></li>
                        <li><a href="#">Amazon Prime</a></li>
                        <li><a href="#">Retours et remplacment</a></li>
                        <li><a href="#">Recyclage(y compris les équipements éléctrique et élèctronique)</a></li>
                        <li><a href="#">Info sur notre Marketplace</a></li>
                        <li><a href="#">Application Amazon Mobile</a></li>
                        <li><a href="#">Amazon Assistant</a></li>
                        <li><a href="#">Service Client</a></li>
                        <li><a href="#">Accessibilité</a></li>
                    </ul>                    

                </div>
                </div>
            </div>
            <div className="footer-contries">

            <div className="footer-contriesContainer">  <Link to="/"><img
        className="header-logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazone-logo"
      /></Link>
                <ul>
                    <li><a href="#">Australie</a></li>
                    <li><a href="#">Allemagne</a></li>
                    <li><a href="#">Brésil</a></li>
                    <li><a href="#">Canada</a></li>
                    <li><a href="#">Chine</a></li>
                    <li><a href="#">Espagne</a></li>
                    <li><a href="#">Etats-Unis</a></li>
                    <li><a href="#">Inde</a></li>
                    <li><a href="#">Italie</a></li>
                    <li><a href="#">Japon</a></li>
                    <li><a href="#">Mexique</a></li>
                    <li><a href="#">Pays-Bas</a></li>
                    <li><a href="#">Pologne</a></li>
                    <li><a href="#">Royame-Uni</a></li>
                    <li><a href="#">Emirats arabes unis</a></li>
                    <li><a href="#">Singapour</a></li>
                    <li><a href="#">Turquie</a></li>
        
                </ul>
  </div>
           
            </div>
            <div className="footer-services">
                <div></div>
            </div>
            <div className="footer-conditions">
            <div className="footer-conditionsContainer"> 
                <ul>
                    <li>Conditions générales de vente</li>
                    <li>Vos information personnelles</li>
                    <li>Cookies</li>
                    <li>Annonces bassés sur vos centres d'intéret</li>
                    <li>© 1996-2021, Amazon.com, Inc. ou ses filiales.</li>
                </ul>
                </div>
            </div>
        </div>
    
        )}

export default Footer
