import React from "react";
import Link from "next/link";

export default function Recomended() {
  return (
    <section className="container px-4 py-16 mx-auto bg-white sm:px-12 4">
      {" "}
      <div className="pb-20 ">
        <h6 className="text-4xl font-bold text-center sm:text-5xl text-dark-blue ">
          98% of residents recommend us
        </h6>
        <div className="flex flex-col items-center ">
          <p className="pt-5 text-center sm:text-xl text-short-title ">
            We provide a complete service for the sale, purchase or rental of
            real estate. We <br /> provide a complete We provide a complete
            service.
          </p>
          <div className="mt-8 text-lg font-bold text-white lg:mt-20 ">
            <Link href="/ " passHref={true}>
              <span className="block px-10 py-4 cursor-pointer bg-button-bg">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
