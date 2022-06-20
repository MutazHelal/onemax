import React, { useState } from "react";

export default function AboutAgent() {
  const [active, setActive] = useState(1);
  return (
    <div className="AboutAgent">
      <div className="buttons_wrapper">
        <button
          className={`${active == 1 && "active"}`}
          onClick={(e) => setActive(1)}
        >
          About me
        </button>
        <button
          className={`${active == 2 && "active"}`}
          onClick={(e) => setActive(2)}
        >
          Our active listing
        </button>
        <button
          className={`${active == 3 && "active"}`}
          onClick={(e) => setActive(3)}
        >
          What our clients have to say
        </button>
      </div>

      <div className="content_about">
        <h1>About me</h1>
        <p>
          We provide a complete service for the sale, purchase or rental of real
          estate. We provide a complete We provide a complete service. We
          provide a complete service for the sale, purchase or rental of real
          estate. We provide a complete We provide a complete service. We
          provide a complete service for the sale, purchase or rental of real
          estate. We provide a complete We provide a complete service. We
          provide a complete service for the sale, purchase or rental of real
          estate. We provide a complete We provide a complete service. We
          provide a complete service for the sale, purchase or rental of real
          estate. We provide a complete We provide a complete service.
        </p>
      </div>
    </div>
  );
}
