import React from "react";
import Service from "./Service";
import TenantsPotential from "./TenantsPotential";
import Unit from "./Unit";
import Image from "next/image";
export default function HighestRated() {
  return (
    <section className="px-4 py-24 bg-white ">
      <div className="container grid mx-auto lg:grid-cols-2 ">
        <div>
          <h3 className="font-bold text-[36px] sm:text-[40px] text-dark-blue">
            Hightest rated agents in <br className="hidden lg:block" /> the
            country
          </h3>
          <p className="py-5 sm:text-xl text-light-blue">
            We provide a complete service for the sale, purchase{" "}
            <br className="hidden lg:block" /> or rental of real estate. We
            provide a complete
          </p>
          <Service />
        </div>
        <div className="relative flex justify-end h-full pt-28 lg:pt-0">
          <TenantsPotential />
          <div className="w-full man_rated" style={{ height: 800 }}>
            <Image src="/images/highestRated.png" layout="fill" alt="#" />
          </div>
          <div className="absolute right-0 flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 bg-button-bg">
            <Image
              src="/images/CircleWavyCheck.svg"
              width={20}
              height={20}
              alt="#"
            />
          </div>
          <Unit />
        </div>
      </div>
    </section>
  );
}
