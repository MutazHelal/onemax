import React from "react";
import Image from "next/image";
export default function Testimonial() {
  const textimonialArray = [
    {
      img: "/images/profile1.png",
      rating: 3,
      title: "Amazing!",
      text: "Since I move to the new home with Homelun, I feel like this is my dream home. I would like to live here in the next couple of year.",
    },
    {
      img: "/images/profile2.png",
      rating: 3,
      title: "Amazing!",
      text: "Since I move to the new home with Homelun, I feel like this is my dream home. I would like to live here in the next couple of year.",
    },
    {
      img: "/images/profile3.png",
      rating: 3,
      title: "Amazing!",
      text: "Since I move to the new home with Homelun, I feel like this is my dream home. I would like to live here in the next couple of year.",
    },
  ];

  return (
    <div className="relative px-6 py-16 bg-white">
      <div className="absolute w-8/12 h-full mx-auto transform -translate-x-1/2 -translate-y-1/2 lg:h-110 bg-section-bg top-1/2 left-1/2 "></div>
      <div className="container relative z-10 grid gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 ">
        {textimonialArray.map((el, i) => (
          <div
            key={i}
            className={`flex justify-center 
            ${i === 2 && "sm:col-span-2 lg:col-span-1"}`}
          >
            <div
              className={`p-8 bg-white box-shadow
              } ${i === 2 ? "w-full sm:w-6/12 lg:w-full" : "w-full"} `}
            >
              <div className="flex justify-between ">
                <Image src={el.img} alt="#" width={70} height={70} />

                <div className="flex items-center">
                  {new Array(3)
                    .fill("/images/activeStar.svg")
                    .map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt="#"
                        width={20}
                        height={20}
                      />
                    ))}
                  {new Array(5 - el.rating)
                    .fill("/images/star.svg")
                    .map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt="#"
                        width={20}
                        height={20}
                      />
                    ))}
                </div>
              </div>
              <div className="relative flex items-center justify-start pt-4">
                <Image
                  src="/images/quatation.svg"
                  alt="#"
                  width={80}
                  height={80}
                />

                <p className="absolute pl-1 text-lg font-semibold text-dark-blue ">
                  {el.title}
                </p>
              </div>

              <p className="text-base text-short-title">{el.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
