import React from "react";

export default function FilterInputReverse({
  type,
  placeholder = null,
  defvalue = null,
}) {
  return (
    <div className="FilterInput FilterInputReverse">
      {type == "input" ? (
        <>
          <img src="./images/MagnifyingGlass.svg" alt="" />
          <input type="text" placeholder={placeholder} />
        </>
      ) : (
        <>
          <img src="./images/CaretDown.svg" alt="" />
          <select>
            <option value={defvalue} selected>
              {defvalue}
            </option>
          </select>
        </>
      )}
    </div>
  );
}
