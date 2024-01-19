import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const PageLoader = ({ isLoading, children }) => {
  return isLoading ? (
    <div className="container">
      <SkeletonTheme color="#d9d9d9" highlightColor="#e6e6e6">
        <Skeleton count={3} height={100} />
      </SkeletonTheme>
    </div>
  ) : (
    <>{children}</>
  );
};

export default PageLoader;
