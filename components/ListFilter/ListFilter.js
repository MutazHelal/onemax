import React from "react";
import FilterInput from "../FilterInput/FilterInput";

export default function ListFilter() {
  return (
    <div className="ListFilter">
      <h1>Find Property</h1>
      <FilterInput type="input" placeholder="City" />
      <FilterInput type="select" defvalue="Property Type" />
      <FilterInput type="select" defvalue="Bedroom" />
      <FilterInput type="select" defvalue="Bathroom" />
      <FilterInput type="select" defvalue="By Square Feet" />
    </div>
  );
}
