import React from "react";
import { ArrowRight } from "../../@core/icons";
import Close from "../../@core/icons/svgs/close";
import Link from "next/link";

import {
  HandIndex,
  Gear,
  Share,
  Bell,
  PersonGear,
  Heart,
  Star,
  Instagram,
  ChatLeftDots,
} from "react-bootstrap-icons";

const ProfileItems = () => {
  const profileItems = [
    { label: "Setting", icon: <Gear />, href: "/profile/settings" },
    { label: "Refer & Earn", icon: <Share />, href: "/" },
    { label: "Inbox", icon: <Bell />, href: "/" },
    {
      label: "Manage Product Orders",
      icon: <HandIndex />,
      href: "/store/manage-product-orders",
    },
    { label: "Manage Booked Services", icon: <PersonGear />, href: "/" },
    { label: "My Discounts", icon: "%", href: "/" },
    { label: "My Favorites", icon: <Heart />, href: "/" },
    { label: "Rate Us", icon: <Star />, href: "/" },
    { label: "Social Media", icon: <Instagram />, href: "/" },
    { label: "Contact Help Center", icon: <ChatLeftDots />, href: "/" },
    { label: "Logout", icon: <Close />, href: "/" },
  ];

  return (
    <div>
      <ul className="bg-white px-4 py-2 my-3 rounded-lg">
        {profileItems.map((item, index) => (
          <li
            key={index}
            className={`flex justify-between items-center py-2 ${
              item.label === "Logout" ? "" : "border-b-1"
            }`}
          >
            <Link href={item.href} className="inline-block w-full">
              <div className=" flex justify-between items-center">
                <div className="flex gap-2 items-center p">
                  <div className="text-mutedText">{item.icon}</div>
                  <div
                    className={`font-bold text-15px ${
                      item.label === "Logout" ? "text-error" : ""
                    }`}
                  >
                    {item.label}
                  </div>
                </div>
                <div>
                  <ArrowRight color="black" />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileItems;
