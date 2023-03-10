import React from "react";
import Card from "../card/Card";
import "./bestpackage.scss";
import photo1 from "../../assets/photo.jpg";
import photo2 from "../../assets/photo-1.jpg";
import photo3 from "../../assets/photo-2.jpg";

const BestPackages = () => {
  const images = [photo1, photo2, photo3];
  return (
    <div className="best-packages">
      <div className="center">
        <h3 className="heading">Best Packages For You</h3>
        <p className="para">
          This is a unique experience on ship, sea and land, exploring different
          coral islands of Lakshadweep.
        </p>
      </div>
      <div className="places center">
        <span className="active">Maldives</span>
        <span>Samudram</span>
        <span>Cordelia</span>
        <span>Agatti</span>
        <span>More</span>
      </div>
      <div className="cards center">
        {images.map((img) => (
          <div className="card">
            <Card img={img} />
            <div className="card-data">
              <div className="card-title">
                <span>Indonesia</span>
                <span>4.5</span>
              </div>
              <p className="para">
                Explore the Beauty of the island for 3 days and 2 nights with
                our travel agency...
              </p>
              <button className="btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>

      <button className="discover">Discover Now</button>
    </div>
  );
};

export default BestPackages;
