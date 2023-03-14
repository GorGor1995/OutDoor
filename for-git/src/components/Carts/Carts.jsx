import React from "react";
import './style.css';

const Carts = () => {
    return ( 
        <>
         <div className="carts">
        <div className="carts-title">
            <div className="carts-name">
                Our promise
            </div>
            <div className="carts-tit">
                Setting the bar for our products.
            </div>
            <div className="carts-sub">
                Morbi neque ex, condimentum dapibus congue et, vulputate ut 
               <br/> ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi 
              <br/> ultrices, ut faucibus orci tincidunt.
            </div>
        </div>
        
        <div className="carts-up">
            <div className="cart1">
                <div className="cart1-img">
                    <img src={require("./../../Pic/carts/img1.png")} alt=""  />
                </div>
                <div className="cart1-title">
                    Sustainable sourcing
                </div>
                <div className="cart1-sub">
                    Lorem ipsum dolor sit amet, consectetur 
                   <br/> adipiscing elit. Suspendisse varius enim 
                  <br/> in eros elementum tristique.
                </div>
            </div>
            <div className="cart2">
                <div className="cart2-img">
                    <img src={require("./../../Pic/carts/img2.png")} alt="" />
                </div>
                <div className="cart2-title">
                    Lifetime warranty
                </div>
                <div className="cart2-sub">
                       Lorem ipsum dolor sit amet, consectetur 
                   <br/> adipiscing elit. Suspendisse varius enim 
                  <br/> in eros elementum tristique.
                </div>
            </div>
            <div className="cart3">
                <div className="cart3-img">
                    <img src={require("./../../Pic/carts/img3.png")} alt="" />
                </div>
                <div className="cart3-title">
                    All-terrain tested
                </div>
                <div className="cart3-sub">
                         Lorem ipsum dolor sit amet, consectetur 
                   <br/> adipiscing elit. Suspendisse varius enim 
                  <br/> in eros elementum tristique.
                </div>
            </div>
        </div>
        <div className="carts-down">
            <div className="cart4">
                <div className="cart4-img">
                    <img src={require("./../../Pic/carts/img4.png")} alt="" />
                </div>
                <div className="cart4-title">
                    Premium materials
                </div>
                <div className="cart4-sub">
                       Lorem ipsum dolor sit amet, consectetur 
                   <br/> adipiscing elit. Suspendisse varius enim 
                  <br/> in eros elementum tristique.
                </div>
            </div>
            <div className="cart5">
                <div className="cart5-img">
                    <img src={require("./../../Pic/carts/img5.png")} alt="" />
                </div>
                <div className="cart5-title">
                    Designed by you
                </div>
                <div className="cart5-sub">
                           Lorem ipsum dolor sit amet, consectetur 
                   <br/> adipiscing elit. Suspendisse varius enim 
                  <br/> in eros elementum tristique.
                </div>
            </div>
            <div className="cart6">
                <div className="cart6-img">
                    <img src={require("./../../Pic/carts/img6.png")} alt="" />
                </div>
                <div className="cart6-title">
                    Quality assured
                </div>
                <div className="cart6-sub">
                           Lorem ipsum dolor sit amet, consectetur 
                   <br/> adipiscing elit. Suspendisse varius enim 
                  <br/> in eros elementum tristique.
                </div>
            </div>
        </div>
    </div>
        </>
     );
}
 
export default Carts;