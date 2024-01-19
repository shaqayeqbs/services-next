import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Modal from "../../src/components/ui/modal";
import { XCircle } from "react-bootstrap-icons";
import BackButton from "../../src/@core/utils/back-button";
import Card from "../../src/components/ui/Card";
import { CheckCircle } from "react-bootstrap-icons";
import { orderDummyData } from "../../src/@core/data/order-data";

const OrderDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the order based on orderId
  const order = orderDummyData.find((item) => item.id == id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!order) {
    // Handle case where order is not found
    return <div>Order not found</div>;
  }

  const handleCancel = () => {
    // Add logic for cancellation here
    console.log("Cancel Booking");
    setIsModalOpen(false);
    router.push("/cancel");
  };

  const handleReschedule = () => {
    // Add logic for rescheduling here
    console.log("Reschedule");
    setIsModalOpen(false);
  };

  const isHistoryOrder = order.type === "history";
  const isDraftOrder = order.type === "draft";
  const orderStatus = isHistoryOrder
    ? "Your Order Is Done!"
    : "Your Order will be done soon!";
  const contactSupportText = isHistoryOrder
    ? "Send Feedback"
    : "Contact Support";
  const cancelButtonText = isDraftOrder ? "Discard Draft" : "Cancel Booking";
  const finishedImage = isHistoryOrder
    ? "/assets/finished.svg"
    : "/assets/image.svg";

  return (
    <div className="p-5">
      <BackButton title={orderStatus} />
      <div className="relative w-[100%]  ">
        <Image
          width={1000}
          height={300}
          src={finishedImage}
          alt="banner"
          className="max-h-[200px] mx-auto"
        />
      </div>
      {/* Content Section */}
      <div className="mb-8">
        <section className="mb-8">
          <Card className="flex items-center justify-between">
            <div>{orderStatus}</div>
            <button className="button !m-0 !py-1 !w-fit !text-s">
              {contactSupportText}
            </button>
          </Card>
          <h2 className="text-md font-bold my-2">General Info</h2>

          <Card>
            <p className="border-b pb-2">Order ID: {order.id}</p>
            <p className="">Order Date: {order.date}</p>
          </Card>

          <h2 className="text-md font-bold my-2">Shipping Details</h2>
          <Card>
            <ul>
              <li className="border-b pb-2">Will be done By: {order.name}</li>
              <li>To: {order.address}</li>
            </ul>
          </Card>
        </section>

        <section>
          <h2 className="text-md font-bold mb-2">Order Details</h2>
          {/* Add content related to order */}
          <Card>
            <p className="border-b pb-2">
              Task Type: {order.categories.join(", ")}
            </p>
            <p className="border-b pb-2">Price: {order.price.toFixed(2)} $</p>
            <p>Payment Type: PayPal</p>
          </Card>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4">
        {!isHistoryOrder && (
          <button
            className="flex items-center gap-3 justify-center border-2 border-primary w-full text-primary py-3 font-bold rounded-lg"
            onClick={() => setIsModalOpen(true)}
          >
            <XCircle /> {cancelButtonText}
          </button>
        )}
        <button
          className={`button !my-0 !px-5 ${!isHistoryOrder ? "!w-min" : ""}`}
        >
          <CheckCircle size={24} />
        </button>
      </div>
      {/* Render the OrderDetailModal component */}
      <Modal isOpen={isModalOpen} onClose={handleReschedule}>
        <div>
          <XCircle
            className="mx-auto mb-5 text-primary font-extralight"
            size={40}
          />
        </div>
        <h2 className="text-m text-center font-bold mb-4">
          Are you sure about cancelling this order?
        </h2>
        <p>You can always reschedule it.</p>
        <div className="flex items-center !text-[16px]">
          <button
            className="border-2 h-min py-3 border-primary w-full rounded-lg text-primary p-0 mr-2 !text-[16px]"
            onClick={handleCancel}
          >
            Cancel anyway
          </button>
          <button className="button !text-[16px]" onClick={handleReschedule}>
            Reschedule
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default OrderDetailPage;
