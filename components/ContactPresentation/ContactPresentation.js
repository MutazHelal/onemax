import React from "react";

export default function ContactPresentation() {
  return (
    <div className="ContactPresentation">
      <h1>Get in touch with us.</h1>
      <p>We provide a complete service for the sale, purchase.</p>
      <ul>
        <li>
          <h1>Find us at</h1>
          <div className="bottom_wrapper">
            <p>
              <img src="./images/MapPin.svg" alt="" />
              1234 Rymal Road East, Hamilton, ON
            </p>
          </div>
        </li>
        <li>
          <h1>Reach out to us at</h1>
          <div className="bottom_wrapper">
            <p>
              <img src="./images/Envelope.svg" alt="" />
              contact@onemax.ca
            </p>
            <p>
              <img src="./images/Phone.svg" alt="" />
              +1 234 567 890
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
