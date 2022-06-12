import React from "react";

export default function ValueCard({ img, title, desc }) {
  return (
    <section className="ValueCard">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{desc}</p>
    </section>
  );
}
