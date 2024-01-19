import { useEffect, useState } from "react";
import { Home, Calender, Experts, Plus, Store } from "../../@core/icons/index";
import { useRouter } from "next/router";
import Link from "next/link";
const BottomNavigation = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  console.log(token, "eeeeeeeeeeeeeeeeeeee");
  useEffect(() => {
    // Run only on the client side
    // if (typeof window !== "undefined") {
    //   // Access localStorage
    //   const storedToken = localStorage.getItem("token");
    //   setToken(storedToken);
    //   // If there is no token and the user is not authenticated, redirect to /auth/welcome
    //   if (storedToken === null) {
    //     console.log(storedToken, "wwwwwwwwwww");
    //     router.push("/auth/welcome");
    //   }
    // }
  }, [router, token]);

  const navigationItems = [
    {
      to: "/",
      text: "Home",
      icon: (
        <Home color={router.pathname === "/" ? "#6F38C5" : "black"} size="24" />
      ),
    },
    {
      to: "/experts",
      text: "Experts",
      icon: (
        <Experts
          color={router.pathname === "/experts" ? "#6F38C5" : "black"}
          size="24"
        />
      ),
    },
    {
      to: "/orders",
      text: "Order Service",
      icon: (
        <Plus
          color={router.pathname == "/order" ? "#6F38C5" : "black"}
          size="24"
        />
      ),
    },
    {
      to: "/store",
      text: "Store",
      icon: (
        <Store
          color={router.pathname.includes("store") ? "#6F38C5" : "black"}
          size="24"
        />
      ),
    },
    {
      to: "/calender",
      text: "Calender",
      icon: (
        <Calender
          color={router.pathname === "/calender" ? "#6F38C5" : "black"}
          size="24"
        />
      ),
    },
  ];

  return (
    <nav className="fixed   container bottom-[-2px]  rounded-t-3xl z-20 left-0 right-0 text-s bg-myGray flex justify-around p-3 border-t">
      {navigationItems.map((item, index) => (
        <Link
          key={index}
          href={item.to}
          className={`text-center pt-1  mx-auto flex-col flex items-center ${
            router.pathname == item.to ? "!text-primary" : ""
          }`}
        >
          <div
            className={`h-5  ${
              router.pathname == item.to ? "!text-primary " : ""
            }`}
          >
            {item.icon}
          </div>
          <p className="my-1 text-inherit ">{item.text}</p>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
