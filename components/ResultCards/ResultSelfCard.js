import Link from "next/link";
import React from "react";

export default function ResultSelfCard({ img }) {
  return (
    <div className="ResultSelfCard">
      <img src={img} alt="" />
      <div className="presentation">
        <h1>123 Queen Street - Toronto, ON</h1>
        <div className="bottom_area">
          <p>$989K</p>
          <Link href="/listingSpecs">
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
