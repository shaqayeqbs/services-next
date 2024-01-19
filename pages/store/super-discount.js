import React from "react";
import { useQuery } from "react-query";
import TopNav from "../../src/components/navbar/top-nav";
import BackButton from "../../src/@core/utils/back-button";
import StorePageSlides from "../../src/components/carousel/store-page-slides";
import { getShopSuperDiscount } from "../../src/@core/api/shopApi";
import Skeleton from "react-loading-skeleton";

function SuperDiscount() {
  const {
    data: superdiscountData,
    isLoading,
    isError,
  } = useQuery("superDiscount", getShopSuperDiscount);

  if (isLoading) {
    // Display loading skeletons while fetching data
    return (
      <div className="px-5 container">
        <TopNav cartIcon />
        <div className="mx-3">
          <BackButton title={<Skeleton width={120} />} />
        </div>
        <div className="grid mt-5 grid-cols-2 lggrid-cols-3 gap-1 items-center">
          {[...Array(6).keys()].map((index) => (
            <StorePageSlides
              key={index}
              style="bg-white mx-auto"
              item={<Skeleton height={300} />}
            />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return <p>Error fetching special offers: {isError.message}</p>;
  }
  console.log(superdiscountData);
  return (
    <div className="px-5 container">
      <TopNav cartIcon />
      <div className="mx-3">
        <BackButton title="Super Discount" />
      </div>
      <div className="grid mt-5 grid-cols-2 lggrid-cols-3 gap-1 items-center">
        {superdiscountData?.superDiscount?.map((item, index) => (
          <StorePageSlides
            key={index}
            style="bg-white !w-[88%] mx-auto"
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default SuperDiscount;
