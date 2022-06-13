import Link from "next/link";
import React, { useState } from "react";
import FilterInput from "../FilterInput/FilterInput";
import SliderInput from "../SliderInput/SliderInput";

export default function ListFilter() {
  const options = ["A", "B", "C"];
  return (
    <div className="ListFilter">
      <h1>Find Property</h1>

      <SliderInput />
      <FilterInput type="input" placeholder="City" />
      <FilterInput type="select" defvalue="Property Type" options={options} />
      <FilterInput type="select" defvalue="Bedroom" options={options} />
      <FilterInput type="select" defvalue="Bathroom" options={options} />
      <Link href="/" className="ListFilterCalcButton">
        Calculate
      </Link>
    </div>
  );
}
