import React from "react";
import SearchBox from "../search/search-box";
import { Menu, Notif } from "../../@core/icons";
import BackButton from "../../@core/utils/back-button";
import { Cart3 } from "react-bootstrap-icons";
import Link from "next/link";

function TopNav({ backButton, cartIcon }) {
  return (
    <nav className="flex p-5 pt-0 !items-center w-full pb-0 justify-between">
      {backButton && (
        <div className="flex justify-center mt-0 mr-1 items-center">
          <BackButton />
        </div>
      )}
      <Link
        href="/profile"
        className="flex justify-between my-auto mt-7 items-center gap-4 mr-3"
      >
        <Menu />
      </Link>

      <SearchBox />
      <div className="flex justify-between my-auto mt-7 items-center gap-4 ml-3">
        {cartIcon && (
          <Link href="/cart-and-peyment">
            <Cart3 />
          </Link>
        )}
        {!cartIcon && (
          <Link
            href="/notification"
            className="flex justify-between my-auto items-center "
          >
            <Notif />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default TopNav;
