import React from "react";
import ValueCard from "../ValueCard/ValueCard";

export default function OurValue() {
  return (
    <section className="container OurValue px-4 py-16 mx-auto bg-white sm:px-12 lg:px-4">
      <h1>Our Value</h1>
      <p>
        We provide a complete service for the sale, purchase or rental of real
        estate. We provide a complete We provide a complete service for the
        sale.
      </p>

      <div className="value_cards_wrappper">
        <ValueCard
          img="/images/sound.svg"
          title="Get online valuation"
          desc="  We provide a complete service for the sale, purchase or rental of real
        estate."
        />
        <ValueCard
          img="/images/sell.svg"
          title="Sell your home"
          desc="  We provide a complete service for the sale, purchase or rental of real
        estate."
        />
        <ValueCard
          img="/images/find.svg"
          title="Find a properties"
          desc="  We provide a complete service for the sale, purchase or rental of real
        estate."
        />
        <ValueCard
          img="/images/Newdevelopments.svg"
          title="New developments"
          desc="  We provide a complete service for the sale, purchase or rental of real
        estate."
        />
      </div>
    </section>
  );
}
