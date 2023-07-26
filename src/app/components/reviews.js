"use client";
import React, { useLayoutEffect } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import HeaderTextSlide from "./headerTextSlide";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Reviews() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal",
        { width: "100%" },
        {
          width: 0,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            ease: "power4.out",
            trigger: ".reveal",
            start: "top bottom",
          },
          stagger: {
            amount: 0.2,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const Review = () => (
    <div className="mt-6 w-full lg:w-96 max-w-sm relative">
      <div className="w-full h-full bg-orange absolute reveal" />
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
    <div className="mt-40 p-3 sm:p-6">
      <div>
        <HeaderTextSlide
          headline="Our Customers Speak Volumes of Satisfaction!"
          orangeWords="Satisfaction!"
        />
        <div className="flex items-center flex-wrap lg:flex-nowrap lg:space-x-6">
          <Review />
          <Review />
          <Review />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
