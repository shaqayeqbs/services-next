import React from "react";
import { useQuery } from "react-query";
import TopNav from "../../src/components/navbar/top-nav";
import BackButton from "../../src/@core/utils/back-button";
import StorePageSlides from "../../src/components/carousel/store-page-slides";
import { getNewArrivals } from "../../src/@core/api/shopApi";
import Skeleton from "react-loading-skeleton";

function NewArrivals() {
  const {
    data: newArrivalsData,
    isLoading,
    isError,
    error,
  } = useQuery("newArrivals", () => getNewArrivals({ page: 1 }));

  if (isLoading) {
    // Display loading skeleton while fetching data
    return (
      <div className="px-4 container">
        <TopNav cartIcon />
        <div className="mx-3">
          <BackButton title={<Skeleton width={120} />} />
        </div>
        <div className="grid mt-5 grid-cols-2 mdgrid-cols-3 gap-1 items-center">
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
    return <p>Error fetching new arrivals: {error.message}</p>;
  }

  return (
    <div className="px-4 container">
      <TopNav cartIcon />
      <div className="mx-3">
        <BackButton title="New Arrivals" />
      </div>
      <div className="grid mt-5 grid-cols-2 mdgrid-cols-3 gap-1 items-center">
        {newArrivalsData?.newArrival.map((item, index) => (
          <StorePageSlides
            key={index}
            style="bg-white !w-[153px] mx-auto"
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;
