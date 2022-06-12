import React from "react";
import ListFilter from "../ListFilter/ListFilter";
import ResultsArea from "../ResultsArea/ResultsArea";

export default function AllListBody() {
  return (
    <div className="AllListBody">
      <div className="flex items-center justify-between w-full px-6 mx-auto lg:container xl:px-2">
        <ListFilter />
        <ResultsArea />
      </div>
    </div>
  );
}
