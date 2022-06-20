import React from "react";
import Image from "next/image";
export default function Unit() {
  return (
    <div className="absolute bottom-0 flex items-center self-end p-3 bg-white w-70 sm:right-20 right:0">
      <div className="flex items-center justify-center w-12 h-12 bg-myActiveColor">
        <Image src="/images/unit.svg" width={30} height={30} alt="#" />
      </div>
      <div className="px-3">
        <p className="text-short-title">Total Rent</p>
        <h6 className="font-bold text-dark-blue text-base sm:text-[24px] md:text-[30px]">
          1,234 Unit
        </h6>
      </div>
    </div>
  );
}
