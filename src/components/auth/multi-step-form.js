import React, { useState } from "react";
import { steps } from "../../@core/data/welcome-page";
import Link from "next/link";
import Image from "next/image";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length));
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <div className="flex max-w-[400px] items-center mx-auto flex-col lgjustify-center justify-between relative overflow-hidden  !h-screen">
      <div className="flex justify-between w-full items-center p-5 pb-0">
        <div className="top-0 right-4 ">
          {currentStep}
          <span className="text-[#A0A0A1]">/{steps.length}</span>
        </div>

        <Link
          href="select-language"
          className="cursor-pointer font-bold"
          onClick={handleNext}
        >
          Skip
        </Link>
      </div>
      <div className="mt-8 flex flex-col justify-between h-full ">
        <div className="relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`borde ${
                currentStep === step.id ? "block" : "hidden"
              } ${
                currentStep === steps.length ? "rounded-10" : "rounded-full"
              } p-4`}
            >
              <Image
                src={step.image}
                alt={`Step ${step.id}`}
                className="w-[375px] mx-auto"
                width={100}
                height={100}
              />
              <h2 className="text-center text-[24px]  mt-3 mb-3 font-extrabold text-lg">
                {step.title}
              </h2>
              <p className="text-mutedText">{step.content}</p>
            </div>
          ))}
        </div>
        <div className="flex p-4 font-bold justify-between items-center">
          {currentStep !== 1 && (
            <div
              className="bottom-4 left-4 cursor-pointer"
              onClick={handlePrev}
            >
              Prev
            </div>
          )}
          {currentStep == 1 && (
            <div className="bottom-4 left-4 cursor-pointer min-w-[25px]"></div>
          )}
          <div className="flex items-center">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`h-2 w-2 mx-1 rounded-full ${
                  currentStep === step.id
                    ? "bg-[black] !w-[35px]"
                    : "bg-mutedText"
                }`}
              />
            ))}
          </div>
          {currentStep !== 3 && (
            <button onClick={handleNext} className="text-primary ">
              Next
            </button>
          )}
          {currentStep == 3 && (
            <Link
              href="select-language"
              className="text-primary cursor-pointer"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
