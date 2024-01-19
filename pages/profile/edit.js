import React, { useState, useRef } from "react";
import { Pencil, PencilFill, PlusCircleDotted } from "react-bootstrap-icons";
import BackButton from "../../src/@core/utils/back-button";
import Avatar from "react-avatar";
import TextInput from "../../src/@core/utils/text-input";
import PasswordInput from "../../src/@core/utils/password-input";
import {
  getAddresses,
  editProfile,
  getProfile,
  uploadProfilePhoto,
} from "../../src/@core/api/profile";
import Link from "next/link";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

// Custom Address Input Component
const AddressInput = ({ address, onEdit, isLast }) => (
  <div
    className={`flex items-center mb-2 ${
      !isLast ? "border-b pb-1" : "!border-0 bg-[red]"
    }`}
  >
    <input
      type="text"
      value={address.street}
      readOnly
      className="w-full px-3 py-2 bg-transparent focus:outline-none focus:ring "
    />
    <Pencil size={12} className="ml-2 cursor-pointer" onClick={onEdit} />
  </div>
);

// Main EditProfile Component
function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [usernname, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);
  const inputRef = useRef(null);
  const { data: oldData, isLoading, isError } = useQuery("profile", getProfile);

  const {
    data: addressesData,
    isLoading: addressesLoading,
    isError: addressesError,
    error: addressesErrorMsg,
  } = useQuery("addresses", getAddresses);

  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
    error: profileErrorMsg,
  } = useQuery("profile", editProfile);

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);

    // Display the selected photo in the Avatar immediately
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataURL = event.target.result;
      setProfilePicture(dataURL);
    };
    reader.readAsDataURL(file);
    console.log("hereeeeeeeeeeeeee", file);
  };

  const handleUploadProfilePhoto = async () => {
    try {
      setIsUploading(true);
      await uploadProfilePhoto(profilePhoto);
      console.log("Profile photo uploaded successfully!");
      // Optionally, you can refetch the profile data after uploading the photo
      // refetchProfile();
    } catch (error) {
      console.error("Error uploading profile photo:", error);
    } finally {
      setIsUploading(false);
    }
  };
  const handleEditAddress = () => {};
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async () => {
    try {
      if (profilePhoto) {
        // If a new profile photo is selected, upload it
        await handleUploadProfilePhoto();
      }
      // Make sure to adjust the following fields based on your actual API payload structure
      const updatedProfileData = {
        email,
        name: usernname,
        password,
        phoneNumber,
        addresses,
        bankAccountNumber,
        accountHolderName,
        ifscCode,
      };
      console.log(updatedProfileData);

      const res = await editProfile(updatedProfileData);
      console.log("Profile updated successfully!", res);
      // Optionally, you can refetch the profile data after updating
      // refetchProfile();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  console.log(oldData);
  const { name, mobile_number, profile_picture } = oldData || "";
  return (
    <div className="p-5 mx-auto max-w-[600px] flex-col ">
      <BackButton />
      <div className="relative items-center">
        {profileLoading ? (
          <Skeleton circle height={70} width={70} />
        ) : (
          <div className="text-center relative">
            <Avatar
              src={
                profile_picture
                  ? profile_picture
                  : profilePicture
                  ? profilePicture
                  : name
              }
              name={name}
              size="80"
              round
              className="!bg-primary/50 mx-auto"
              onClick={() => inputRef.current.click()}
            />
            {!isUploading && (
              <div className="absolute left-[55%] top-[40px] bg-blue w-min p-2 rounded-full border-[white] border-4">
                <PencilFill size={8} color="white" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleProfilePhotoChange(e);
                setIsUploading(true);
              }}
              ref={inputRef}
              style={{ display: "none" }}
            />
          </div>
        )}
        <div className="absolute left-[55%] top-[55px] bg-blue w-min p-2 rounded-full border-[white] border-4">
          <PencilFill size={7} color="white" />
        </div>
      </div>
      <div className=" mx-auto mt-6   rounded-md">
        <h1 className="text-m font-bold mb-4">Personal Details</h1>

        <TextInput
          label="Email Or Username"
          placeholder="Enter your email or username"
          value={email}
          style="input-container !border-mutedText"
          className=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Name"
          placeholder="Enter your Name"
          value={usernname}
          style="input-container !border-mutedText"
          className=""
          onChange={(e) => setName(e.target.value)}
        />
        <p className="text-left">Password</p>
        <div className="input-container">
          <PasswordInput
            // label="Password"
            placeholder="Enter your password"
            value={password}
            style
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            onTogglePassword={togglePasswordVisibility}
          />
        </div>
      </div>
      <p href="/forget-password" className="text-right text-primary ">
        <Link className="inline-block text " href="/auth/forget-password">
          Forget Passowrd?
        </Link>
      </p>

      <TextInput
        label="Phone Number"
        placeholder="Enter your phone number"
        value={phoneNumber}
        style
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <hr className="my-4 mt-8 border-1 border-fundation/10" />

      <div className="mb-6 mx-auto">
        <label className="block text-sm font-semibold mb-2">
          Manage Addresses
        </label>
        {Array.isArray(addressesData) && addressesData.length > 0 && (
          <div className="bg-white p-2 rounded-lg">
            {addressesData?.map((address, index) => (
              <AddressInput
                key={index}
                address={address}
                onEdit={() => handleEditAddress(index)}
                isLast={index === addresses.length - 1}
              />
            ))}
          </div>
        )}
        <Link
          href="/profile/add-new-address"
          className="flex justify-end items-center text-primary gap-2"
        >
          <PlusCircleDotted />
          <p className="text-right my-4 ">Add New Address</p>
        </Link>
        <hr className="my-4 mt-8 border-1 border-fundation/10" />

        <div className="my-8">
          <label className="block text-sm font-semibold mb-5 text-[17px] mb-2">
            Bank Account Details
          </label>
          <TextInput
            label="Bank Account Number"
            placeholder="Enter your bank account number"
            value={bankAccountNumber}
            style
            onChange={(e) => setBankAccountNumber(e.target.value)}
          />
          <TextInput
            label="Account Holder’s Name"
            placeholder="Enter the account holder’s name"
            value={accountHolderName}
            style
            onChange={(e) => setAccountHolderName(e.target.value)}
          />
          <TextInput
            label="IFSC Code"
            placeholder="Enter the IFSC code"
            value={ifscCode}
            style
            onChange={(e) => setIfscCode(e.target.value)}
          />
        </div>

        <button onClick={handleSubmit} className="button">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default EditProfile;
