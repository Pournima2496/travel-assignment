import React from "react";
import Card from "../card/Card";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";

import "./testimonial.scss";
const Testimonial = () => {
  const images = [client1, client2, client3];

  return (
    <div className="testimonial">
      <div className="center">
        <h3 className="heading">
          What Our Clients Says <br /> About Us
        </h3>
      </div>

      <div className="cards center">
        {images.map((img) => (
          <div className="card">
            <Card img={img} />
            <div className="card-bottom">
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur ac quam in congue.{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
