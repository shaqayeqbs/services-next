import React from "react";
import TopNav from "../../src/components/navbar/top-nav";
import BackButton from "../../src/@core/utils/back-button";
import Categories from "../../src/components/categories";

function ServiceCategories() {
  return (
    <>
      <TopNav />
      <div className="px-4">
        {" "}
        <BackButton title="what kind of service do you want?" />
      </div>

      <Categories link="/services" />
    </>
  );
}

export default ServiceCategories;
