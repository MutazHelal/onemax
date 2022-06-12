import Link from "next/link";
import React from "react";

export default function FaqQuestion({ faq }) {
  return (
    <div className="FaqQuestion flex items-center justify-between">
      <h1>{faq}</h1>
      <Link href="/">
        <img src="./images/ArrowRightBlack.svg" alt="" />
      </Link>
    </div>
  );
}
