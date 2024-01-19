import React from "react";

function Home({ color = "currentColor" }) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke={color} // Set the stroke color dynamically
    >
      <path
        d="M3.04004 9L12.04 2L21.04 9V20C21.04 20.5304 20.8293 21.0391 20.4543 21.4142C20.0792 21.7893 19.5705 22 19.04 22H5.04004C4.50961 22 4.0009 21.7893 3.62583 21.4142C3.25075 21.0391 3.04004 20.5304 3.04004 20V9Z"
        stroke={color} // Set the stroke color dynamically
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.04004 22V12H15.04V22"
        stroke={color} // Set the stroke color dynamically
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Home;
