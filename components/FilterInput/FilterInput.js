import React, { useState } from "react";
import Image from "next/image";
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
          <Image src="/images/Crosshair.svg" width={15} height={15} alt="" />
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

          <Image
            src="/images/CaretDown.svg"
            width={15}
            height={15}
            alt=""
            style={{ cursor: "pointer" }}
            onClick={(e) => setDropdown(!dropdown)}
          />

          {/* <img
            src="./images/CaretDown.svg"
            style={{ cursor: "pointer" }}
           
            alt=""
          /> */}
          {dropdown && (
            <ul className="options_dropdown">
              {options &&
                options.map((EachOption, key) => (
                  <li
                    key={key}
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
