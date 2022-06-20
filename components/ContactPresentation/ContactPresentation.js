import React from "react";
import Image from "next/image";
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
              <Image src="/images/MapPin.svg" width={20} height={20} alt="" />
              1234 Rymal Road East, Hamilton, ON
            </p>
          </div>
        </li>
        <li>
          <h1>Reach out to us at</h1>
          <div className="bottom_wrapper">
            <p>
              <Image src="/images/Envelope.svg" width={20} height={20} alt="" />
              contact@onemax.ca
            </p>
            <p>
              <Image src="/images/Phone.svg" width={20} height={20} alt="" />
              +1 234 567 890
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
