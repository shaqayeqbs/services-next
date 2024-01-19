import React from "react";
import BackButton from "../src/@core/utils/back-button";
import { XCircle } from "react-bootstrap-icons";

function Cancel() {
  return (
    <div className="p-5">
      <BackButton />
      <div className="flex flex-col items-center justify-center min-h-[700px] bg-red">
        <div className="text-center">
          <XCircle
            className="mx-auto mb-5 text-primary font-extralight"
            size={56}
            color="rgb(111 56 197 / var(--tw-text-opacity))"
          />
          <h2 className="text-primary font-bold text-2xl">
            Booking Cancelled!
          </h2>
          <p className="text-m my-3 leading-loose">
            Dear John Kevin, you have successfully cancelled your order on date
            12 Dec. We hope to serve you better.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cancel;
