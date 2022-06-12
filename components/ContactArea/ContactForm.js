import React from "react";

export default function ContactForm() {
  return (
    <div className="ContactForm">
      <h1>Contact Us</h1>
      <div className="input_grid">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}
