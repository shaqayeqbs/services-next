import React from "react";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const PasswordInput = ({
  label,
  placeholder,
  value,
  onChange,
  showPassword,
  onTogglePassword,
}) => (
  <div className=" w-full ">
    <label className="block text-sm font-semibold ">{label}</label>
    <div className="relative flex  items-center">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full  p-2 px-0 m-auto rounded-md focus:outline-none   "
      />
      <span
        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
        onClick={onTogglePassword}
      >
        {showPassword ? <EyeSlash size={20} /> : <Eye size={20} />}
      </span>
    </div>
  </div>
);
export default PasswordInput;
