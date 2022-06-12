import React from "react";
import ResultSelfCard from "../ResultCards/ResultSelfCard";

export default function Suggestion() {
  return (
    <div className="Suggestion container  px-4 py-16 mx-auto bg-white sm:px-12 lg:px-4">
      <h1>You may also like</h1>
      <div className="cards_wrapper">
        <ResultSelfCard img="./images/card1.png" />
        <ResultSelfCard img="./images/card2.png" />
        <ResultSelfCard img="./images/card3.png" />
      </div>

      <div className="button_wrapper">
        <button>
          Explore All Listing
          <img src="./images/ArrowRight.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
