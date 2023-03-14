import React from "react";
import './style.css';

const Block4 = () => {
    return ( 
        <>
        <div className="block4">
        <div className="block4-image">
            <img src={require("./../../Pic/block4/img1.jpg")} alt="" />
        </div>
        <div className="b4-right">
            <div className="b4-name">
                Some light reading
            </div>
            <div className="b4-title">
                Subscribe to our 
               <br /> magazine today.
            </div>
            <div className="b4-text">
                We are an outdoor gear company focused on 
               <br /> Lorem ipsum dolor sit amet, consectetur 
              <br /> adipiscing elit. Nullam scelerisque aliquam odio 
             <br /> et faucibus. Nulla rhoncus feugiat eros quis 
            <br /> consectetur. Morbi neque ex, condimentum 
           <br /> dapibus congue et.
            </div>
            <div className="b4-link">
                <a href="#" className="b4-ln">Read more</a>
            </div>
        </div>
    </div>
        </>
     );
}
 
export default Block4;