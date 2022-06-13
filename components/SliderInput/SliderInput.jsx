import React, { useState } from "react";

export default function SliderInput() {
  const [range, setrange] = useState(10);
  return (
    <div className="SliderInput ">
      <input
        type="range"
        min={10}
        max={100}
        onChange={(e) => {
          setrange(e.target.value);
          console.log(e.target.value);
        }}
      />
      <input type="text" value={range} readOnly />
    </div>
  );
}
