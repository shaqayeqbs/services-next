import React, { useEffect, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import Card from "../ui/Card";
import IncDecInputBtn from "../../@core/utils/inc-dec-input-btn";
import APP_CONFIG from "../../@core/constants/app-config";
import {
  AddToShoppingCart,
  removeFromoShoppingCart,
} from "../../@core/api/shopApi";
import useCartStore from "../../store/shop-cart";

const CartItem = ({ name, size, color, price, id, single_image }) => {
  const setItemTotals = useCartStore((state) => state.setItemTotals);
  const cartItems = useCartStore((state) => state.cartItems);

  // Log the cartItems array
  console.log("Current Cart Items:", cartItems);

  const item = cartItems.find((item) => item?.product?.name === name);
  const itemQuantity = item ? item.quantity : 0;

  const setCartItems = useCartStore((state) => state?.setCartItems);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const removeFromCart = async () => {
    try {
      const response = await removeFromoShoppingCart({
        product_id: id,
        size_id: size?.id,
        color_id: color?.id,
      });
      console.log(response, "res");
      if (itemQuantity > 1) {
        console.log("yes");
        // Decrease quantity if greater than 1
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.product.name === name
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
            : cartItem
        );
        console.log(updatedCartItems, "seretryterh");
        setCartItems(updatedCartItems);
      } else {
        console.log("whyyyyyyyyyyyyyy");
        // Remove the item from the cart if the quantity is 1 or less
        setItemTotals(name, 0);
        setCartItems(cartItems.filter((item) => item?.product?.name != name));
      }
    } catch (error) {
      console.error("Error removing item from the shopping cart", error);
    }
  };

  const handleIncrease = useCallback(async () => {
    try {
      const response = await AddToShoppingCart({
        product_id: id,
        size_id: size?.id,
        color_id: color?.id,
      });

      if (item) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.product.name === name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        console.log(updatedCartItems, "ssdfewfrtergjrnmosjl");
        setCartItems(updatedCartItems);
      } else {
        // Add a new item to cartItems
        setCartItems([
          ...cartItems,
          { product: { name, id }, size, color, quantity: 1 },
        ]);
      }
    } catch (error) {
      console.error("Error adding item to the shopping cart", error);
    }
  }, [id, name, size?.id, color?.id, itemQuantity, setCartItems]);

  useEffect(() => {
    const total = price * itemQuantity;
    if (setItemTotals) {
      setItemTotals(name, total);
    }

    if (itemQuantity === 0) {
      removeFromCart();
    }
  }, [name, itemQuantity, price, setItemTotals, removeFromCart]);

  return (
    <div className="text-decoration-none">
      <Card className="mb-3 px-3 py-1 items-center">
        <div className="flex items-center">
          <Link href={`/store/${name}/${id}`}>
            <div className="flex-shrink-0 relative w-[117px] h-[100px] mr-4">
              <Image
                src={APP_CONFIG?.apiBaseUrl + single_image?.image}
                alt={name}
                layout="fill"
                className=" rounded-xl"
              />
            </div>
          </Link>
          <div className="flex-grow">
            <h2 className="text-m font-bold">{name}</h2>
            <div className="flex mb-2 text gap-x-3">
              <span className="">Size:</span> {size?.name}
            </div>
            <div className="flex mb-2 text gap-x-3">
              <span className="">Color:</span> {color?.name}
            </div>
            <div className="flex mb-2 text gap-x-3">
              <span className="">Price:</span> ${price}
            </div>
          </div>
        </div>
        <hr className="my-2" />
        <div>
          <div className="flex items-center justify-between text ">
            <div className="flex items-center">
              <span className="font-bold">Total Order:</span>
              <div className="ml-3 py-[2px] mb-1 border-2 rounded-xl ">
                <IncDecInputBtn
                  value={itemQuantity}
                  onIncrease={handleIncrease}
                  onDecrease={removeFromCart}
                  store
                />
              </div>
            </div>

            <div className="text font-extrabold">
              ${(price * itemQuantity).toFixed(2)}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default memo(CartItem);
