import React, { useState } from "react";
import { categoriesData } from "../../@core/data/categories";
import dummyExpertData from "../../@core/data/experts";
function Filter({ onChangedList }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    const updatedCategory =
      category === "All" ? "All" : category.toLocaleLowerCase();

    setSelectedCategory(updatedCategory);

    const filteredExperts =
      updatedCategory === "All"
        ? dummyExpertData
        : dummyExpertData.filter(
            (item) => item.category.toLocaleLowerCase() == updatedCategory
          );

    onChangedList(filteredExperts);
  };

  return (
    <div className="flex overflow-x-scroll  w-full my-5 px-3 !text-s  no-scrollbar">
      <div
        onClick={() => handleCategoryClick("All")}
        className={`cursor-pointer  hover:bg-gray-200 rounded-2xl mx-1 ${
          "All" === selectedCategory ? "bg-primary" : ""
        }`}
      >
        <p
          className={`cursor-pointer px-5 w-max h-[2rem] p-1 text-s hover:bg-primary rounded-2xl ${
            "All" === selectedCategory
              ? "bg-primary !text-[white] "
              : " border-primary border-2 "
          }`}
        >
          All
        </p>
      </div>
      {categoriesData.map((category, index) => (
        <div
          key={index}
          onClick={() => handleCategoryClick(category.name)}
          className={`cursor-pointer text-s  hover:bg-primary rounded-2xl mx-1 ${
            category.name === selectedCategory ? "bg-primary" : ""
          }`}
        >
          <p
            className={`cursor-pointer p-1  h-[2rem] w-max px-3 text-s hover:text-[white] hover:bg-primary rounded-2xl ${
              category.name === selectedCategory
                ? "bg-primary !text-[white] "
                : " border-primary border-2 "
            }`}
          >
            {category.name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
