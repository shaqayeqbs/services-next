import React, { useState, useEffect } from "react";
import { TelephoneX, Envelope, VolumeOff } from "react-bootstrap-icons";
import Image from "next/image";

const CallScreen = ({ callerName = "username" }) => {
  const [isBorderExpanded, setIsBorderExpanded] = useState(false);

  useEffect(() => {
    // Add animation logic to expand and shrink the border
    const borderAnimation = setInterval(() => {
      setIsBorderExpanded((prev) => !prev);
    }, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(borderAnimation);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <p className="text-xl font-bold mb-20 text-mutedText">Calling...</p>
      </div>

      <div
        className={`border-2 w-[275px]  h-[275px] border-primary relative rounded-full p-2 transition-width ${
          isBorderExpanded ? "border-[25px]" : "border-4"
        }`}
      >
        {/* User Profile Image */}
        <Image
          src="/assets/profile.png"
          alt="User Profile"
          layout="fill"
          className="rounded-full"
        />
      </div>

      <p className="text-lg font-bold mt-10">{callerName}</p>

      <div className="flex mt-28">
        {/* Three Icons in One Row */}
        <div className="flex items-center text-[white] space-x-6">
          <div className="bg-[#F3A80C] p-3 rounded-full">
            <VolumeOff size={30} />
          </div>

          <div className="bg-primary p-3 rounded-full">
            <Envelope size={30} />
          </div>
          <div className="bg-error p-3 rounded-full">
            <TelephoneX size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallScreen;
