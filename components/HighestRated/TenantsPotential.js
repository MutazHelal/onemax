import React from "react";

export default function TenantsPotential() {
  const dataArray = [
    { shortTitle: "JC", title: "James Cooper", text: "Home seller -  CA" },
    { shortTitle: "JC", title: "James Cooper", text: "Home seller -  CA" },
  ];
  return (
    <div className="absolute left-0 p-2 bg-white top-20 sm:p-5 sm:top-35 md:top-40 lg:top-65 xl:top-50 2xl:top-30 box-shadow">
      <h5 className="font-bold sm:text-lg text-dark-blue">
        Tenants Potential <span>({dataArray.length})</span>
      </h5>
      {dataArray.map((el, i) => (
        <div key={i} className="flex pt-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-full sm:w-12 sm:h-12 bg-section-bg">
            <span className="text-sm sm:text-xl text-short-title">
              {" "}
              {el.shortTitle}
            </span>
          </div>
          <div className="px-1 sm:px-3">
            <h6 className="text-sm font-semibold sm:text-base text-dark-blue">
              {el.title}
            </h6>
            <p className="text-sm sm:text-base text-short-title">{el.text}</p>
          </div>
          <div className="flex items-center justify-center w-4 h-4 rounded-full sm:w-6 sm:h-6 bg-myActiveColor ">
            <img src="./images/Check.svg" alt="#" className="w-3 sm:w-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
