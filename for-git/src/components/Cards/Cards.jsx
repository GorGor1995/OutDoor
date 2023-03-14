import React from "react";
import './style.css';

const Cards = () => {
    return ( 
        <>
         <div className="cards">
        <div className="cards-title">
            <div className="cards-name">
                Meet the family
            </div>
            <div className="cards-tit">
                What we have in store for you.
            </div>
            <div className="cards-sub">
                Morbi neque ex, condimentum dapibus congue et, vulputate ut 
               <br /> ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi 
              <br /> ultrices, ut faucibus orci tincidunt.
            </div>
        </div>
        
        <div className="cards-up">
            <div className="card1">
               
                <div className="card1-title">
                    Accessories
                </div>
                <div className="card1-sub">
                    Accessories you didn't know 
                   <br /> you needed.
                </div>
                <div className="card1-sup">
                    <a href="#" className="card-link">View Accessories</a>
                </div>
            </div>
            <div className="card2">
              
                <div className="card2-title">
                    Apparel
                </div>
                <div className="card2-sub">
                    Check out our line of non-
                   <br /> hiking clothes.
                </div>
                <div className="card2-sup">
                    <a href="#" className="card-link">View Apparel</a>
                </div>
            </div>
            <div className="card3">
                
                <div className="card3-title">
                    Climbing Gear
                </div>
                <div className="card3-sub">
                    Climbing gear for every occasion.
                </div>
                <div className="card3-sup">
                    <a href="#" className="card-link">View Climbing Gear</a>
                </div>
            </div>
        </div>
        <div className="cards-down">
            <div className="card4">
               
                <div className="card4-title">
                    Headwear
                </div>
                <div className="card4-sub">
                    Our beanies are so comfy you 
                   <br /> won't believe it.
                </div>
                <div className="card4-sup">
                    <a href="#" className="card-link">View Headwear</a>
                </div>
            </div>
            <div className="card5">
               
                <div className="card5-title">
                    Hiking Gear
                </div>
                <div className="card5-sub">
                    Desert or mountain? Doesn't matter.
                </div>
                <div className="card5-sup">
                    <a href="#" className="card-link">View Hiking Gear</a>
                </div>
            </div>
            <div className="card6">
               
                <div className="card6-title">
                    Jackets
                </div>
                <div className="card6-sub">
                    Our jackets are perfect for every 
                   <br /> season.
                </div>
                <div className="card6-sup">
                    <a href="#" className="card-link">View Jackets</a>
                </div>
            </div>
        </div>
    </div>
        </>
     );
}
 
export default Cards;