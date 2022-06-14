import React, { useState } from "react";

export default function SliderInput() {
  const [range, setrange] = useState(135);
  return (
    <div className="SliderInput">
      <div className="range_number">
        <p>$135</p>
        <p>$335</p>
      </div>
      <input
        type="range"
        min={135}
        max={335}
        value={range}
        onChange={(e) => {
          setrange(e.target.value);
          console.log(e.target.value);
        }}
      />
      <input type="text" value={range} readOnly />
    </div>
  );
}
