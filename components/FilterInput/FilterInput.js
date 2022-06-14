import React, { useState } from "react";

export default function FilterInput({
  type,
  placeholder = null,
  defvalue = null,
  options = null,
}) {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(defvalue);

  const [value, setValue] = useState(0);

  return (
    <div className="FilterInput">
      {type == "input" ? (
        <>
          <input type="text" placeholder={placeholder} />
          <img src="./images/Crosshair.svg" alt="" />
        </>
      ) : (
        <>
          <select style={{ pointerEvents: "none" }}>
            <option value={dropdownValue} defaultValue>
              {dropdownValue}
            </option>
            {options &&
              options.map((EachOption) => (
                <option value={EachOption} key={EachOption}>
                  {EachOption}
                </option>
              ))}
          </select>
          <img
            src="./images/CaretDown.svg"
            style={{ cursor: "pointer" }}
            onClick={(e) => setDropdown(!dropdown)}
            alt=""
          />
          {dropdown && (
            <ul className="options_dropdown">
              {options &&
                options.map((EachOption) => (
                  <li
                    onClick={(e) => {
                      setDropdownValue(EachOption);
                      setDropdown(!dropdown);
                    }}
                  >
                    {EachOption}
                  </li>
                ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
