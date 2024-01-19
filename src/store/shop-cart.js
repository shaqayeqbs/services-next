import create from "zustand";

const useCartStore = create((set) => ({
  cartItems: [],
  itemTotals: {},
  shippingMethods: [],
  selectedShipping: null,
  setCartItems: (cartItems) => set({ cartItems }),
  setItemTotals: (itemTotals) => set({ itemTotals }),
  setShippingMethods: (shippingMethods) => set({ shippingMethods }),
  setSelectedShipping: (selectedShipping) => set({ selectedShipping }),
}));

export default useCartStore;
