import React from "react";

export default function ProfileBox() {
  return (
    <div className="ProfileBox">
      <div className="img_area">
        <img src="./images/agent.png" alt="" />
      </div>
      <div className="presentation_profile_area">
        <div className="top_area">
          <h1>Jawad Chaudhry</h1>
          <div className="social_area">
            <a href="#">
              <img src="./images/InstagramLogo.svg" alt="" />
            </a>
            <a href="#">
              <img src="./images/LinkedinLogo.svg" alt="" />
            </a>

            <a href="#">
              <img src="./images/TiktokLogo.svg" alt="" />
            </a>
            <a href="#">
              <img src="./images/TwitterLogo.svg" alt="" />
            </a>
          </div>
        </div>
        <p>Property Management</p>

        <div className="rating">
          <div className="stars">
            <img src="./images/Star_fill.svg" alt="" />
            <img src="./images/Star_fill.svg" alt="" />
            <img src="./images/Star_fill.svg" alt="" />
            <img src="./images/Star_fill.svg" alt="" />
            <img src="./images/Star.svg" alt="" />
          </div>
          <p>4.8 (2.8K reviews)</p>
        </div>

        <ul>
          <li>
            <img src="./images/Envelope.svg" alt="" />
            contact@onemax.ca
          </li>
          <li>
            <img src="./images/Phone.svg" alt="" />
            +1 234 567 890
          </li>
        </ul>
      </div>
    </div>
  );
}
