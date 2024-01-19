// pages/store/manage-product-orders/[id].js
import { useRouter } from "next/router";
import { orderDummyData } from "../../../src/@core/data/order-data";
import CartItem from "../../../src/components/cart/cart-item";
import BackButton from "../../../src/@core/utils/back-button";
import CheckOut from "../../../src/components/book-service/check-out";
import { CheckCircle } from "react-bootstrap-icons";
const dummyData = [
  {
    name: "Coloring Brush",
    size: "Medium",
    color: "Black",
    price: 34.0,
    quantity: 2,
    total: 68.0,
    img: "/assets/profile.png", // Add the img property
  },
  {
    name: "Achter France",
    size: "Large",
    color: "Red",
    price: 105.0,
    quantity: 1,
    total: 105.0,
    img: "/assets/profile.png", // Add the img property
  },
  {
    name: "Coloring Roll",
    size: "Medium",
    color: "Blue",
    price: 195.0,
    quantity: 3,
    total: 585.0,
    img: "/assets/profile.png", // Add the img property
  },
];
const ServiceOrderDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the order data based on the id from the URL
  const order = orderDummyData.find((order) => order.id == id);

  if (!order) {
    // If no order is found, you can handle it (e.g., redirect to a 404 page)
    return <div>Order not found</div>;
  }

  return (
    <div className="p-5 container">
      <div className="mb-5">
        <BackButton title="13 Oct 2023" />
      </div>
      {dummyData.map((item, index) => (
        <CartItem key={index} {...item} />
      ))}
      <div className="my-8">
        <CheckOut />
      </div>
      <button className="button">
        <CheckCircle />
      </button>
    </div>
  );
};

export default ServiceOrderDetailPage;
