import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  const socialIcons = [
    {
      icon: "/images/activeInstagram.svg",
      to: "https://www.instagram.com/",
    },
    { icon: "/images/activeLinkedin.svg", to: "https://www.linkedin.com" },
    { icon: "/images/activeTiktok.svg", to: "https://www tiktok.com/" },
    { icon: "/images/activeTwitter.svg", to: "https://twitter.com/" },
  ];
  const featureArray = [
    { item: "Home", to: "/" },
    { item: "Buy", to: "/buy" },
    { item: "Sell", to: "/sell" },
    { item: "About Us", to: "/about" },
    { item: "Contact", to: "/contact" },
  ];
  const information = [
    { item: "Agents", to: "/" },
    { item: "Agents Profile", to: "/" },
    { item: "Listings", to: "/" },
  ];
  const popularSearch = [
    {
      item: "Popular Search",
      to: "/",
    },
    {
      item: "Office for rent",
      to: "/",
    },
    {
      item: "Office for buy",
      to: "/",
    },
  ];
  return (
    <section
      className="bg-[#2C3C4D] py-16 px-6 margin-top
    "
    >
      <div className="container grid grid-cols-2 gap-8 pt-16 mx-auto md:pt-48 md:grid-cols-3 xl:grid-cols-5">
        <div className="flex col-span-2 xl:justify-center md:col-span-1">
          <div>
            <h5 className="py-2 text-xl font-bold text-white 2xl:text-2xl">
              One Max.
            </h5>
            <p className="text-[#C1C1C1] py-2">Toronto, ON</p>
            <p className="text-[#C1C1C1] py-2">Call us : 123-456-7890</p>
            <div className="flex items-center pt-4 md:pt-10">
              {socialIcons.map((el, i) => (
                <a href={el.to} key={i} target="_blank" rel="noreferrer">
                  <div className="w-8 mr-5">
                    <Image src={el.icon} alt="#" width={30} height={30} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex xl:justify-center">
          <div>
            <h5 className="py-2 text-xl font-bold text-white 2xl:text-2xl">
              Features
            </h5>
            {featureArray.map((el, i) => (
              <Link href={el.to} key={i} passHref={true}>
                <p className="text-[#C1C1C1] py-2">{el.item}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex xl:justify-center">
          <div>
            <h5 className="py-2 text-xl font-bold text-white 2xl:text-2xl">
              Information
            </h5>
            {information.map((el, i) => (
              <Link href={el.to} key={i} passHref={true}>
                <p className="text-[#C1C1C1] py-2">{el.item}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="grid col-span-2 md:grid-cols-3 xl:flex xl:justify-between sm:gap-8 xl:gap-0 md:col-span-3 xl:col-span-2">
          <div className="flex xl:justify-center">
            <div>
              <h5 className="py-2 text-xl font-bold text-white 2xl:text-2xl">
                Popular Search
              </h5>
              {popularSearch.map((el, i) => (
                <Link href={el.to} key={i} passHref={true}>
                  <p className="text-[#C1C1C1] py-2">{el.item}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex pt-6 xl:justify-center sm:pt-0">
            <div className="flex flex-col items-start">
              {" "}
              <h5 className="py-2 text-xl font-bold text-white 2xl:text-2xl">
                Subscribe
              </h5>
              <p className="text-[#C1C1C1] py-2">
                Subscribe to get the latest news from us
              </p>
              <div className="flex px-4 py-2 mt-3 bg-white">
                <input
                  type="email"
                  placeholder="Email address "
                  className="outline-none"
                />
                <div className="flex items-center justify-center rounded-full w-7 h-7 bg-myActiveColor">
                  <Image
                    src="/images/arrowRight.svg"
                    alt="#"
                    className="w-4"
                    width={15}
                    height={15}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-16 pb-2 text-center text-[#c1c1c1b3]">
        Copyright © 2022. Crafted with love
      </p>
    </section>
  );
}
