import React from "react";
import AboutAgent from "../AboutAgent/AboutAgent";
import ProfileBox from "../ProfileBox/ProfileBox";

export default function AgentProfileContent() {
  return (
    <div className="AllListBody AgentProfileContent">
      <div className="flex items-center justify-between w-full px-6 mx-auto lg:container xl:px-2">
        <ProfileBox />
        <AboutAgent />
      </div>
    </div>
  );
}
