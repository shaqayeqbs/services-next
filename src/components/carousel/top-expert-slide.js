import React from "react";
import Image from "next/image";
import { Price } from "../../@core/icons";
import StarRatings from "react-star-ratings";

function TopExpertSlides({ item }) {
  return (
    <div className="w-[126px] lg!w-[300px] lg!h-[280px] h-[180px] mb-2  bg-primary/5 relative rounded-xl">
      <div className="w-[126px] lg!w-[300px] lg!h-[150px]  h-[81px] relative">
        <Image
          src={item.image}
          alt={item.title}
          layout="fill"
          className="overflow-hidden rounded-t-xl"
        />
      </div>
      <div className="py-4 ml-3 text-left">
        <div className="flex items-center justify-between">
          <p className="text-left font-bold text-s w-[85%] leading-3 whitespace-normal">
            {item.name}
          </p>
          <div className="flex items-center absolute right-0 top-[47%] mr-1 align-middle h-[14px]">
            <div className="flex items-center m-auto  h-[14px] ">
              <StarRatings
                rating={item.rating / 5}
                starRatedColor="#FFD700"
                numberOfStars={1}
                name="rating"
                starDimension="12"
              />
            </div>
            <span className="inline-block text-s mt-[3px] text-fundation">
              {item.rating}
            </span>
          </div>
        </div>
        <p className="text text-left text-mutedText">{item.category}</p>
        <div className="flex items-center mt-2">
          <span className="text-xl">
            <Price />
          </span>
          <p className="ml-1 leading-3 text-mutedText">{item.price}$</p>
        </div>
      </div>
    </div>
  );
}

export default TopExpertSlides;
