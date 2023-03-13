import React from "react";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";
import client3 from "../../assets/client3.jpg";
import StarIcon from "@mui/icons-material/Star";

import "./testimonial.scss";
const Testimonial = () => {
  const images = [
    {
      id: 1,
      name: "Roman Rey",
      img: client1,
    },
    {
      id: 2,
      name: "Alex Tom",
      img: client2,
    },
    {
      id: 3,
      name: "Finn Balor",
      img: client3,
    },
  ];

  return (
    <div className="testimonial">
      <div className="center">
        <h3 className="heading">
          What Our Clients Says <br /> About Us
        </h3>
      </div>

      <div className="cards center">
        {images.map((img) => (
          <div className="card" key={img.id}>
            <img src={img.img} alt="profile-pic" />
            <span>
              <b>{img.name}</b>
            </span>
            <span>Toranto, Canada</span>
            <div className="card-bottom">
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur ac quam in congue.{" "}
              </p>
              <div className="rating">
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
                <StarIcon className="star-icon"/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
