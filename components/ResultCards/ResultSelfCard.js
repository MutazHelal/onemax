import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ResultSelfCard({ img, price, address }) {
  return (
    <div className="ResultSelfCard">
      <div style={{ width: "100%", height: "300px", position: "relative" }}>
        <Image src={img} layout="fill" alt="" />
      </div>

      <div className="presentation">
        <h1>{address}</h1>
        <div className="bottom_area">
          <p>{price}</p>
          <Link href="/listingSpecs" passHref>
            <span>
              <span>Details</span>
              <Image
                src="/images/ArrowRightBlack.svg"
                width={20}
                height={20}
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
