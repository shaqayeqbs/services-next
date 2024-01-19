import React, { useState } from "react";
import Card from "../ui/card";
import IncDecInputBtn from "../../@core/utils/inc-dec-input-btn";

function StepTwo() {
  const [hours, setHours] = useState(1);

  const handleServiceChange = (service, value) => {
    // Define your logic for handling service change here
    console.log(`${service} changed to ${value} hours`);
  };

  return (
    <div>
      <Card className="mb-3">
        <label className="flex text-fundation justify-between items-center">
          Working hours
          <IncDecInputBtn
            value={hours}
            onIncrease={() => setHours(hours + 1)}
            onDecrease={() => setHours(hours - 1 > 0 ? hours - 1 : 1)}
            onChange={(e) => handleServiceChange("livingRoom", e.target.value)}
          />
        </label>
      </Card>
      <Card>
        <h2 className="font-bold">Do you want on-demand service?</h2>
        <p className="text-mutedText">
          It means our experts will be there now. it may include extra wage.
        </p>
        <div className="flex justify-center gap-5">
          <button className="border-1 p-1 px-4 border-black rounded-lg mt-4 hover:bg-primary hover:text-[white]">
            Yes
          </button>
          <button className="border-1 p-1 px-4 border-black rounded-lg mt-4 hover:bg-primary hover:text-[white]">
            No
          </button>
        </div>
      </Card>
    </div>
  );
}

export default StepTwo;
