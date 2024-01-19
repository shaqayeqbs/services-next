import React from "react";

const TextInput = ({ label, placeholder, value, onChange, style }) => {
  return (
    <div className="w-full focus:outline-none">
      <label className="block mb-2 text-sm font-semibold  my-0">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`!w-full  border-mutedText px-3 !py-2  !text rounded-md !focus:bg-transparent active:outline-none focus:outline-none ${
          style ? "input-container border-1 bg-primary" : ""
        } `}
        style={{
          WebkitBoxShadow: "0 0 0 1000px transparent inset", // Remove box shadow during autofill
        }}
      />
    </div>
  );
};

export default TextInput;
