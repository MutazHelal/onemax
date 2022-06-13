import React from "react";
import FilterInput from "../FilterInput/FilterInput";
import FilterInputReverse from "../FilterInput/FilterInputReverse";

export default function SearchArea() {
  return (
    <div className="SearchArea">
      <FilterInputReverse type="input" placeholder="Search Property Name" />
      <FilterInput
        type="select"
        defvalue="Last Added"
        options={["Higest Price", "Lowest Price", "Recent"]}
      />
    </div>
  );
}
