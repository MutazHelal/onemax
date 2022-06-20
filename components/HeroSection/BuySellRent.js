import React, { useState } from "react";
import Image from "next/image";
export default function BuySellRent() {
  const [dropdown, setDropdown] = useState();
  const [dropdownValue, setDropdownValue] = useState(null);
  const dataArray = ["Buy", "Sell", "Rent"];
  const infoArray = [
    [
      {
        title: "Locations",
        tagline: "Select your city",
        icon: "/images/Crosshair.svg",
      },
      {
        title: "Property Type",
        tagline: "Choose Property Type",
        icon: "/images/CaretDown.svg",
        dropdown: ["A", "B", "C", "D", "E"],
      },
      {
        title: "Locations",
        tagline: "Choose a range",
      },
    ],
    [
      {
        title: "Locations",
        tagline: "Select your city",
        icon: "/images/Crosshair.svg",
      },
      {
        title: "Property Type",
        tagline: "Choose Property Type",
        icon: "/images/CaretDown.svg",
        dropdown: ["A", "B", "C", "D", "E"],
      },
      {
        title: "Locations",
        tagline: "Choose a range",
      },
    ],
    [
      {
        title: "Locations",
        tagline: "Select your city",
        icon: "/images/Crosshair.svg",
      },
      {
        title: "Property Type",
        tagline: "Choose Property Type",
        icon: "/images/CaretDown.svg",
        dropdown: ["A", "B", "C", "D", "E"],
      },
      {
        title: "Locations",
        tagline: "Choose a range",
      },
    ],
  ];
  const [value, setValue] = useState(0);
  return (
    <div className="w-full py-8 pt-4 xl:pt-10">
      <div className="flex flex-col items-start justify-center ">
        <div className="flex items-center py-5 bg-white">
          {dataArray.map((el, i) => (
            <div
              key={i}
              onClick={() => setValue(i)}
              className={`${i == 1 && "border-x-1"} 
               
                px-6 lg:px-16 border-x-border-color text-text-gray cursor-pointer text-sm sm:text-base font-bold`}
            >
              <div
                className={`w-full p-3 ${
                  value === i &&
                  "text-myActiveColor  h-full  border-b-2 border-myActiveColor "
                }`}
              >
                <span className="">{el}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="items-center justify-between w-full grid-cols-2 px-2 py-4 bg-white sm:px-4 lg:px-10 md:grid myGrid md:grid-cols-4 xl:w-10/12 ">
          {infoArray[value].map((el, i) => (
            <div
              key={i}
              className={` ${
                i === 0
                  ? "justify-start"
                  : i === 2
                  ? "justify-start md:justify-end"
                  : "justify-end"
              } flex `}
            >
              <div>
                <p className="text-xs font-semibold sm:text-base text-dark-blue">
                  {el.title}
                </p>
                <div className="relative flex items-center justify-between">
                  <p
                    className={`py-4 px-1 md:pr-3 text-text-gray text-xs sm:text-base ${
                      el.dropdown && "my-min-width sm:my-minsm-width"
                    }`}
                  >
                    {!el.dropdown
                      ? el.tagline
                      : dropdownValue
                      ? dropdownValue
                      : el.tagline}
                  </p>
                  {el.icon && (
                    <Image
                      src={el.icon}
                      className="cursor-pointer"
                      alt="#"
                      width={20}
                      height={20}
                      onClick={() => {
                        if (el.dropdown) {
                          setDropdown((prev) => !prev);
                        }
                      }}
                    />
                  )}
                  {el.dropdown && dropdown && (
                    <div className="absolute w-full p-3 bg-white top-12 text-text-gray ">
                      {el.dropdown.map((el, i) => (
                        <p
                          key={i}
                          className="py-2 text-sm cursor-pointer sm:text-base"
                          onClick={() => setDropdownValue(el)}
                        >
                          {el}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          <div className="flex justify-end w-full col-span-full md:col-auto">
            <div className="flex items-center justify-center w-full h-12 md:h-16 bg-button-bg md:w-16">
              <Image src="/images/search.svg" alt="#" width={20} height={20} />

              <span className="pl-4 font-semibold text-white md:hidden">
                Search
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
