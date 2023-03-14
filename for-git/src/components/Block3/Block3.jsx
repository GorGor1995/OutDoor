import React from "react";
import './style.css';

const Block3 = () => {
    return ( 
        <>
        <div className="block3">
        <div className="block3-left">
            <div className="b3-name">
                BUYER'S GUIDES
            </div>
            <div className="b3-title">
                Navigating our offering.
            </div>
            <div className="b3-sub">
                Morbi neque ex, condimentum dapibus congue et, vulputate ut 
               <br/> ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi
              <br/> ultrices, ut faucibus orci tincidunt.
            </div>
            <div className="b3-img">
                <img src={require("./../../Pic/block3/img1.jpg")} alt="" />
            </div>
                <div className="b3-down">
                    <div className="down-image">
                        <img src={require("./../../Pic/block3/img2.jpg")} alt="" className="down-img" />
                    </div>
                    <div className="down-subtitle">
                    <div className="down-name">
                        Alex Jenna
                    </div>
                    <div className="down-title">
                        QA
                    </div>
                </div>
                </div>
        </div>
        <div className="block3-right">
            <div className="b3-right-img">
                <img src={require("./../../Pic/block3/img3.jpg")} alt="" />
            </div>
            
            <div className="right-down">
                <div className="rd-img">
                    <img src={require("./../../Pic/block3/img4.png")} alt="" className="rd-pic" />
                </div>
                <div className="rd-subtitle">
                    <div className="rd-title">
                        Woodie Brandon
                    </div>
                    <div className="rd-sub">
                        Product Designer
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
     );
}
 
export default Block3;