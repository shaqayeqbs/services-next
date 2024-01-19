// components/ToggleButton.js
import { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const toggle = () => {
    setToggled(!isToggled);
  };

  return (
    <button
      className={`w-16 h-8 rounded-full focus:outline-none ${
        isToggled ? "bg-primary" : "bg-gray-300"
      }`}
      onClick={toggle}
    >
      <div
        className={`w-7 h-7 rounded-full transform transition-transform ${
          isToggled ? "translate-x-8" : "translate-x-1"
        } bg-white shadow-md`}
      ></div>
    </button>
  );
};

export default ToggleButton;
