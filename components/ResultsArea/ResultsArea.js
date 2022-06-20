import React, { useState } from "react";
import ResultCards from "../ResultCards/ResultCards";
import SearchArea from "../SearchArea/SearchArea";

export default function ResultsArea() {
  const [search, setSearch] = useState("");
  return (
    <div className="ResultsArea">
      <SearchArea setSearch={setSearch} />
      <ResultCards search={search} />
    </div>
  );
}
