import React, { useState } from "react";
var numeral = require("numeral");
export default function SliderInput() {
  const [range, setrange] = useState("144,000");
  const [rangeSelf, setrangerangeSelf] = useState(144000);
  return (
    <div className="SliderInput">
      <div className="range_number">
        <p>$144,000</p>
        <p>$300,000</p>
      </div>
      <input
        type="range"
        min={144000}
        max={300000}
        value={rangeSelf}
        onChange={(e) => {
          let Value = e.target.value;
          var myNumeral = numeral(Value).format("0,0");
          setrangerangeSelf(Value);
          // var AfterNumvalue = myNumeral.value();

          setrange(myNumeral);
          console.log(e.target.value);
        }}
      />
      <input type="text" value={range} readOnly />
    </div>
  );
}
