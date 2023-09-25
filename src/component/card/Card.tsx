import { FC, useState } from "react";
import {AiFillStar, AiFillSetting} from "react-icons/ai";
import {BsThreeDotsVertical} from "react-icons/bs"


import "./style.css";

export const Card = () => {
  return (
    <>
    <div className="atm">
    <div className="atm-card">
    <div className="atm-heading">
        <p style={{color:"black", fontSize:18, fontWeight:"700"}}>Card name</p>
        <div>
        <AiFillStar size={24}/>
        <BsThreeDotsVertical size={24}/>
        </div>
       
    </div>
    <div className="atm-card-content">
        <p>Edited a day ago</p>
        <AiFillSetting size={24}/>
    </div>
    </div>

    <div className="atm-card">
    <div className="atm-heading">
        <p style={{color:"black", fontSize:18, fontWeight:"700"}}>Card name</p>
        <div>
        <AiFillStar size={24}/>
        <BsThreeDotsVertical size={24}/>
        </div>
       
    </div>
    <div className="atm-card-content">
        <p>Edited a day ago</p>
        <AiFillSetting size={24}/>
    </div>
    </div>
    </div>
    </>


    );
  };
  