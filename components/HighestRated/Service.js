import React, { useState } from "react";

export default function Service() {
  const [value, setValue] = useState(0);
  const serviceArray = [
    {
      title: "Find excellent deals",
      text: "We provide a complete service for the sale, purchase or rental",
    },
    {
      title: "Property insurance",
      text: "We provide a complete service for the sale, purchase or rental",
    },
    {
      title: "Frendly host",
      text: "We provide a complete service for the sale, purchase or rental",
    },
    {
      title: "24 hours consultation",
      text: "We provide a complete service for the sale, purchase or rental",
    },
    {
      title: "Fast respone",
      text: "We provide a complete service for the sale, purchase or rental",
    },
    {
      title: "Company professional",
      text: "We provide a complete service for the sale, purchase or rental",
    },
  ];
  return (
    <section className="grid items-center pt-10 sm:grid-cols-2">
      {serviceArray.map((el, i) => (
        <div
          onClick={() => setValue(i)}
          key={i}
          className={`flex flex-col opacity-50		 justify-center px-4 my-4 border-l-4 cursor-pointer border-myActiveColor ${
            value !== i && "h-10"
          } ${value === i && "opacity-100"} `}
        >
          <h4 className="text-base font-semibold sm:text-xl text-dark-blue">
            {el.title}
          </h4>
          {value === i && <p className="pt-2 text-light-blue">{el.text}</p>}
        </div>
      ))}
    </section>
  );
}
