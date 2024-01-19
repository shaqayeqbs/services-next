import React, { useState, useEffect } from "react";
import CartItem from "../cart-item";
import Card from "../../ui/Card";
import { getShippingMethods, getShopCart } from "../../../@core/api/shopApi";
import { useQuery } from "react-query";
import useCartStore from "../../../store/shop-cart";

function Cart() {
  const setCartItems = useCartStore((state) => state.setCartItems);
  const setItemTotals = useCartStore((state) => state.setItemTotals);
  const setShippingMethods = useCartStore((state) => state.setShippingMethods);
  const setSelectedShipping = useCartStore(
    (state) => state.setSelectedShipping
  );
  const cartItems = useCartStore((state) => state.cartItems);
  const itemTotals = useCartStore((state) => state.itemTotals);
  const shippingMethods = useCartStore((state) => state.shippingMethods);
  const selectedShipping = useCartStore((state) => state.selectedShipping);

  // Fetch shopCartData using useQuery
  const { data: shopCartData } = useQuery("shopCart", getShopCart);

  // Update local state when shopCartData prop changes
  useEffect(() => {
    setCartItems(shopCartData?.items || []);
    setItemTotals({});
  }, [shopCartData]);

  // Fetch shipping methods when the component mounts
  useEffect(() => {
    const fetchShippingMethods = async () => {
      try {
        const methods = await getShippingMethods();
        setShippingMethods(methods);
        setSelectedShipping(methods[0]); // Set the default shipping method
      } catch (error) {
        console.error("Error fetching shipping methods", error);
      }
    };

    fetchShippingMethods();
  }, []);

  const updateItemTotal = (itemName, total) => {
    const itemQuantity =
      cartItems.find((item) => item.product.name === itemName)?.quantity || 0;

    if (itemQuantity > 0 && !isNaN(total)) {
      setItemTotals((prevItemTotals) => ({
        ...prevItemTotals,
        [itemName]: total,
      }));
    } else {
      setCartItems((prevCartItems) =>
        prevCartItems.filter((item) => item?.product.name !== itemName)
      );
    }
  };

  // Calculate subtotal and bag total
  const subtotal =
    Array.isArray(cartItems) && cartItems.length != []
      ? cartItems?.reduce((acc, item) => {
          const total = item?.product?.price * item.quantity || 0;
          return acc + total;
        }, 0)
      : 0;
  console.log(subtotal, "suhbbbb");
  // Calculate shipping cost based on the selected shipping method
  const shippingCost = selectedShipping?.cost || 0;

  const bagTotal = subtotal + shippingCost;
  console.log(cartItems, "cart");
  return (
    <div className="mt-5">
      {Array.isArray(cartItems) && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <CartItem
            key={index}
            updateItemTotal={updateItemTotal}
            {...item.product}
            quantity={item.quantity}
            size={item.size}
            color={item.color}
          />
        ))
      ) : (
        <Card className="my-3">Your cart is empty.</Card>
      )}
      <Card>
        {/* Display subtotal, shipping, and bag total */}
        <div className="flex justify-between mb-2 border-b pb-2">
          <h2 className="text-m font-bold">SubTotal</h2>
          <span className="text font-extrabold">${subtotal}</span>
        </div>
        <div className="flex justify-between mb-2 border-b pb-2">
          <h2 className="text-m font-bold">Shipping</h2>
          <span className="text font-extrabold">${shippingCost}</span>
        </div>
        <div className="flex justify-between">
          <h2 className="text-m font-bold">Bag Total</h2>
          <span className="text-primary font-bold">${bagTotal}</span>
        </div>
      </Card>
    </div>
  );
}

export default Cart;
