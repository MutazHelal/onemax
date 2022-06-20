import React from "react";
import Image from "next/image";
export default function FilterInputReverse({
  type,
  placeholder = null,
  defvalue = null,
  setSearch = null,
}) {
  return (
    <div className="FilterInput FilterInputReverse">
      {type == "input" ? (
        <>
          <Image
            src="/images/MagnifyingGlass.svg"
            width={20}
            height={20}
            alt=""
          />
          <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => setSearch(e.target.value)}
          />
        </>
      ) : (
        <>
          <Image src="/images/CaretDown.svg" width={15} height={15} alt="" />

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
