// pages/experts/[id].js
import React from "react";
import { useRouter } from "next/router";

import ExpertProfile from "../../src/components/profile/expert-profile";
const ExpertPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <ExpertProfile expertId={id} />
    </div>
  );
};

export default ExpertPage;
