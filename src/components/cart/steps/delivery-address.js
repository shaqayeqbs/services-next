import React from "react";
import SelectAddressStep from "../../book-service/select-address-step";

function DeliveryAddress() {
  return (
    <div className="flex-col my-10 min-h-[600px]">
      <SelectAddressStep />
    </div>
  );
}

export default DeliveryAddress;
