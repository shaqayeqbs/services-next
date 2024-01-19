import React from "react";
import Card from "../ui/Card";

const OrderTabs = ({ listType, handleListTypeChange, store }) => {
  return (
    <Card className="flex mt-4 space-x-4 text-fundation font-bold bg-[white] rounded-lg p-3 py-4">
      <button
        onClick={() => handleListTypeChange("completed")}
        className={`w-full ${listType === "completed" ? "active" : ""}`}
      >
        {store ? "Processing" : " Completed"}
      </button>
      <button
        onClick={() => handleListTypeChange("history")}
        className={`w-full ${listType === "history" ? "active" : ""}`}
      >
        History
      </button>
      <button
        onClick={() => handleListTypeChange("draft")}
        className={`w-full ${listType === "draft" ? "active" : ""}`}
      >
        Drafts
      </button>
    </Card>
  );
};

export default OrderTabs;
