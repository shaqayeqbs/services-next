import React from "react";
import Card from "../ui/Card";
function MaskedCardNumber({ cardType }) {
  return (
    <Card className="p-4 hover:border-primary hover:border-2 mb-4 flex justify-between items-center">
      <img
        src={`/assets/icons/peyment/${cardType}.svg`}
        alt={`${cardType} Logo`}
        className="w-8 h-8 mr-4"
      />
      <p>*********2109</p>
    </Card>
  );
}

function StepSix() {
  // Array of card types
  const cardTypes = ["visa", "paypal", "apple", "maestro"];

  return (
    <div>
      {cardTypes.map((type) => (
        <MaskedCardNumber key={type} cardType={type} />
      ))}
    </div>
  );
}

export default StepSix;
