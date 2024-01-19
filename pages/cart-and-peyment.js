import React, { useState, useEffect } from "react";
import { ArrowLeftShort, CheckCircle, House } from "react-bootstrap-icons";
import BackButton from "../src/@core/utils/back-button";
import Link from "next/link";
import Modal from "../src/components/ui/modal";
import Cart from "../src/components/cart/steps/cart";
import DeliveryAddress from "../src/components/cart/steps/delivery-address";
import CheckOut from "../src/components/cart/steps/check-out";
import { createShopOrder } from "../src/@core/api/shopApi";
const steps = [
  {
    number: 1,
    label: "My Cart",
    component: <Cart />,
    buttonLabel: "Proceed To Checkout",
  },
  {
    number: 2,
    label: "Delivery Address",
    component: <DeliveryAddress />,
    buttonLabel: "Proceed To Payment",
  },
  {
    number: 3,
    label: "Checkout",
    component: <CheckOut />,
    buttonLabel: "Confirm Order",
  },
];

function CartAndPayment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReschedule = () => {
    // Add logic for rescheduling here
    console.log("Reschedule");
    setIsModalOpen(false);
  };

  const handleNextStep = async () => {
    console.log("clicked");
    if (currentStep < steps.length - 1) {
      console.log("ok");
      console.log(steps[currentStep]);
      // Check if the current step's label is "Proceed To Payment"
      if (steps[currentStep].buttonLabel == "Proceed To Payment") {
        const addressId = localStorage.getItem("selectedAddressId");
        console.log(addressId);
        // Assuming createShopOrder is an asynchronous function
        const response = await createShopOrder({ address_id: addressId });
        console.log(response);
        setCurrentStep(currentStep + 1);
      } else {
        // If not "Proceed To Payment," proceed to the next step directly
        setCurrentStep(currentStep + 1);
      }
    } else {
      setIsModalOpen(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  useEffect(() => {
    if (window?.history.state) {
      setCurrentStep(2);
    }
  }, []);
  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="p-5 container">
      <div className="ml-[0rem] w-full  flex !text-left">
        {currentStep === 0 ? (
          <BackButton title={steps[currentStep].label} />
        ) : (
          <button onClick={handlePrevStep} className="flex items-center">
            <ArrowLeftShort className="mr-2" />
            <span className="text-m font-bold">{steps[currentStep].label}</span>
          </button>
        )}
      </div>

      {React.cloneElement(steps[currentStep].component)}

      <div>
        <button onClick={handleNextStep} className="button">
          {steps[currentStep].buttonLabel}
        </button>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleModalClose}>
          <div className="items-center flex-col text-center mx-8">
            <div className="mx-auto text-center mb-4 text-primary flex justify-center">
              <CheckCircle size={40} />
            </div>
            <h2 className="my-3">Payment done successfully.</h2>
          </div>
          <Link
            href="/"
            className="button !w-[80%] mx-auto !rounded-3xl"
            onClick={handleReschedule}
          >
            <House />
            Back to home
          </Link>
        </Modal>
      )}
    </div>
  );
}

export default CartAndPayment;
