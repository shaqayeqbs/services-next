import Link from "next/link";
import { useState } from "react";
import dummyExpertData from "../../../src/@core/data/experts"; // Adjust the path to your data file
import BackButton from "../../../src/@core/utils/back-button";

const CategoryItemPage = ({ item }) => {
  // Placeholder state for item quantity
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  console.log(item, "ssssssss");
  return (
    <div className="relative">
      <div className="absolute text-center left-4 bg-[white] top-5 border-2 border-fundation w-[2rem] h-[2rem]  rounded-full">
        <BackButton />
      </div>
      <div>
        <img src={item?.image} alt={item?.name} />
      </div>
      <div className="bg-[white] m-3 ">
        <h1>{item?.name}</h1>
        <div>
          <p>Brand: {item?.brand}</p>
          <p>Rate: {item?.rate}</p>
        </div>
        <hr />
        <div>
          {/* <p>Size: {item.size}</p>
          <p>Color: {item.color}</p> */}
        </div>
        <div>
          <p>Description: {item?.description}</p>
          <p>Delivery Time: {item?.deliveryTime}</p>
        </div>
        <div>
          <p>Price: ${item?.price}</p>
          <div>
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { category, id } = context.params;
  const item = dummyExpertData.find((expert) => expert.id == id);

  if (!item) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      item: item,
    },
  };
}

export default CategoryItemPage;
