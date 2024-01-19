import React from "react";
import Image from "next/image";
import Link from "next/link";
import APP_CONFIG from "../../@core/constants/app-config";
import { Plus, Heart } from "react-bootstrap-icons";

function StorePageSlides({ item, style }) {
  const placeholderSrc = "/assets/card-image.svg";

  return (
    <Link
      href={`/store/${item?.name?.toLowerCase()}/${item?.id?.toString()}`}
      className={`${
        style ? style : ""
      } w-[136px] h-[217px] lgh-full   relative mb-2  leading-3  rounded-xl`}
    >
      <div className="w-full  flex justify-center  !h-[149px] relative">
        <button className="bg-primary z-30 !font-bold rounded-full p-1 absolute top-2 right-2 ">
          <Heart color="white" size={11} className="!font-bold" />
        </button>
        <div className="relative w-full">
          {" "}
          <img
            src={
              item?.single_image?.image
                ? APP_CONFIG.apiBaseUrl + item.single_image?.image
                : placeholderSrc
            }
            alt={item.name}
            layout="fill"
            className={
              item?.single_image?.image
                ? "overflow-hidden !w-full object-cover  !h-full rounded-t-xl"
                : "text-myGray !w-20 !h-full  m-auto !items-center"
            }
          />
        </div>
      </div>
      <div
        className={`${
          style ? style : "bg-background"
        } w-full mx-auto py-2  pl-2 rounded-b-xl text-left `}
      >
        <div className="flex items-center justify-between">
          <p className="text-left font-bold text-s leading-3">{item?.name}</p>
        </div>

        {item?.discount_percent > 0 && (
          <div className="flex space-x-1 text-error">
            <p className="text-s">{item?.discount_percent}%</p>
            <p className="text-s">Off</p>
          </div>
        )}

        {item?.discount_percent < 1 && (
          <p className="text-s text-[#666666]">{item?.description}</p>
        )}
        <p className="text-s text-left m-0 text-mutedText">
          {item?.category?.name}
        </p>
        <div className="flex items-center ">
          <p className=" text leading-4 font-bold">${item?.price}</p>
        </div>
        <button className="bg-primary !font-bold rounded-full p-1 absolute bottom-2 right-2 ">
          <Plus color="white" size={13} />
        </button>
      </div>
    </Link>
  );
}

export default StorePageSlides;
