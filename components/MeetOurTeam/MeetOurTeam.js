import React from "react";
import AgentList from "./AgentList";
import Link from "next/link";
export default function MeetOurTeam() {
  return (
    <section className="container MeetOurTeam px-4 py-16 mx-auto bg-white sm:px-12 lg:px-4">
      <div className="grid pb-20 lg:grid-cols-2 ">
        <h6 className="text-4xl font-bold text-center sm:text-5xl lg:text-left text-dark-blue ">
          Meet our team at <br className="hidden lg:block" /> your service
        </h6>
        <div className="flex flex-col items-center lg:items-start lg:pl-16">
          <p className="pt-5 text-center sm:text-xl text-short-title lg:text-left lg:pt-0">
            We provide a complete service for the sale, purchase or rental of
            real estate. We provide a complete We provide a complete service.
          </p>
          <div className="mt-8 text-lg font-bold text-white lg:mt-20 ">
            <Link href="/ " passHref={true}>
              <span className="block px-10 py-4 cursor-pointer bg-button-bg">
                See All
              </span>
            </Link>
          </div>
        </div>
      </div>
      <AgentList />
    </section>
  );
}
