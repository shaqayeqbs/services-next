import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import Link from "next/link";

function SeeAll({ title, link }) {
  return (
    <div className="flex justify-between p-5 ">
      <h2 className="font-bold text-m">{title}</h2>
      <Link href={link} className="flex gap-3 items-center">
        <div className="flex gap-3 items-center">
          <p className="text-primary text">See All</p>
          <ChevronRight
            className="text-primary "
            color="rgb(111 56 197 / var(--tw-text-opacity))"
            size={14}
          />
        </div>
      </Link>
    </div>
  );
}

export default SeeAll;
