import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function Reviews() {
  const Review = () => (
    <div className="mt-6 w-96 shrink-0 max-w-sm">
      <p>
        “From start to finish, they delivered exceptional craftsmanship and
        ensured every aspect of the project was executed flawlessly. We are
        thrilled with the outcome and highly recommend All State Specialist LLC.
        for their outstanding work!"
      </p>
      <p className="font-bold">- Company Name</p>
      <div className="flex items-center space-x-1 mt-3">
        <StarIcon className="h-7 w-7 text-orange" />
        <StarIcon className="h-7 w-7 text-orange" />
        <StarIcon className="h-7 w-7 text-orange" />
        <StarIcon className="h-7 w-7 text-orange" />
        <StarIcon className="h-7 w-7 text-orange" />
      </div>
    </div>
  );

  return (
    <div className="sm:p-8 p-2">
      <div>
        <p className="text-5xl md:text-[90px] lg:text-[125px] font-bold leading-none tracking-tighter">
          Our Customers Speak Volumes of{" "}
          <span className="text-orange">Satisfaction!</span>
        </p>
        <div className="flex items-center flex-nowrap space-x-6 overflow-auto">
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
