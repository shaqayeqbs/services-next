import Link from "next/link";
import { Experts } from "../../@core/icons/index";
import CategoryCard from "./categori-card";
import { categoriesData } from "../../@core/data/categories";
import APP_CONFIG from "../../@core/constants/app-config";
import Image from "next/image";
const Categories = ({
  style,
  limit = categoriesData.length,
  link,
  more,
  data = categoriesData,
}) => {
  const categoriesToShow = data?.slice(0, limit);
  console.log(data, "d");
  return (
    <div
      className={`${
        style ? style : "grid p-5 grid-cols-2  lggrid-cols-6"
      } my-5  gap-4 gap-x-3 justify-center`}
    >
      {style &&
        categoriesToShow.map((category, index) => (
          <Link
            key={index}
            href={`${
              link
                ? `${link}/${category.name.toLowerCase()}`
                : `/store/${category.name.toLowerCase()}`
            }`}
          >
            <div key={index} className="w-full flex-col  items-center ">
              <div className="rounded-full relative  border-1 mx-auto  w-[56px] h-[56px]  flex items-center justify-center border-textColor  font-bold">
                {" "}
                <Image
                  width={30}
                  height={30}
                  src={APP_CONFIG?.apiBaseUrl + category?.icon}
                  alt="icon"
                  className="w-[rem] h-[1.2rem]"
                />
              </div>
              <div className="text-s w-max items-center mx-auto mt-2">
                {category.name}
              </div>
            </div>
          </Link>
        ))}
      {style && more < 6 && (
        <Link href={`${link ? link : "/store/categories"}`}>
          <div className="">
            <div className="rounded-full border-1   w-[56px] h-[56px]  flex items-center justify-center border-textColor  font-bold">
              ...
            </div>
            <div className="text-s w-max mx-auto text-center mt-2">More</div>
          </div>
        </Link>
      )}
      {!style &&
        categoriesToShow.map((category, index) => (
          <Link
            key={index}
            href={`${
              link
                ? `${link}/${category.name.toLowerCase()}`
                : `/store/${category.name.toLowerCase()}`
            }`}
          >
            <CategoryCard key={index} {...category} />
          </Link>
        ))}
      {!style && more && (
        <Link href={`${link ? link : "/store/categories"}`}>
          <CategoryCard name="More ..." icon={<Experts color="black" />} />
        </Link>
      )}
    </div>
  );
};

export default Categories;
