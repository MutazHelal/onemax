import React from "react";
import FaqQuestion from "../FaqQuestion/FaqQuestion";

export default function Faq() {
  return (
    <div className="Faq w-full px-6 mx-auto lg:container xl:px-2">
      <h1>Frequently asked questions</h1>
      <p>
        We provide a complete service for the sale, purchase or rental of real
        estate. We provide a complete We provide a complete service for the
        sale.
      </p>

      <div className="faq_grid">
        <FaqQuestion faq="How can I build equity into my house?" />
        <FaqQuestion faq="How can I build equity into my house?" />
        <FaqQuestion faq="How can I build equity into my house?" />
        <FaqQuestion faq="How can I build equity into my house?" />
        <FaqQuestion faq="How can I build equity into my house?" />
        <FaqQuestion faq="How can I build equity into my house?" />
      </div>
    </div>
  );
}
