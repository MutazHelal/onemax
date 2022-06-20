import React from "react";
import Image from "next/image";
export default function AgentList() {
  const dataArray = [
    {
      img: "/images/agent1.png",
      name: "One Max Agent",
      position: "Property Expert",
      socialLinks: [
        "https://www.instagram.com/",
        "https://www.linkedin.com",
        "https://www tiktok.com/",
        "https://twitter.com/",
      ],
    },
    {
      img: "/images/agent2.png",
      name: "One Max Agent",
      position: "Property Expert",
      socialLinks: [
        "https://www.instagram.com/",
        "https://www.linkedin.com",
        "https://www tiktok.com/",
        "https://twitter.com/",
      ],
    },
    {
      img: "/images/agent3.png",
      name: "One Max Agent",
      position: "Property Expert",
      socialLinks: [
        "https://www.instagram.com/",
        "https://www.linkedin.com",
        "https://www tiktok.com/",
        "https://twitter.com/",
      ],
    },
  ];
  const socialIcons = [
    "/images/InstagramLogo.svg",
    "/images/LinkedinLogo.svg",
    "/images/TiktokLogo.svg",
    "/images/TwitterLogo.svg",
  ];
  return (
    <div className="grid gap-8 px-6 sm:px-0 sm:grid-cols-2 lg:grid-cols-3">
      {dataArray.map((el, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center border mt-44 ${
            index === 2 && "sm:col-span-2 lg:col-span-1 "
          }  justify-center`}
        >
          <div
            className={`absolute flex justify-center w-4/5 agentList-top bg-section-bg d-flex `}
          >
            <div style={{ position: "relative", height: 320, width: "70%" }}>
              <Image src={el.img} layout="fill" alt="#" />
            </div>
          </div>
          <div className="px-3 py-10 pt-56">
            <h5 className="text-2xl font-semibold text-center text-dark-blue">
              One Max Agent
            </h5>
            <p className="py-4 text-lg text-center text-short-title">
              Property Expert
            </p>
            <div className="flex items-center agent_list_social_wrapper">
              {socialIcons.map((element, i) => (
                <a
                  href={el.socialLinks[i]}
                  key={i}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image src={element} width={25} height={25} alt="#" />
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
