import React from "react";
import Image from "next/image";
export default function GetYourDreamHouse() {
  return (
    <section className="px-6 my-20 bg-white md:pt-40 lg:pt-44 xl:pt-80 2xl:pt-96 md:my-0">
      <div className="container relative grid px-4  mx-auto sm:px-8 md:grid-cols-2 bg-[#F6F9FB]">
        <div className="py-10">
          <h6 className="text-4xl font-bold sm:text-5xl text-dark-blue ">
            Be the first to know when we drop a new feature or product
          </h6>
          <div className="flex flex-col items-start ">
            <input
              type="text"
              placeholder="Your Name "
              className="w-full px-3 py-3 my-2 mt-8 border outline-none "
            />
            <input
              type="email"
              placeholder="Eamil "
              className="w-full px-3 py-3 my-2 border outline-none "
            />
            <div
              className="w-full mt-8 font-bold text-white sm:w-auto sm:text-lg lg:mt-16 bg-button-bg"
              style={{ width: "100%" }}
            >
              <a
                href="#"
                className="block px-6 py-3 text-center sm:py-4 sm:px-10"
              >
                Submit
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
            alt="#"
            width={250}
            height={250}
            className="bottom-0 w-8/12 sm:w-7/12 md:w-9/12 md:absolute lg:w-7/12 xl:w-7/12 right-10"
          />
        </div>
      </div>
    </section>
  );
}
