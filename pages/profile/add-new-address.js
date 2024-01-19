// AddAddress.js
import React, { useState } from "react";
import BackButton from "../../src/@core/utils/back-button";
import TextInput from "../../src/@core/utils/text-input";
import ToggleButton from "../../src/@core/utils/toggle-btn";
import { addNewAddress } from "../../src/@core/api/profile";

const AddAddress = () => {
  const [locationName, setLocationName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [stateCity, setStateCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [address, setAddress] = useState("");
  const [setDefault, setSetDefault] = useState(false);

  const handleAddAddress = async () => {
    // Implement logic to handle adding a new address
    const newAddress = {
      name: locationName,
      phoneNumber,
      country,
      state: setDefault,
      city: stateCity, // Corrected assignment here
      postal_code: postCode,
      street: address,
      default: setDefault, // Assuming 'default' is the property to set as default
    };

    // Call the API function to add the new address
    const response = await addNewAddress(newAddress);
    console.log(response);
    if (response.status === 200) {
      console.log("Address added successfully:", response);

      window.history.back({
        state: { newAddressData: newAddress },
      });
    } else {
      // Handle unsuccessful response here
      console.error("Failed to add address. Status:", response.status);
    }
    console.log("Address added successfully:", response);

    // Optionally, you can navigate back or perform any other action
  };

  return (
    <div className="p-5 mx-auto max-w-[600px] flex-col">
      <div className="mb-9">
        <BackButton title="New Address" />
      </div>

      <TextInput
        label="Name of Location"
        placeholder="Home"
        onChange={(e) => setLocationName(e.target.value)}
      />
      <div className="my-4">
        <TextInput
          label="Phone Number"
          placeholder="+9891965478"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="my-4">
        <TextInput
          label="Country"
          placeholder="Select your Country"
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>

      <div className="my-4">
        <TextInput
          label="State/City"
          placeholder="Select your City"
          onChange={(e) => setStateCity(e.target.value)} // Corrected stateCity assignment
        />
      </div>

      <TextInput
        label="Post Code"
        placeholder="204356XXXXXXX"
        onChange={(e) => setPostCode(e.target.value)}
      />
      <div>
        <label className="block text-sm font-semibold mt-4">Address</label>
        <textarea
          className="input-container"
          rows={5}
          placeholder="Type here..."
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="flex justify-between items-center mb-4">
        <p className="mr-2 font-bold">Set as Default</p>
        <ToggleButton
          value={setDefault}
          onChange={() => setSetDefault(!setDefault)}
        />
      </div>

      <button onClick={handleAddAddress} className="button">
        Add Address
      </button>
    </div>
  );
};

export default AddAddress;
