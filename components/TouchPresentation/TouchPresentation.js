import React from "react";
import Image from "next/image";
export default function TouchPresentation() {
  return (
    <div className="ContactPresentation TouchPresentation">
      <h2>Agents</h2>
      <h1>Realtor</h1>
      <p>Feel free to contact our realtor or contact us via email or phone.</p>

      <div className="profile_presentation">
        <div style={{ position: "relative", height: 400 }}>
          <Image src="/images/agent.png" alt="" layout="fill" />
        </div>

        <h1>Jawad Chaudhry</h1>
        <p>CEO One Max Real Estate</p>
      </div>
      <ul>
        <li>
          <div className="bottom_wrapper">
            <p>
              <Image src="/images/Envelope.svg" alt="" width={20} height={20} />
              contact@onemax.ca
            </p>
            <p>
              <Image src="/images/Phone.svg" alt="" width={20} height={20} />
              +1 234 567 890
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
