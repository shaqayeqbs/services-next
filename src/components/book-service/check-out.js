import React from "react";
import Card from "../ui/Card";

function CheckOut() {
  return (
    <>
      <Card>
        <div className="flex justify-between mb-4">
          <h2 className="text-fundation">Service Price</h2>
          <p className="font-extrabold">187.00 $</p>
        </div>
        <div className="flex justify-between mb-4">
          <h2 className="text-fundation">Promo</h2>
          <p className="font-extrabold">29.00 $</p>
        </div>
        <hr className="mb-2 " />
        <div className="flex justify-between ">
          <h2 className="text-fundation">Total</h2>
          <p className="font-extrabold text-primary">158.00 $</p>
        </div>
      </Card>
    </>
  );
}

export default CheckOut;
