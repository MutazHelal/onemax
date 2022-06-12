import React from "react";

export default function AboutSpecs() {
  return (
    <div className="AboutAgent container  px-4 py-16 mx-auto bg-white sm:px-12 lg:px-4">
      <div className="buttons_wrapper">
        <button className="active">About me</button>
        <button>Location</button>
      </div>

      <div className="content_about">
        <h1>About Property</h1>
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

      <div className="content_about">
        <h1 style={{ marginBottom: 20 }}>Property Amenities</h1>
        <h1 style={{ marginBottom: 20 }} className="sub_heading">
          UNIT
        </h1>
        <div className="buttons_wrapper">
          <button>Air Conditioning</button>
          <button>Fireplace</button>
          <button>Dishwasher</button>
          <button>Balcony</button>
          <button>Cooling Fan</button>
        </div>

        <h1 style={{ marginBottom: 20, marginTop: 20 }} className="sub_heading">
          BUILDING
        </h1>
        <div className="buttons_wrapper">
          <button>Business Center</button>
          <button>Outdoor Space</button>
          <button>Gym</button>
          <button>Swimming Pool</button>
          <button>Free WiFi</button>
        </div>
      </div>
    </div>
  );
}
