import React from "react";
import Card from "../ui/Card";
import StarRatings from "react-star-ratings";

function Reviews({ data }) {
  return (
    <Card>
      {data.map((review, index) => (
        <div
          key={index}
          className="mb-4 relative bg-background rounded-lg py-1 px-2"
        >
          <div className="flex items-center gap-2">
            {" "}
            <p className="font-bold">{review.user_name}</p>
            <p className="text-mutedText">{`| ${review.created_at?.slice(
              0,
              10
            )}`}</p>
          </div>
          <div className="absolute flex  items-center gap-2 top-0 right-2">
            <p className="text-s  text-fundation">{review?.rating}</p>
            <div className="mb-1">
              <StarRatings
                rating={review.rating}
                starRatedColor="#F7B305"
                numberOfStars={review?.rating}
                starDimension="15px"
                starSpacing="1px"
              />
            </div>
          </div>
          <p className="text-left w-full my-2">{review.comment}</p>
        </div>
      ))}
    </Card>
  );
}

export default Reviews;
