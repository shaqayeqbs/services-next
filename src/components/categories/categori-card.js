import Image from "next/image";
import APP_CONFIG from "../../@core/constants/app-config";

const CategoryCard = ({ name, icon }) => {
  return (
    <div className=" border-1 text  hover:bg-primary hover:text-[white] border-black rounded-3xl  gap-2 p-3 flex justify-center items-center">
      <div className="rounded-full  text-left relative  w-full h-[20px]  flex items-center ">
        {" "}
        <Image
          width={30}
          height={30}
          src={APP_CONFIG?.apiBaseUrl + icon}
          alt="icon"
          className="w-[rem] h-[1.2rem]"
        />
      </div>
      <div className="whitespace-nowrap w-full text-center">{name}</div>
      <div className="w-full"></div>
    </div>
  );
};

export default CategoryCard;
