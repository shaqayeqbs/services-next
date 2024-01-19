import React from "react";
import CheckOut from "../../book-service/check-out";
import StepSix from "../../book-service/step-six";

function CheckOutStore() {
  return (
    <div className="mt-8">
      <CheckOut />
      <div className="mt-10 mb-32">
        <h2 className="font-bold my-5">Peyment</h2>
        <StepSix />
      </div>
    </div>
  );
}

export default CheckOutStore;
