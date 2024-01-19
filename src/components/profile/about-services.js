import React from "react";
import Card from "../ui/Card";
import StarRatings from "react-star-ratings";

function AboutServices() {
  return (
    <div className="p-4">
      <Card>
        <h2 className="font-bold">About Expert</h2>
        <p className="text">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites
        </p>
      </Card>
      <Card className="my-3">
        <h2 className="font-bold">General Info</h2>
        <div className="flex gap-x-3 items-center text m-auto ">
          <div className=" text-primary ">
            {" "}
            <StarRatings
              rating={4 / 10}
              starRatedColor="rgb(111 56 197 / var(--tw-text-opacity))"
              numberOfStars={1}
              name="rating"
              starDimension="12"
            />
          </div>
          <p>Rating : 4.8</p>
        </div>

        <p>Work History: 12 years</p>
        <p className="text">History With servyca: 2 years/34 wok-sample</p>
      </Card>
    </div>
  );
}

export default AboutServices;
