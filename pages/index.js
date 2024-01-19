import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import Link from "next/link";
import { useQuery } from "react-query";
import TopNav from "../src/components/navbar/top-nav";
import Carousel from "../src/components/carousel";
import Categories from "../src/components/categories";
import RecomendedData from "../src/@core/data/recomended";
// import MultiImageCarosel from "../src/components/carousel/multi-img-carousel";
// import SeeAll from "../src/@core/utils/see-all";
import dummyExpertData from "../src/@core/data/experts";
import { getShopSuperDiscount } from "../src/@core/api/shopApi";
// import ListComponent from "../src/components/lists";
import dynamic from "next/dynamic";

const DynamicList = dynamic(() => import("../src/components/experts"), {});
const DynamicSeeAll = dynamic(() => import("../src/@core/utils/see-all"), {});
// const DynamicSwiper = dynamic(() => import("../src/components/carousel"), {});
const DynamicMultiImg = dynamic(
  () => import("../src/components/carousel/multi-img-carousel"),
  {}
);

const MyComponent = () => {
  const { t, i18n } = useTranslation(); // Destructure i18n from useTranslation

  console.log(i18n.language); // Access the current language through i18n.language
  const {
    data: superDiscountData,
    isLoading: superDiscountLoading,
    isError: superDiscountError,
  } = useQuery("superDiscountProducts", () =>
    getShopSuperDiscount({ page: 1 })
  );
  console.log("superdiscount,", superDiscountData);
  return (
    <main className="container">
      <TopNav />
      {/* <Link href="/auth/welcome" locale={i18n.language}> */}
      <Carousel data={superDiscountData?.superDiscount} />
      <Categories more limit={5} link="/services" />
      <DynamicSeeAll title="Recommended Services" link="/services" />
      <DynamicMultiImg data={RecomendedData} />
      <DynamicSeeAll title="Top Experts" link="/experts" />
      <DynamicMultiImg data={dummyExpertData} expert />
      <DynamicSeeAll title="Best Experts Near You" link="/experts" />
      <DynamicList experts={dummyExpertData} limit={3} />
      <DynamicSeeAll title="Best Experts Near You" link="/experts" />

      {/* </Link> */}
    </main>
  );
};

export default MyComponent;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
