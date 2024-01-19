import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { ArrowLeftShort, CheckCircle } from "react-bootstrap-icons";
import TopNav from "../../../src/components/navbar/top-nav";
import BackButton from "../../../src/@core/utils/back-button";
import { categoriesData } from "../../../src/@core/data/categories";
import StepTwo from "../../../src/components/book-service/step-two";
import PeymentSteps from "../../../src/components/layouts/peyment-steps";
import StepThree from "../../../src/components/book-service/step-three";
import StepOne from "../../../src/components/book-service/step-one";
import Modal from "../../../src/components/ui/modal";
import SelectAddressStep from "../../../src/components/book-service/select-address-step";
import StepFive from "../../../src/components/book-service/step-five";
import StepSix from "../../../src/components/book-service/step-six";
const steps = [
  {
    number: 1,
    description: "Select the number of rooms",
    content: <StepOne />,
    btn: "123.00 $ - Next",
  },
  {
    number: 2,
    description: "Booking details",
    btn: "123.00 $ - Next",
    content: <StepTwo />,
  },
  {
    number: 3,
    description: "Select Date",
    btn: "123.00 $ - Next",
    content: <StepThree />,
  },
  {
    number: 4,
    description: "Select Address",
    btn: "123.00 $ - Next",
    content: <SelectAddressStep />,
  },
  {
    number: 5,
    description: "Booking Review",
    btn: "Peyment",
    content: <StepFive />,
  },
  {
    number: 6,
    description: "Peyment",
    btn: "Peyment",
    content: <StepSix />,
  },
];
const CategoryServicePage = () => {
  const router = useRouter();
  const { categoires } = router.query;
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleReschedule = () => {
    // Add logic for rescheduling here
    console.log("Reschedule");
    setIsModalOpen(false);
  };
  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Handle completion or navigation after the last step
      setIsModalOpen(true);
    }
  };

  const { number, description, content, btn } = steps[currentStep];

  // Find the category object based on the category name
  const selectedCategory = categoriesData.find(
    (item) => item.name?.toLowerCase() == categoires?.toLowerCase()
  );

  if (!selectedCategory) {
    // Handle the case when the category is not found
    return <p>Category not found</p>;
  }
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div>
      <TopNav />
      <div className="ml-3">
        {currentStep === 0 ? (
          <BackButton title={description} onClick={handlePrevStep} />
        ) : (
          <button onClick={handlePrevStep} className="flex items-center">
            <ArrowLeftShort className="mr-2" />
            <span className="text-m  font-bold">{description}</span>
          </button>
        )}
      </div>
      <div className="p-5 ">
        <PeymentSteps number={number} description={description}>
          {content}
        </PeymentSteps>
        <div>
          <button className="button" onClick={handleNextStep}>
            {btn}
          </button>
        </div>
        <Modal isOpen={isModalOpen} onClose={handleReschedule}>
          <div className="max-w-[95%] px-10">
            <div>
              <CheckCircle
                className="mx-auto  mb-5 !font-extrabold text-m text-primary "
                size={44}
              />
            </div>
            <h2 className="text-m w-full whitespace-nowrap text-primary text-center  font-bold mb-4">
              Booking is registered
            </h2>

            <div className="items-center mt-10 !text-[16px]">
              <button
                className="border-2 font-bold h-min py-3 border-primary w-full rounded-lg text-primary p-0 mr-2 !text-[16px]"
                onClick={handleReschedule}
              >
                Instant tracking
              </button>
              <Link
                href="/"
                className="inline-block text-center border-2 font-bold h-min py-3 border-primary w-full rounded-lg text-primary p-0 mr-2 mt-2 !text-[16px] !text-[16px]"
                onClick={handleReschedule}
              >
                Back to home
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CategoryServicePage;
