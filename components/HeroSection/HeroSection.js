import React from "react";
import BuySellRent from "./BuySellRent";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="relative w-full px-5 pb-12 pt-28 xl:px-10 ">
      <div className="container mx-auto">
        <div>
          <h3 className="pt-16 text-5xl font-bold text-center sm:leading-tight sm:text-left lg:text-6xl xl:text-7xl font-mulish text-dark-blue">
            Find your best <br className="hidden sm:block" /> smart real estate
          </h3>
          <p className="py-6 text-xl text-center sm:text-left xl:text-2xl xl:py-12 text-light-blue">
            We provide a complete service for the sale,{" "}
            <br className="hidden sm:block" /> purchase or rental of real estate
          </p>
          <BuySellRent />
        </div>
      </div>

      <div className="top-0 right-0 w-full h-full cursor-pointer h-6/12 md:w-3/6 md:absolute zIndex-0 lg:w-3/6 hero_wrapper_index">
        <Image src="/images/hero.png" alt="#" layout="fill" />
      </div>
    </section>
  );
}
