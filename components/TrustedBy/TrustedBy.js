import React from "react";
import Image from "next/image";

export default function TrustedBy() {
  const partner = [
    "/images/IFTTT Logo.svg",
    "/images/Amazon Logo.svg",
    "/images/google.svg",
    "/images/PayPal Logo.svg",
    "/images/airbnt.svg",
  ];
  return (
    <div className="bg-section-bg">
      <div className="container px-4 py-12 mx-auto ">
        <h3 className="font-bold text-dark-blue text-[40px] text-center ">
          TrustedBy
        </h3>
        <p className="text-xl text-center text-light-blue pb-7">
          More than 15,000+ brand trust homelun
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5">
          {partner.map((el, i) => (
            <div
              key={i}
              className={`flex items-center justify-center  px-4 py-4 ${
                i === 4 && "col-span-2 md:col-span-1"
              }`}
            >
              <div
                className="block"
                style={{ position: "relative", height: 200, width: "60%" }}
              >
                <Image src={el} layout="fill" alt="#" />
              </div>

              {/* <img src={el} alt="#" className="block w-32 sm:w-auto "></img> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
