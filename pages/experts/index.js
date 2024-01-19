import React, { useState } from "react";
import ListComponent from "../../src/components/experts";
import dummyExpertData from "../../src/@core/data/experts";
import TopNav from "../../src/components/navbar/top-nav";
import Filter from "../../src/components/filter";

function Experts() {
  const [list, setList] = useState(dummyExpertData);
  const onChangedList = (data) => {
    setList(data);
  };

  return (
    <main className="container">
      <TopNav />
      <Filter onChangedList={onChangedList} />
      <div className="mb-16">
        <ListComponent experts={list} />
      </div>
    </main>
  );
}

export default Experts;
