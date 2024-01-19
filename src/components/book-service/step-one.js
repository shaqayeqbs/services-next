import React, { useState } from "react";
import Card from "../ui/card";
import IncDecInputBtn from "../../@core/utils/inc-dec-input-btn";
function StepOne() {
  const handlePriceButtonClick = () => {
    // Handle the logic when the button is clicked
    console.log("Service details:", services);
  };

  const handleDetailsChange = (e) => {
    setServices((prevServices) => ({
      ...prevServices,
      additionalDetails: e.target.value,
    }));
  };
  const handleServiceChange = (service, value) => {
    setServices((prevServices) => ({
      ...prevServices,
      [service]: value,
    }));
  };

  const [services, setServices] = useState({
    livingRoom: 0,
    terrace: 0,
    bedroom: 3,
    bathroom: 1,
    kitchen: 1,
    garage: 0,
    additionalDetails: "",
    price: 123.0,
  });

  return (
    <div className="">
      <Card className="mb-3">
        <label className="flex text-fundation justify-between items-center">
          Living Room
          <IncDecInputBtn
            value={services.livingRoom}
            onIncrease={() =>
              handleServiceChange("livingRoom", services.livingRoom + 1)
            }
            onDecrease={() =>
              handleServiceChange(
                "livingRoom",
                services.livingRoom > 0 ? services.livingRoom - 1 : 0
              )
            }
            onChange={(e) => handleServiceChange("livingRoom", e.target.value)}
          />
        </label>
      </Card>
      <div>
        <label>
          <textarea
            className=" w-full rounded-lg shadow-lg input p-3 !min-h-[8rem]"
            placeholder="Write more details here ..."
            value={services.additionalDetails}
            onChange={handleDetailsChange}
          />
        </label>
      </div>
    </div>
  );
}

export default StepOne;
