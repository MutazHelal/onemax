import React from "react";
import PropertyList from "./PropertyList";

export default function LatestProperty() {
  return (
    <section className="px-6 py-16 mx-auto my-16 sm:px-12 lg:px-12 lg:container bg-section-bg">
      <div className="grid pb-20 border-b lg:grid-cols-2 ">
        <h6 className="text-4xl font-bold text-center sm:text-5xl lg:text-left text-dark-blue">
          Latest property listings
        </h6>
        <p className="pt-5 text-center sm:text-xl text-short-title lg:text-left lg:pt-0">
          We provide a complete service for the sale, purchase or rental of real
          estate. We provide a complete We provide a complete service for the
          sale.
        </p>
      </div>
      <PropertyList />
    </section>
  );
}
