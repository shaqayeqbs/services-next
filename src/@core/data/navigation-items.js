import { Home, Calender, Experts, Plus, Store } from "../icons/index";
export const navigationItems = [
  { to: "/", text: "Home", icon: <Home style={{ color: "red" }} size="24" /> },
  {
    to: "/experts",
    text: "Experts",
    icon: <Experts size="24" />,
  },

  {
    to: "/order",
    text: "Order Service",
    icon: <Plus size="24" />,
  },
  {
    to: "/store",
    text: "Store",
    icon: <Store size="24" />,
  },
  {
    to: "/calender",
    text: "Calender",
    icon: <Calender size="24" />,
  },
];
