import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";
export default function SpecsProperty() {
  const [showSlider, setShowSlider] = useState(false);
  const HandleSlider = (e) => {
    setShowSlider(true);
  };
  return (
    <div className="SpecsProperty container MeetOurTeam px-4 py-16 mx-auto bg-white sm:px-12 lg:px-4">
      <div className="left_area">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src={`/images/pro1.png`}
            layout="fill"
            objectFit="cover"
            alt=""
            onClick={HandleSlider}
          />
        </div>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src={`/images/pro2.png`}
            layout="fill"
            objectFit="cover"
            alt=""
            onClick={HandleSlider}
          />
        </div>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src={`/images/pro3.png`}
            layout="fill"
            objectFit="cover"
            alt=""
            onClick={HandleSlider}
          />
        </div>

        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Image
            src={`/images/pro1.png`}
            layout="fill"
            objectFit="cover"
            alt=""
            onClick={HandleSlider}
          />
        </div>
      </div>
      {showSlider && (
        <div className="slider_area_specs">
          <Splide
            options={{
              perPage: 1,
              gap: "1rem",
              perMove: 1,
            }}
          >
            <SplideSlide>
              <div
                style={{
                  width: "100%",
                  height: "500px",
                  position: "relative",
                }}
              >
                <Image
                  src={`/images/pro1.png`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  onClick={(e) => setShowSlider(false)}
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                style={{ width: "100%", height: "500px", position: "relative" }}
              >
                <Image
                  src={`/images/pro2.png`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  onClick={(e) => setShowSlider(false)}
                />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                style={{ width: "100%", height: "500px", position: "relative" }}
              >
                <Image
                  src={`/images/pro3.png`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  onClick={(e) => setShowSlider(false)}
                />
              </div>
            </SplideSlide>

            <SplideSlide>
              <div
                style={{ width: "100%", height: "500px", position: "relative" }}
              >
                <Image
                  src={`/images/pro1.png`}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                  onClick={(e) => setShowSlider(false)}
                />
              </div>
            </SplideSlide>
          </Splide>
        </div>
      )}

      <div className="presentation_area">
        <span>
          Rent
          <div style={{ margin: "0rem 10px" }}>
            <Image
              src={`/images/Ellipse 14.svg`}
              width={10}
              height={10}
              alt=""
            />
          </div>
          Furnished
        </span>
        <h1>The Queen Inside - Type 64</h1>
        <p>64 Missisauga Avenue - Toronto, ON</p>

        <div className="price">
          <p>$2,876</p>

          <small>50% Off</small>
        </div>

        <p>or pay only $678.98 a month with 12 months special financing</p>

        <div className="specs">
          <p>2 Bed</p>
          <p>2 Bathroom</p>
          <p>987 Sq feet</p>
        </div>

        <div className="button_wrapper">
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}
