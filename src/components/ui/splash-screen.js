import React from "react";

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center space-x-5 w-full h-screen">
      <img src="/assets/servyca_logo.svg" alt="splash screen" className="mx-" />
      <h1 className="text-primary text-[40px] font-bold ">Servyca</h1>
    </div>
  );
};

export default SplashScreen;
