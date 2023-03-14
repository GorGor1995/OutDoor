import React from "react";
import './style.css';

const Final = () => {
    return ( 
        <>
        <div className="final">
        <div className="final-image">
            <img src={require("./../../Pic/final/img1.jpg")} alt="" className="fin-img" />
        </div>

        <div className="final-arrows">
            
            <div className="arrow1">
                <div className="arrow1-name">
                    PAGES
                </div>
                <a href="#" className="arr1">Home</a>
                <a href="#" className="arr1">Shop</a>
                <a href="#" className="arr1">Categories</a>
                <a href="#" className="arr1">Buyer's guides</a>
                <a href="#" className="arr1">404</a>
                <a href="#" className="arr1">Password</a>
            </div>
            <div className="arrow2">
                <div className="arrow2-name">
                    GEAR CATEGORIES
                </div>
                <a href="#" className="arr2">Hiking Gear</a>
                <a href="#" className="arr2">Climbing Gear</a>
                <a href="#" className="arr2">Jackets</a>
                <a href="#" className="arr2">Accessories</a>
                <a href="#" className="arr2">Apparel</a>
                <a href="#" className="arr2">Headwear</a>
            </div>
            <div className="arrow3">
                <div className="arrow3-name">
                    COMPANY
                </div>
                <a href="#" className="arr3">About us</a>
                <a href="#" className="arr3">Our team</a>
                <a href="#" className="arr3">Contact</a>
                <a href="#" className="arr3">Terms & Conditions</a>
                <a href="#" className="arr3">Style guide</a>
                <a href="#" className="arr3">Licenses</a>
            </div>
            <div className="arrow4">
                <div className="arrow4-name">
                    NEWSLETTER
                </div>
                <div className="arrow4-text">
                    Subscribe to our (infrequent) newsletter where we share news 
                   <br /> about upcoming listings and projects.
                </div>
                <div className="arrow4-input">
             <input type="text" placeholder="Email" className="arrow4-inp" />  
          
                </div>
                <div className="arrow4-botton">
                    <a href="#" className="arr4-btn">Submit</a>
                </div>     

               
            </div>
        </div>
        <div className="final-txt">
            © Outdoor Exploration, LLC. All rights reserved. 
        </div>
    </div>
        </>
     );
}
 
export default Final;