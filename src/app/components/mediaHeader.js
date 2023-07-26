"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

function MediaHeader() {
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const tl = gsap.timeline();

  //     tl.from(".text-reveal", {
  //       y: 100,
  //       duration: 1.2,
  //       ease: "power4.out",
  //       delay: 1.5,
  //       skewY: 7,
  //       stagger: {
  //         amount: 0.3,
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="relative bg-orange w-full h-screen">
      <div className="absolute w-full h-full bg-black-950 opacity-50 z-10" />
      <video
        loop
        autoPlay
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/all-state.mov" type="video/mp4" />
      </video>
      <div className="relative w-full h-full z-20">
        <div className="pl-3 sm:pl-6 pt-24">
          <div className="overflow-hidden">
            <p className="text-6xl lg:text-7xl font-bold">Welcome to </p>
            <p className="text-orange text-6xl lg:text-7xl font-bold">
              All State Specialist LLC.
            </p>
          </div>

          <p className="mt-2">
            Your Trusted Partner for Construction Excellence in the Phoenix
            Area!
          </p>
        </div>
      </div>
    </div>
  );
}

export default MediaHeader;
