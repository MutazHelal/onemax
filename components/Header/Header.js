import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const navArray = [
    { item: "Home", to: "/" },
    { item: "About Us", to: "/aboutus" },
    { item: "Listings", to: "/listing" },
    { item: "Agents", to: "/AgentProfile" },
    { item: "Mortgage Calculator", to: "/mortgagecalculator" },
  ];
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <div
      className={`fixed z-50 flex items-center w-full py-4  ${
        (navbar || sidebar) && "bg-white "
      } ${sidebar && "pb-7"} `}
    >
      <div className="flex items-center justify-between w-full px-6 mx-auto lg:container xl:px-2">
        <Link href="/" passHref>
          <div
            className="cursor-pointer w-36 logo"
            style={{ position: "relative" }}
          >
            <Image src="/images/logo.png" alt="#" layout="fill" />
          </div>
        </Link>
        <div className="hidden md:block header_nav">
          {navArray.map((el, i) => (
            <Link
              href={el.to}
              key={i}
              passHref={true}
              className="cursor-pointer"
            >
              <span className="text-[#727272] text-base pr-8 lg:pr-12 cursor-pointer">
                {el.item}
              </span>
            </Link>
          ))}{" "}
          <Link href="/contact" passHref={true} className="cursor-pointer">
            <span className="px-6 py-4 text-base text-white cursor-pointer lg:ml-3 bg-button-bg">
              (905) 560 1629
            </span>
          </Link>
        </div>
        <div className="cursor-pointer md:hidden ">
          {sidebar ? (
            <Image
              src="/images/close.svg"
              alt="#"
              width={30}
              height={30}
              onClick={() => setSidebar(false)}
            />
          ) : (
            <Image
              src="/images/hamburger.svg"
              alt="#"
              width={30}
              height={30}
              onClick={() => setSidebar(true)}
            />
          )}
        </div>

        {sidebar && (
          <div className="absolute z-10 w-full h-screen transform -translate-x-1/2 bg-white top-24 left-1/2">
            <div className="flex flex-col items-center w-full h-full pt-2 ">
              {navArray.map((el, i) => (
                <Link
                  href={el.to}
                  key={i}
                  passHref={true}
                  className="cursor-pointer"
                  onClick={() => sidebar(false)}
                >
                  <span className="text-[#727272] text-base py-3 cursor-pointer">
                    {" "}
                    {el.item}
                  </span>
                </Link>
              ))}{" "}
              <Link
                href="/contact"
                passHref={true}
                className="cursor-pointer"
                onClick={() => sidebar(false)}
              >
                <span className="px-6 py-3 mt-4 text-base text-white bg-button-bg">
                  (905) 560 1629
                </span>
              </Link>
            </div>
            {/* <img
              src="./images/close.svg"
              alt="#"
              className="absolute cursor-pointer top-7 right-7"
              onClick={() => setSidebar(false)}
            /> */}
          </div>
        )}
      </div>
    </div>
  );
}
