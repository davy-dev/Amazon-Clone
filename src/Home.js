import React from "react";
import "./Home.css";
import Product from "./Product";
import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function Home() {
  return (
    <div className="home">
      <div className="home-container">

      
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 home-image"
      src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/LOL_FR/LOLF_S1_GWBleedingHero_POST_Xsite-VAR-CTA2_1500x600_PV_fr-FR_1._CB667998813_.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100 home-image"
      src="https://images-eu.ssl-images-amazon.com/images/G/08/EUBluefield/Build_Trust/Amplify_Brand_truths/Sustainability/renewable_energy/O_O_Banner_May_DesktopHero_3000x1200_FR._CB667997518_.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  
  <Carousel.Item>
    <img
      className="d-block w-100 home-image"
      src="https://images-eu.ssl-images-amazon.com/images/G/08/AMAZON-FASHION/2021/FASHION/FLIP/04_MAY/MERCH/GW/GW_HERO_TALL_3000X1200_WMN_SPORT._CB670095782_.jpg"
      alt="Second slide"
    />

    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 home-image"
      src="https://images-eu.ssl-images-amazon.com/images/G/08/AmazonMusic/2021/Marketing/SWSpringDeal_DMUX-4280/Gateway/DV2/FR-FR_030821_SpringSitewide_ACQ_GW_Hero_D_3000x1200_CV69._CB656398032_.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>



        {/* <img
          alt="banner"
          className="home-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/LOL_FR/LOLF_S1_GWBleedingHero_POST_Xsite-VAR-CTA2_1500x600_PV_fr-FR_1._CB667998813_.jpg"
        /> */}
        <div className="home-row">
        <Product id="1" title="Père riche, père pauvre - Edition 20e anniversaire" price={22.00} image="https://images-eu.ssl-images-amazon.com/images/I/51ijjHLLiCL._SY291_BO1,204,203,200_QL40_ML2_.jpg" rating={4} />
        <Product id="2" title="Magimix – Cook Expert 18900 Robot Cuiseur Multifonction 3,5L, Chrome mat, FABRIQUE EN FRANCE" price={199.99} image="https://m.media-amazon.com/images/I/71kungUvPEL._AC_UL320_.jpg" rating ={3}/>
        
      </div>

      <div className="home-row">
      <Product  id="3" title="Nouveau Apple iPhone 12 (128 Go) - Bleu" price={890.99} image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._AC_SX679_.jpg"  rating={5} />
        <Product id="4" title="JBL Charge 4 - Enceinte Bluetooth portable avec USB - Robuste et étanche : pour piscine et plage - Son puissant - Autonomie 20 hrs - Noir" price={129.00} image="https://images-na.ssl-images-amazon.com/images/I/61n8P9hoh8L._AC_SL1000_.jpg" rating={3} />
        <Product id="5" title="2020 Apple iPad Pro (12,9 Pouces, Wi-FI, 256 Go) - Gris sidéral (4ᵉ génération)" price={1559.99} image="https://images-na.ssl-images-amazon.com/images/I/81WhK5%2Bgf2L._AC_SL1500_.jpg" rating={4} />
      </div>

      <div  className="home-row">
      <Product id="6" title="Samsung C43J890 LED display 109,2 cm (43') Incurvé Bleu, Gris - Écrans plats de PC (109,2 cm (43'), 3840 x 1200 pixels, LED, 5 ms, Bleu, Gris)" price={1699.99} image="https://images-na.ssl-images-amazon.com/images/I/81v90JtbImL._AC_SL1500_.jpg" rating={5} />
        
            
      </div>
      </div>

    </div>
  );
}
