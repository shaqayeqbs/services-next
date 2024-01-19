import React from "react";
import Categories from "../../src/components/categories";
import TopNav from "../../src/components/navbar/top-nav";
import { useShopCategories } from "../../src/@core/api/querys";
import BackButton from "../../src/@core/utils/back-button";
import PageLoader from "../../src/@core/utils/PageLoader";

function CategoriesPage() {
  const {
    data: categoriesData,
    isLoading,
    isError,
    error,
  } = useShopCategories();

  return (
    <PageLoader isLoading={isLoading}>
      <div className="container">
        <TopNav />
        <div className="ml-3">
          <BackButton title="Categories" />
        </div>

        {isError && <p>Error fetching categories: {error.message}</p>}
        {categoriesData && <Categories data={categoriesData?.data} />}
      </div>
    </PageLoader>
  );
}

export default CategoriesPage;
