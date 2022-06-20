import React from "react";
import Image from "next/image";
export default function FirstFeature() {
  return (
    <section className="px-6 my-20 bg-white md:pt-40 lg:pt-44 xl:pt-80 2xl:pt-96 md:my-0">
      <div className="container relative grid px-4  mx-auto sm:px-8 md:grid-cols-2 bg-[#F6F9FB]">
        <div className="py-10">
          <h6 className="text-4xl font-bold sm:text-5xl text-dark-blue ">
            Get your dream house
          </h6>
          <div className="flex flex-col items-start ">
            <p className="pt-5 sm:text-xl text-short-title ">
              We provide a complete service for the sale,
              <br className="hidden lg:block" /> purchase or rental of real
              estate.
            </p>
            <input
              type="text"
              placeholder="Your Name "
              className="w-full px-3 py-3 my-2 mt-8 border outline-none sm:hidden"
            />
            <input
              type="email"
              placeholder="Eamil "
              className="w-full px-3 py-3 my-2 border outline-none sm:hidden"
            />
            <div className="w-full mt-8 font-bold text-white sm:w-auto sm:text-lg lg:mt-16 bg-button-bg">
              <a
                href="#"
                className="block px-6 py-3 text-center sm:py-4 sm:px-10"
              >
                Request consultation
              </a>
            </div>

            <p className="text-[14px] text-center sm:text-left text-[#888888] pt-5 sm:hidden">
              Still have any question?
              <span className="text-dark-blue">Contact Us</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-6 md:relative md:pt-0">
          <Image
            src="/images/dreamHouse.png"
            width={250}
            height={250}
            alt="#"
          />
        </div>
      </div>
    </section>
  );
}
