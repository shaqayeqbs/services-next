import React from "react";
import Link from "next/link";
import OrderItem from "./order-item";
import Card from "../ui/Card";
import EmptyList from "../../@core/icons/svgs/order/empty-list";

const OrderList = ({ orders, listType, store }) => {
  // Filter orders based on the listType

  const filteredOrders = orders.filter(
    (order) => order?.status?.toUpperCase() == listType?.toUpperCase()
  );
  console.log(filteredOrders);
  if (!filteredOrders[0]) {
    return (
      <Card className="my-3 !mb-20 h-full flex flex-col justify-center min-h-[580px]">
        <div className="mx-auto">
          <EmptyList />
        </div>
        <p className="font-bold text-center text-m mt-6 mb-3">
          No {listType === "upcoming" ? "Upcoming" : "History"} Order
        </p>
        <p className="text-center">
          Currently you don’t have any{" "}
          {listType === "upcoming" ? "upcoming" : "history"} orders. Place and
          track your orders from here.
        </p>
        <button className="button !w-fit mx-auto">View all services</button>
      </Card>
    );
  }

  return (
    <div className="pt-0 mb-24 my-0 container">
      {filteredOrders.map((order, index) => (
        <Link key={index} href={`/orders/${order.id}`}>
          <OrderItem listType={listType} order={order} store />
        </Link>
      ))}
    </div>
  );
};

export default OrderList;
