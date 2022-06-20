import React from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";

// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

import Image from "next/image";

import Link from "next/link";
export default function WhoWeAre() {
  return (
    <section className="">
      <div className="present_heading container WhoWeAre px-4 py-16 mx-auto bg-white sm:px-12 lg:px-4">
        <div className="grid pb-20 lg:grid-cols-2 ">
          <h6 className="text-4xl font-bold text-center sm:text-5xl lg:text-left text-dark-blue ">
            Who we are <br className="hidden lg:block" /> and what we do
          </h6>
          <div className="flex flex-col items-center lg:items-start lg:pl-16">
            <p className="pt-5 text-center sm:text-xl text-short-title lg:text-left lg:pt-0">
              We provide a complete service for the sale, purchase or rental of
              real estate. We provide a complete
            </p>
            <div className="mt-8 text-lg font-bold text-white lg:mt-20 ">
              <Link href="/ " passHref={true}>
                <span className="block px-10 py-4 cursor-pointer bg-button-bg">
                  Get Started
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="grid_wrapper_who_we_are">
        <Splide
          options={{
            perPage: 3,
            gap: "1rem",
            perMove: 1,
            breakpoints: {
              1040: {
                perPage: 2,
              },
            },
            breakpoints: {
              870: {
                perPage: 1,
              },
            },
          }}
        >
          <SplideSlide>
            <div style={{ position: "relative", height: 400, width: "100%" }}>
              <Image src="/images/who1.png" layout="fill" alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div style={{ position: "relative", height: 400, width: "100%" }}>
              <Image src="/images/who2.png" layout="fill" alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div style={{ position: "relative", height: 400, width: "100%" }}>
              <Image src="/images/who3.png" layout="fill" alt="" />
            </div>
          </SplideSlide>

          <SplideSlide>
            <div style={{ position: "relative", height: 400, width: "100%" }}>
              <Image src="/images/who2.png" layout="fill" alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div style={{ position: "relative", height: 400, width: "100%" }}>
              <Image src="/images/who1.png" layout="fill" alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div style={{ position: "relative", height: 400, width: "100%" }}>
              <Image src="/images/who2.png" layout="fill" alt="" />
            </div>
          </SplideSlide>
          <SplideSlide>
            <div style={{ position: "relative", height: 400, width: "100%" }}>
              <Image src="/images/who3.png" layout="fill" alt="" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </section>
  );
}
