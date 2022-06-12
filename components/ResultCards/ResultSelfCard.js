import Link from "next/link";
import React from "react";

export default function ResultSelfCard({ img }) {
  return (
    <div className="ResultSelfCard">
      <img src={img} alt="" />
      <div className="presentation">
        <h1>The Queen Inside - Type 3</h1>
        <p>123 Queen Street - Toronto, ON</p>
        <div className="bottom_area">
          <p>$989K</p>
          <Link href="/">
            <span>
              <span>Details</span>
              <img src="./images/ArrowRightBlack.svg" alt="" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
