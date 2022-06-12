import React from "react";

export default function FilterInput({
  type,
  placeholder = null,
  defvalue = null,
}) {
  return (
    <div className="FilterInput">
      {type == "input" ? (
        <>
          <input type="text" placeholder={placeholder} />
          <img src="./images/Crosshair.svg" alt="" />
        </>
      ) : (
        <>
          <select>
            <option value={defvalue} selected>
              {defvalue}
            </option>
          </select>
          <img src="./images/CaretDown.svg" alt="" />
        </>
      )}
    </div>
  );
}
