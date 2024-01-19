import React from "react";
import { useQuery } from "react-query";
import Categories from "../../src/components/categories";
import TopNav from "../../src/components/navbar/top-nav";
import Carousel from "../../src/components/carousel";
import SeeAll from "../../src/@core/utils/see-all";
import MultiImageCarosel from "../../src/components/carousel/multi-img-carousel";
import { shopCategories } from "../../src/@core/api/shopApi";
import {
  getShopProducts,
  getShopSuperDiscount,
  getSpecialOffers,
} from "../../src/@core/api/shopApi";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"; // Import Skeleton

function Store() {
  // Fetch categories data using react-query
  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useQuery("shopCategories", () => shopCategories({ page: 1 }));

  // Fetch shop products data
  const {
    data: shopProductsData,
    isLoading: shopProductsLoading,
    isError: shopProductsError,
  } = useQuery("shopProducts", () => getShopProducts({ page: 1 }));

  // Fetch super discount products data
  const {
    data: superDiscountData,
    isLoading: superDiscountLoading,
    isError: superDiscountError,
  } = useQuery("superDiscountProducts", () =>
    getShopSuperDiscount({ page: 1 })
  );
  const {
    data: specialoffersData,
    isLoading: specoaoffersLoading,
    isError: specialoffersError,
  } = useQuery("specialoffersProducts", () => getSpecialOffers({ page: 1 }));
  console.log("special", specialoffersData);
  return (
    <div className="container">
      <TopNav cartIcon />

      {/* Carousel for Super Discount */}
      {superDiscountLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton count={1} height={200} className="container bg-[white]" />
        </SkeletonTheme>
      ) : (
        <Carousel data={specialoffersData?.specialOffers} />
      )}
      <h2 className="font-bold text-left px-5  pb-3 text-m">Categories</h2>
      {/* Categories */}
      <div className="bg-[white] px-5 py-1 shadow-lg">
        {categoriesLoading ? (
          <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
            <Skeleton
              count={4}
              height={100}
              className="my-custom-categories-skeleton flex justify-between"
            />
          </SkeletonTheme>
        ) : categoriesError ? (
          <p>Error fetching categories</p>
        ) : (
          <Categories
            data={categoriesData?.data}
            limit={4}
            more
            style="!flex"
          />
        )}
      </div>

      {/* New Arrivals */}
      <SeeAll title="New Arrivals" link="/store/new-arrivals" />
      {shopProductsLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton
            count={1}
            height={400}
            className="my-custom-new-arrivals-skeleton"
          />
        </SkeletonTheme>
      ) : (
        <MultiImageCarosel data={shopProductsData?.data} store />
      )}

      {/* Super Discount */}
      <SeeAll title="Super Discount" link="/store/super-discount" />
      {shopProductsLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton
            count={1}
            height={400}
            className="my-custom-super-discount-skeleton"
          />
        </SkeletonTheme>
      ) : (
        <MultiImageCarosel data={shopProductsData?.data} store />
      )}

      {/* Suggestions */}
      <SeeAll title="Suggestion For you" link="/store/suggestion-for-you" />
      {shopProductsLoading ? (
        <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
          <Skeleton
            count={1}
            height={400}
            className="my-custom-suggestions-skeleton"
          />
        </SkeletonTheme>
      ) : (
        <MultiImageCarosel data={shopProductsData?.data} store />
      )}

      <div className="mb-28"></div>
    </div>
  );
}

export default Store;
