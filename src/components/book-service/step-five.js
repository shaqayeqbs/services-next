import React from "react";
import Card from "../ui/card";
import CheckOut from "./check-out";

function StepFive() {
  return (
    <div>
      <Card className="p-4 mb-8">
        <div className="mb-4 flex justify-between">
          <h2 className="text-fundation">Service</h2>
          <p className="font-extrabold">Painting</p>
        </div>
        <div className="mb-4 flex justify-between">
          <h2 className="text-fundation">Category</h2>
          <p className="font-extrabold">House painting</p>
        </div>
        <div className="mb-4 flex justify-between">
          <h2 className="text-fundation">Address</h2>
          <p className="font-extrabold">Paul Street</p>
        </div>
        <div className="mb-4 flex justify-between">
          <h2 className="text-fundation">Date and Time</h2>
          <p className="font-extrabold">Dec 23, 2024 | 11:00 AM</p>
        </div>
        <div className="mb-4 flex justify-between">
          <h2 className="text-fundation">Working Hours</h2>
          <p className="font-extrabold">2</p>
        </div>
      </Card>
      <h2 className="text-lg mb-3 font-bold">Checkout</h2>
      <CheckOut />
    </div>
  );
}

export default StepFive;
