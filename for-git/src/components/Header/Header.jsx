import React from "react";
import './style.css';

const Header = () => {
    return ( 
        <>
         <div className="header">
        <div className="header-line">
            <div className="header-line-image">
                <img src={require("../../Pic/header/img1.png")} alt="" />
            </div>
            <div className="header-line-links">
                <a href="#" className="header-line-link">Shop</a>
                <a href="#" className="header-line-link">About us</a>
                <a href="#" className="header-line-link">Our team</a>
                <a href="#" className="header-line-link">Buyer's guides</a>
                <a href="#" className="header-line-link">Categories</a>
            </div>
            <div className="header-line-buttons">
                <div className="button-buy">
                    <a href="#" className="buy">Buy template</a>
                </div>
                


            </div>
        </div>
        <div className="header-title">
            <div className="header-title1">
                OUTDOOR EXPLORATION
            </div>
            <div className="header-title2">
                Gear for when it 
               <br/> actually matters.
            </div>
            <div className="header-title3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
               <br/> Suspendisse varius enim in eros elementum tristique.
            </div>
        </div>
    </div>
        </>
     );
}
 
export default Header;