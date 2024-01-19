import React, { useState } from "react";
import Card from "../ui/Card";
import Link from "next/link";
import Image from "next/image";
import { GeoAlt, Heart, XCircle, Shop } from "react-bootstrap-icons";
import Modal from "../ui/modal";
import { useRouter } from "next/router";

function OrderItem({ order, listType, store }) {
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const router = useRouter();
  const handleCancelClick = () => {
    setIsCancelModalOpen(true);
  };

  const handleCancelOrder = () => {
    // Close the modal
    setIsCancelModalOpen(false);
  };
  const handleReschedule = () => {
    // Redirect to the "/cancel" page
    router.push("/cancel");
    setIsCancelModalOpen(false);
  };
  console.log(order);
  const renderActionButtons = () => {
    if (listType === "completed" || listType === "paid") {
      return (
        <div
          className={`${
            store ? "" : "flex justify-between "
          } w-full  text-right mt-3`}
        >
          {!store && (
            <button
              onClick={handleCancelClick}
              className="text-error border-error border-1 rounded-lg px-5 py-[2px] "
            >
              Cancel
            </button>
          )}
          {!store && (
            <button className="text-primary border-primary border-1 rounded-lg  px-3 py-[2px] ">
              Contact Support
            </button>
          )}
          {store && (
            <div>
              <Link
                href={`/store/manage-product-orders/${order.id}`}
                className="text-primary text text-right  border-primary border-1 rounded-lg  px-3 py-[2px] "
              >
                More Details
              </Link>
            </div>
          )}
        </div>
      );
    } else if (listType === "history") {
      return (
        <div
          className={`${
            store ? "flex justify-between" : "flex justify-end "
          } w-full  text-right mt-3`}
        >
          <button className="text-primary border-primary border-1 rounded-lg  px-3 py-[2px] ">
            Share Feedback
          </button>
          {store && (
            <div>
              <Link
                href={`/store/manage-product-orders/${order.id}`}
                className="text-primary text-right text  border-primary border-1 rounded-lg  px-3 py-[2px] "
              >
                More Details
              </Link>
            </div>
          )}
        </div>
      );
    } else if (listType === "draft") {
      return (
        <div className="flex justify-end mt-3">
          <button className="button">
            <Heart size={18} />
            Complete Order
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="!w-full my-3 text">
      <div className="">
        {order.items.map((item, index) => (
          <Card key={index} className="!w-full my-3 text">
            <div key={index} className="items-center gap-2">
              {/* <Image
              src={item.product.image}
              width={40}
              height={40}
              className="rounded-full"
              alt="product"
            /> */}
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  {store && (
                    <div className="text-primary">
                      <Shop size={20} fontVariant={40} />
                    </div>
                  )}
                  <div className="my-3 text-m font-bold">{item?.name}</div>
                </div>
                {/* Add additional properties as needed */}
                <div className="my-3 text-m font-bold">{item?.price}$</div>
              </div>
              <div className="my-3 text-m text-left">
                {item?.stock_quantity} Qty
              </div>
            </div>
            <div className="flex items-center my-4">
              <GeoAlt
                size={20}
                fontVariant={40}
                className="mr-1 text-primary !font-bold"
                color=" rgb(111 56 197 / var(--tw-text-opacity))"
              />
              {order.address}
            </div>
            <div className="flex ">
              {order.categories?.map((item, index) => (
                <span key={index} className="text-left block  object-fit">
                  {item} {index !== order.categories.length - 1 && ","}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {!store && (
                <Image
                  src={order.image}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="prfile"
                />
              )}

              <div className="my-3 text-m font-bold">{order.name}</div>
            </div>
            <div className="flex gap-3">
              <div>Status</div>
              <div>{order.status}</div>
            </div>
            {renderActionButtons()}
          </Card>
        ))}
      </div>

      {/* Cancel Order Modal */}
      <Modal
        isOpen={isCancelModalOpen}
        onClose={() => setIsCancelModalOpen(false)}
      >
        <div>
          <XCircle
            className="mx-auto mb-5 text-primary font-extralight"
            size={40}
            color="rgb(111 56 197 / var(--tw-text-opacity))"
          />
        </div>
        <h2 className="text-m text-center font-bold mb-4">
          Are you sure about cancelling this order?
        </h2>
        <p>You can always reshedule it.</p>
        <div className="flex items-center !text-[16px]">
          <button
            className="border-2 h-min py-3 border-primary w-full rounded-lg text-primary p-0 mr-2 !text-[16px]"
            onClick={handleCancelOrder}
          >
            Cancll anyway
          </button>
          <button className="button !text-[16px]" onClick={handleReschedule}>
            Reschedule
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default OrderItem;
