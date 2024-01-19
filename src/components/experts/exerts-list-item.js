import React from "react";
import Image from "next/image";
import Card from "../ui/Card";
import useExpertStore from "../../store/booked-experts";
import StarRatings from "react-star-ratings";
import Link from "next/link";

const ExpertsListItem = ({ expert }) => {
  const { bookedExperts, addExpert, removeExpert } = useExpertStore();

  const handleAddExpert = () => {
    const { id, name, category, price, rating, image } = expert;

    // Create a new object with only serializable data
    const serializedExpert = {
      id,
      name,
      category,
      price,
      rating,
      image: image,
    };

    // Dispatch the addExpert action with the serialized expert object
    dispatch(addExpert(serializedExpert));
  };
  return (
    <div className="w-full mb-3">
      <Card>
        <div className="flex items-center h-full  justify-between">
          <div className=" flex gap-5">
            <div className=" h-[100px] w-[100px]  relative">
              <Image
                src={expert.image}
                alt={expert.name}
                layout="fill"
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
            </div>
            <div>
              <p className="font-bold text text-left">{expert.name}</p>

              <div className="">
                <p className="text-mutedText text-left text-s">
                  {expert.category}
                </p>
              </div>
              <div className=" items-center">
                <p className="text-fundation text-s text-left">
                  {expert.price}$
                </p>
              </div>
              <div className="flex items-center !text-primary text-s">
                <StarRatings
                  rating={expert.rating / 5}
                  starRatedColor="rgb(111 56 197 / var(--tw-text-opacity))"
                  numberOfStars={1}
                  name="rating"
                  starDimension="13"
                />
                <span className="ml-2">{expert.rating}</span>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-between !h-24  text-s">
            <Link
              href={`/experts/${expert.id.toString()}`}
              className="text-primary text-s"
            >
              View Profile
            </Link>
            <button
              onClick={handleAddExpert}
              className="button !text-s !my-0 !p-1"
            >
              Book
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExpertsListItem;
