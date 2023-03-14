import React from "react";
import './style.css';

const Block1 = () => {
    return ( 
        <>
        <div className="block1">
        <div className="block1-images">
            <div className="block1-img1">
                <img src={require("../../Pic/header/line1.png")} alt="" className="b-line1" />
            </div>
            <div className="block1-img2">
                <img src={require("../../Pic/header/img3.jpg")} alt="" className="bg" />
            </div>
            <div className="block1-img3">
                <img src={require("../../Pic/header/line2.png")} alt="" className="b-line2" />
            </div>
        </div>
        <div className="block1-text">
            <div className="b-title">
                Who are we?
            </div>
            <div className="b-sub">
                A bit about us.
            </div>
            <div className="b-sup">
                We are an outdoor gear company focused on 
               <br /> Lorem ipsum dolor sit amet, consectetur 
              <br /> adipiscing elit. Nullam scelerisque aliquam odio 
             <br /> et faucibus. Nulla rhoncus feugiat eros quis 
            <br /> consectetur. Morbi neque ex, condimentum 
           <br /> dapibus congue et.
            </div>
            <div className="b-reed">
                <a href="#" className="read">Read more  </a>

            </div>
        </div>
    </div>
        </>
     );
}
 
export default Block1;
