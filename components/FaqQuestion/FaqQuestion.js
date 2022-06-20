import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function FaqQuestion({ faq }) {
  return (
    <div className="FaqQuestion flex items-center justify-between">
      <h1>{faq}</h1>
      <Link href="/" passHref>
        <Image
          src="/images/ArrowRightBlack.svg"
          width={20}
          height={20}
          alt=""
        />
      </Link>
    </div>
  );
}
