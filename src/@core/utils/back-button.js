import React from "react";

import { ArrowLeftShort } from "react-bootstrap-icons";
function BackButton({ title }) {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex  mt-1 justify-center  items-center   pr-1 gap-3 text-md"
    >
      <div className="opacity-50  flex rounded-full items-center mx-auto text-center">
        {" "}
        <ArrowLeftShort size={28} />
      </div>
      {title && <h2 className="text-m ml-0 font-bold">{title}</h2>}
    </button>
  );
}

export default BackButton;
