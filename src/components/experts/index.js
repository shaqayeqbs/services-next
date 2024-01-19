import React from "react";
import ExpertsListItem from "./exerts-list-item";

const ListComponent = ({ experts, limit }) => {
  const expertsToShow = limit ? experts?.slice(0, limit) : experts;

  return (
    <div className=" p-5 pt-0 my-0">
      {expertsToShow.map((expert, index) => (
        <ExpertsListItem key={index} expert={expert} />
      ))}
    </div>
  );
};

export default ListComponent;
