import BottomNavigation from "./bottom-nav";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  // List of routes where BottomNavigation should be displayed
  const routesWithBottomNav = [
    "/",
    "/orders",
    "/calender",
    "/cancel",
    "/store",
    "/experts",
    "/profile",
    "/store/categories",
    "/store/[categoires]",
    "/store/[...id]",
    "/store/[id]",
    "/services/categories",
    "/services",
    "/services/[categories]",
  ];

  const shouldDisplayBottomNav = routesWithBottomNav.includes(router.pathname);

  return (
    <div>
      {children}
      {shouldDisplayBottomNav && <BottomNavigation />}
    </div>
  );
};

export default Layout;
