import React from "react";
import Image from "next/image";
export default function ProfileBox() {
  return (
    <div className="ProfileBox">
      <div className="img_area">
        <Image src="/images/agent.png" alt="" width={300} height={350} />
      </div>
      <div className="presentation_profile_area">
        <div className="top_area">
          <h1>Jawad Chaudhry</h1>
          <div className="social_area">
            <a href="#">
              <Image
                src="/images/InstagramLogo.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>
            <a href="#">
              <Image
                src="/images/LinkedinLogo.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>

            <a href="#">
              <Image
                src="/images/TiktokLogo.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>
            <a href="#">
              <Image
                src="/images/TwitterLogo.svg"
                alt=""
                width={25}
                height={25}
              />
            </a>
          </div>
        </div>
        <p>Property Management</p>

        <div className="rating">
          <div className="stars">
            <Image src="/images/Star_fill.svg" alt="" width={20} height={20} />
            <Image src="/images/Star_fill.svg" alt="" width={20} height={20} />
            <Image src="/images/Star_fill.svg" alt="" width={20} height={20} />
            <Image src="/images/Star_fill.svg" alt="" width={20} height={20} />
            <Image src="/images/Star.svg" alt="" width={20} height={20} />
          </div>
          <p>4.8 (2.8K reviews)</p>
        </div>

        <ul>
          <li>
            <Image src="/images/Envelope.svg" alt="" width={20} height={20} />
            contact@onemax.ca
          </li>
          <li>
            <Image src="/images/Envelope.svg" alt="" width={20} height={20} />
            +1 234 567 890
          </li>
        </ul>
      </div>
    </div>
  );
}
