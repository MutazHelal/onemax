import React from "react";
import ContactPresentation from "../ContactPresentation/ContactPresentation";
import ContactForm from "./ContactForm";

export default function ContactArea() {
  return (
    <div className="ContactArea w-full px-6 mx-auto lg:container xl:px-2">
      <ContactPresentation />
      <ContactForm />
    </div>
  );
}
