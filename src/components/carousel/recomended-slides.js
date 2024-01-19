import React from "react";
import Image from "next/image";
import { Price } from "../../@core/icons";

function RecomendedSlides({ item, bgColor, bookBtn }) {
  return (
    <div
      className={`w-[80%] lgw-full  mb-4 items-center mx-auto relative rounded-xl ${
        bgColor ? bgColor : "bg-background !w-[139px] lg!w-[300px]"
      }`}
    >
      <div
        className={`${
          bgColor
            ? "w-full h-[81px] relative"
            : "w-[139px] lg!w-[300px] lgh-[130px] h-[81px] relative"
        }`}
      >
        <Image
          src={item.coverImage}
          alt={item.title}
          layout="fill"
          className="overflow-hidden rounded-xl"
        />
      </div>
      <div className=" py-2  pl-2 leading-3 text-left">
        <p className="text-left font-bold whitespace-normal">{item.title}</p>
        <div className="flex items-center">
          <div className="w-[21px] lgh-[30px] lgw-[30px] h-[21px] relative rounded-full overflow-hidden mr-2">
            <Image src={item.profileAvatar} alt={item.name} layout="fill" />
          </div>
          <p className="text whitespace-normal text-mutedText !w-max">
            {item.name}
          </p>
        </div>
        <div className="flex items-center">
          <span className="text-xl">
            <Price />
          </span>
          <p className="ml-1 text-mutedText">{item.priceRange}$</p>
        </div>
      </div>
      {bookBtn && (
        <button className="button !w-min mx-auto !p-1 !my-0 !mb-2 !px-5 !rounded-2xl !text-s">
          Book
        </button>
      )}
    </div>
  );
}

export default RecomendedSlides;
