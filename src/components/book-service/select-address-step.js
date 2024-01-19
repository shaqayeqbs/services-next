import React, { useState } from "react";
import { useQuery } from "react-query";
import { PencilSquare, PlusCircle } from "react-bootstrap-icons";
import Card from "../ui/Card";
import { getAddresses, addNewAddress } from "../../@core/api/profile";
// import useProfileStore from "../../store";
import Link from "next/link";

function SelectAddressStep() {
  const [selectedAddress, setSelectedAddress] = useState(null);

  // UseQuery to fetch addresses
  const { data: addresses = [], refetch } = useQuery("addresses", getAddresses);
  console.log(addresses, "adddddd");
  // const profileStore = useProfileStore();

  const handleAddressSelect = (index) => {
    const selectedId = addresses[index]?.id;
    localStorage.setItem("selectedAddressId", selectedId);

    setSelectedAddress(index === selectedAddress ? null : index);
  };

  return (
    <div>
      <Card className="mb-6">
        {addresses?.map((address, index) => (
          <div
            key={index}
            className={`flex items-center mb-2 ${
              index === addresses.length - 1 ? "" : "border-b-2 pb-3"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border border-primary mr-2 cursor-pointer ${
                selectedAddress === index ? "bg-primary" : ""
              }`}
              onClick={() => handleAddressSelect(index)}
            ></div>
            <div className="text-left text">
              <div class>{address.street}</div>
              <div>
                <span>Contact:</span>
                <span className="font-bold mx-2">{address.postal_code}</span>
              </div>
            </div>
            <PencilSquare className="ml-auto text-primary" />
          </div>
        ))}
        <div className="my-3 text">
          <Link
            href="/profile/add-new-address"
            className="flex items-center gap-2 text-primary mb-2"
          >
            <PlusCircle className="text" />
            <h2 className="text">Add Address</h2>
          </Link>
        </div>
      </Card>

      <div className="mb-6">
        <h2 className="text-m font-bold mb-1">Promo Code</h2>
        <div className="!border-0 shadow-md border-gray-300 p-2 w-full input-container flex">
          <input type="text" placeholder="Enter code here..." className="" />
          <button className="btn-outline-primary  !rounded-md ml-2">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectAddressStep;
