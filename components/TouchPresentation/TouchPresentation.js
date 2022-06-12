import React from "react";

export default function TouchPresentation() {
  return (
    <div className="ContactPresentation TouchPresentation">
      <h2>Agents</h2>
      <h1>Realtor</h1>
      <p>Feel free to contact our realtor or contact us via email or phone.</p>

      <div className="profile_presentation">
        <img src="./images/agent.png" />
        <h1>Jawad Chaudhry</h1>
        <p>CEO One Max Real Estate</p>
      </div>
      <ul>
        <li>
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
