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

  const Review = ({ review, reviewType }) => (
    <div className="mt-6 w-full max-w-lg relative">
      <div className="w-full h-full bg-orange absolute reveal" />
      <p className="text-lg">&quot;{review}&quot;</p>
      <p className="font-bold">- {reviewType}</p>
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
    <div className="w-full flex flex-col items-center">
      <div className="mt-40 p-3 sm:p-6">
        <div>
          <HeaderTextSlide
            headline="Our Customers Speak Volumes of Satisfaction!"
            orangeWords="Satisfaction!"
          />
          <div className="flex justify-center">
            <div className="flex items-center flex-wrap lg:flex-nowrap lg:space-x-6">
              <Review
                review="I recently had the pleasure of working with All State Specialist LLC for a commercial concrete project, and I couldn't be happier with the results. Sam, who was in charge of the project, was incredibly helpful from start to finish. He took the time to understand our needs and provided expert advice on the best approach. The team's attention to detail and craftsmanship was outstanding. The final concrete work was flawless, exceeding our expectations. I highly recommend All State Specialist LLC for their top-notch commercial concrete services."
                reviewType="Mass Grading Expertise"
              />
              <Review
                review="Shawn and his team at All State Specialist LLC are true professionals when it comes to mass grading. We hired them for a complex grading project on our property, and the results speak for themselves. From the initial consultation to the final touches, the team demonstrated their expertise and commitment to quality. The precision and care they put into the grading work ensured a smooth and even foundation for our upcoming construction project. If you're in need of reliable mass grading services, look no further than All State Specialist LLC."
                reviewType="Exceptional Wet Utilities Work"
              />
              <Review
                review="I had the privilege of working with All State Specialist LLC on a wet utilities project, and I'm thoroughly impressed with their performance. Shawn, the owner, personally oversaw the project, and his dedication to excellence was evident throughout. The team's knowledge and efficiency in handling wet utility installations were remarkable. They completed the project on time and within budget, all while maintaining the highest standards of quality and safety. For anyone seeking top-tier wet utilities services, All State Specialist LLC is the company to trust."
                reviewType="Exceptional Wet Utilities Work"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
