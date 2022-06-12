import React from "react";
import ContactPresentation from "../ContactPresentation/ContactPresentation";
import TouchPresentation from "../TouchPresentation/TouchPresentation";
import ContactForm from "./ContactForm";

export default function TouchArea() {
  return (
    <div className="ContactArea w-full px-6 mx-auto lg:container xl:px-2">
      <TouchPresentation />
      <ContactForm />
    </div>
  );
}
