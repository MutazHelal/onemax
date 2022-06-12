import React from "react";

export default function SpecsProperty() {
  return (
    <div className="SpecsProperty container MeetOurTeam px-4 py-16 mx-auto bg-white sm:px-12 lg:px-4">
      <div className="left_area">
        <img src="./images/pro1.png" alt="" />
        <img src="./images/pro2.png" alt="" />
        <img src="./images/pro3.png" alt="" />
        <img src="./images/pro1.png" alt="" />
      </div>
      <div className="presentation_area">
        <span>
          Rent <img src="./images/Ellipse 14.svg" alt="" /> Furnished
        </span>
        <h1>The Queen Inside - Type 64</h1>
        <p>64 Missisauga Avenue - Toronto, ON</p>

        <div className="price">
          <p>$2,876</p>

          <small>50% Off</small>
        </div>

        <p>or pay only $678.98 a month with 12 months special financing</p>

        <div className="specs">
          <p>2 Bed</p>
          <p>2 Bathroom</p>
          <p>987 Sq feet</p>
        </div>

        <div className="button_wrapper">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}
