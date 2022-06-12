import React from "react";
import ResultCards from "../ResultCards/ResultCards";
import SearchArea from "../SearchArea/SearchArea";

export default function ResultsArea() {
  return (
    <div className="ResultsArea">
      <SearchArea />
      <ResultCards />
    </div>
  );
}
