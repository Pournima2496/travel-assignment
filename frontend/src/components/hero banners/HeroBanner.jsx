import React from "react";
import "./hero.scss";
import tourist from "../../assets/Layer 1 1.png";
import worldMap from "../../assets/world_map_PNG28 3.png";
import card1 from "../../assets/Rectangle 9.png";

const HeroBanner = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <span>Visit</span>
        <h1>
          The Exotic<b>Lakshadweep</b>Islands
        </h1>
        <button className="discover">Discover Now</button>
      </div>
      <div className="hero-right">
        <img src={tourist} alt="" className="tourist" />
        <img src={worldMap} alt="" className="world_map" />
        {/* <div className="circle1"/> */}
        {/* <div className="circle2"/> */}
        {/* <div className="circle3"/> */}

        {/* Cards */}
        <div className="card_lg">
          <img src={card1} alt="" />
          <strong>Explore Labuan Bajo</strong>
          <span>NTT, Indonesua</span>
        </div>
        <div className="card_sm ">
          <img src={card1} alt="" />
          <strong>Explore Labuan Bajo</strong>
          <span>NTT, Indonesua</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
