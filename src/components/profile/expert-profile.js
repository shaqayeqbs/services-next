import React, { useState } from "react";
import dummyExpertData from "../../@core/data/experts";
import Image from "next/image";
import { Heart, Envelope, Phone, Share } from "react-bootstrap-icons";
// import UserAvatar from "./user-avatar";
import BackButton from "../../@core/utils/back-button";
import AboutServices from "./about-services";
const ExpertProfile = ({ expertId }) => {
  const [showWorkSamples, setShowWorkSamples] = useState(true);
  const [showAboutServices, setShowAboutServices] = useState(false);

  const getExpertById = (id) => {
    return dummyExpertData.find((expert) => expert.id == id);
  };

  const expert = getExpertById(expertId);

  if (!expert) {
    // Handle case where expert with the given ID is not found
    return <div>Expert not found</div>;
  }

  const toggleWorkSamples = () => {
    setShowWorkSamples(true);
    setShowAboutServices(false);
  };

  const toggleAboutServices = () => {
    setShowWorkSamples(false);
    setShowAboutServices(true);
  };

  return (
    <div>
      <div className="relative mb-10">
        <div className="absolute left-5 top-3 text-[white] font-bold">
          <BackButton />
        </div>
        <Image
          src={expert.coverPhoto}
          alt={`${expert.name}'s cover photo`}
          layout="responsive"
          width={800}
          height={100}
          className="0bject-cover !h-[246px] lg!h-[300px]"
        />
        <div className="absolute bottom-[-44px]  left-1/2 transform -translate-x-1/2 p-3">
          {/* <UserAvatar width={100} /> */}
        </div>
      </div>

      <h2 className="text-md mx-auto text-center font-bold mt-4">
        {expert.name}
      </h2>
      <p className="text-fundation">14 work sample with Servyca</p>
      {/* Call, Message, Share Buttons */}
      <div className="flex items-center justify-center   mt-2">
        <button className=" btn-outline me-2 flex items-center ">
          <Phone className="me-2" /> Call
        </button>
        <button className="btn-outline me-2 flex items-center">
          <Envelope className="me-2" /> Message
        </button>
        <button className="btn-outline me-2 flex items-center">
          <Share className="me-2" /> Share
        </button>
      </div>
      <hr className="my-3 border-black/30 " />

      {/* Buttons */}
      <div className="flex justify-between items-center  my-4">
        <button
          onClick={toggleWorkSamples}
          className={`relative w-full  ${
            showWorkSamples
              ? "text-primary border-b-2 border-primary"
              : "text-red"
          }`}
        >
          <div
            className={`font-bold ${
              showWorkSamples ? "text-primary" : "text-red"
            }`}
          >
            Work Samples
          </div>
          <span
            className={`absolute bottom-0 left-0 w-full border-b ${
              showWorkSamples ? "" : "border-transparent"
            }`}
          ></span>
          <span
            className={` bottom-[-10px] left-0 text ${
              showWorkSamples ? "text-primary" : ""
            }`}
          >
            And reviews
          </span>
        </button>
        <button
          className={`relative w-full  ${
            !showWorkSamples
              ? "text-primary border-b-2 border-primary"
              : "text-red"
          }`}
          onClick={toggleAboutServices}
        >
          <div
            className={`font-bold ${
              !showWorkSamples ? "text-primary" : "text-red"
            }`}
          >
            About Services
          </div>
          <span
            className={`absolute bottom-0 left-0 w-full border-b ${
              !showWorkSamples ? "" : "border-transparent"
            }`}
          ></span>
          <span
            className={` bottom-[-10px] left-0 text ${
              !showWorkSamples ? "text-primary" : ""
            }`}
          >
            Every thing you Need ti know
          </span>
        </button>
      </div>
      {/* Work Samples */}
      {showWorkSamples && (
        <div className="grid grid-cols-3 flex-wrap">
          {expert.workSamples.map((sample, index) => (
            <div key={index} className="m-[2px]">
              <Image
                src={sample}
                alt={`${expert.name}'s work sample ${index + 1}`}
                width={150}
                height={100}
                className="rounded !h-[111px] md!h-[200px] md!w-full"
              />
            </div>
          ))}
        </div>
      )}

      {/* About Services */}
      {showAboutServices && <AboutServices />}
    </div>
  );
};

export default ExpertProfile;
