import React from "react";

function Plus({ color }) {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11.5" cy="11.5" r="11" fill="#FFFDFD" stroke={color} />
      <path
        d="M15.2765 12.4463H12.2765V15.4228H10.7296V12.4463H7.7296V10.9345H10.7296V7.95798H12.2765V10.9345H15.2765V12.4463Z"
        fill={color}
      />
    </svg>
  );
}

export default Plus;
