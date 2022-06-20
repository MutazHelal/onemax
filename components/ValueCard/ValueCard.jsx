import React from "react";
import Image from "next/image";
export default function ValueCard({ img, title, desc }) {
  return (
    <section className="ValueCard">
      <Image src={img} width={70} height={70} alt="" />

      <h1>{title}</h1>
      <p>{desc}</p>
    </section>
  );
}
