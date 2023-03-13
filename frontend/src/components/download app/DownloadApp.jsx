import React from "react";
import "./downloadapp.scss";
import mobile from "../../assets/mobile.png"
import GooglePlay from "../google play/GooglePlay";

const DownloadApp = () => {
  return (
    <div className="download">
      <div className="left">
        <h3>Download Our App</h3>
        <span>The best travel in the world</span>
        <GooglePlay />
      </div>
      <div className="radial">
        <div className="circle circle1" />
        <div className="circle circle2" />
        <div className="circle circle3" />
        <div className="circle circle4" />
        <div className="circle circle5" />
        <div className="circle circle6" />
        {/* hide bottom of circle */}
        <div className="hide"></div>
      </div>
      <div className="right">
        <img src={mobile} alt="" />
      </div>
    </div>
  );
};

export default DownloadApp;
