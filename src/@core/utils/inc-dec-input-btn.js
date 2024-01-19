import React from "react";

function IncDecInputBtn({ value, onIncrease, onDecrease, onChange, store }) {
  console.log(value);
  return (
    <div className="flex items-center">
      <button
        className={`${
          store ? "px-3 font-extrabold" : "rounded-full bg-myGray py-1 px-3"
        }`}
        onClick={onDecrease}
      >
        -
      </button>
      <input
        type="number"
        readOnly
        value={value}
        onChange={onChange}
        className={`${
          store
            ? "w-10 bg-white text-primary text-center p-0 font-bold"
            : "mx-2 p-0 w-10 font-bold bg-transparent text-center h-min"
        }`}
      />
      <button
        className={`${
          store ? "px-3 font-extrabold" : "rounded-full bg-myGray py-1 px-3"
        }`}
        onClick={onIncrease}
      >
        +
      </button>
    </div>
  );
}

export default IncDecInputBtn;
