import React from "react";

export default function ContactForm() {
  return (
    <div className="ContactForm TouchForm">
      <h1>Take a Tour</h1>
      <p>
        Schedule your showing today. Leave your contact, and we’ll get back to
        you as soon as possible.
      </p>
      <div className="input_grid">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button>Submit</button>
      </div>
    </div>
  );
}
