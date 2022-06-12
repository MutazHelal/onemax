import React, { useState, useEffect } from "react";
import Link from "next/link";

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
        <Link href="/">
          <img
            src="./images/logo.png"
            alt="#"
            className="cursor-pointer w-36 sm:w-44"
          />
        </Link>
        <div className="hidden md:block">
          {navArray.map((el, i) => (
            <Link
              href={el.to}
              key={i}
              passHref={true}
              className="cursor-pointer"
            >
              <span className="text-[#727272] text-base pr-8 lg:pr-12 cursor-pointer">
                {" "}
                {el.item}
              </span>
            </Link>
          ))}{" "}
          <Link href="/contact" passHref={true} className="cursor-pointer">
            <span className="px-6 py-4 text-base text-white cursor-pointer lg:ml-3 bg-button-bg">
              {" "}
              Contact
            </span>
          </Link>
        </div>
        <div className="cursor-pointer md:hidden ">
          {sidebar ? (
            <img
              src="./images/close.svg"
              alt="#"
              className="w-7"
              onClick={() => setSidebar(false)}
            />
          ) : (
            <img
              src="./images/hamburger.svg"
              alt="#"
              className="w-9"
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
                  {" "}
                  Contact
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
