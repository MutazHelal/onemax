import React, { useState } from "react";

export default function PropertyList() {
  const [value, setValue] = useState(0);
  const propertyCategory = ["Residential", "Commercial", "Apartment"];

  const propertyDetails = [
    [
      {
        img: "./images/building1.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
      {
        img: "./images/building2.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
      {
        img: "./images/building3.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
    ],
    [
      {
        img: "./images/building1.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
      {
        img: "./images/building2.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
      {
        img: "./images/building3.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
    ],
    [
      {
        img: "./images/building1.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
      {
        img: "./images/building2.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
      {
        img: "./images/building3.png",
        title: "The Queen Inside - Type 3",
        text: "123 Queen Street - Toronto, ON",
        price: "989",
        detailsTo: "",
      },
    ],
  ];
  return (
    <section>
      <div className="flex flex-col justify-center py-16 lg:justify-between lg:flex-row ">
        <div className="flex flex-col justify-center sm:flex-row lg:justify-start">
          {propertyCategory.map((el, i) => (
            <div
              key={i}
              onClick={() => setValue(i)}
              className={`px-10 py-3 flex items-center justify-center  sm:mr-5 text-lg font-semibold cursor-pointer  ${
                value === i
                  ? "text-white bg-myActiveColor"
                  : "text-short-title border"
              }`}
            >
              {el}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-5 lg:mt-0 lg:justify-end">
          <a href="" className="flex items-center p-4 py-3 bg-button-bg">
            <span className="mr-3 text-lg text-white">Explore All Listing</span>{" "}
            <img src="./images/ArrowRight.svg" alt="#" className="w-6" />
          </a>
        </div>
      </div>
      <div className="grid gap-8 px-6 my-padding sm:px-0 sm:grid-cols-2 lg:grid-cols-3">
        {propertyDetails[value].map((el, i) => (
          <div
            key={i}
            className={`${
              i === 2 ? "sm:col-span-2 lg:col-span-1" : ""
            } d-flex justify-center`}
          >
            <div className={i === 2 ? "sm:w-6/12 lg:w-full mx-auto" : ""}>
              <img src={el.img} alt="#" className="w-full" />
              <div className="p-5 bg-white">
                <h4 className="text-lg font-bold md:text-xl xl:text-2xl text-dark-blue">
                  {el.title}
                </h4>
                <p className="py-2 text-sm lg:py-3 md:text-base xl:text-lg text-short-title">
                  123 Queen Street - Toronto, ON
                </p>
                <div className="flex justify-between">
                  <span className="text-xl font-bold md:text-2xl xl:text-3xl text-activeColor text-myActiveColor">
                    ${el.price}K
                  </span>
                  <a href={el.detailsTo} className="flex items-center">
                    <span className="mr-2 text-base xl:text-lg text-dark-blue">
                      Details
                    </span>{" "}
                    <img src="./images/ArrowRightBlack.svg" alt="#" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
