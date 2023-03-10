import React from "react";
import "./feature.scss";
import Card from "../card/Card";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";

const Feature = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="featured">
      <div className="center">
        <h3 className="heading">Island Stays</h3>
        <p className="para top">
          One can choose from a variety of beautiful coral islands which offers
          different staying experiences from thatched huts to luxurious modern
          properties. Every island offers a wider range of water sports and
          beach activities for you to enjoy.
        </p>
      </div>
      <div className="cards center">
        {images.map((img) => (
          <div className="card">
            <Card img={img} />
            <div className="card-data">
              <span className="card-title">Kavaratti</span>
              <p className="para">
                Kavaratti is the capital of the Union Territory of Lakshadweep
                having ...
              </p>
              <div className="card-bottom">
                <span>
                  {" "}
                  <b>4.5 </b> (1.5k Review){" "}
                </span>
                <button className="btn">Explore More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
