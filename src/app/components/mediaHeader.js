"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

function MediaHeader() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".text-reveal", {
        y: 100,
        duration: 1.2,
        ease: "power4.out",
        delay: 1.5,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

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
      <div className="relative w-full h-full flex items-center justify-center z-20">
        <div className="p-6">
          <div className="h-18 sm:h-12 overflow-hidden">
            <p className="text-reveal text-3xl font-bold text-center">
              Welcome to{" "}
              <span className="text-orange">All State Specialist LLC.</span>
            </p>
          </div>
          <div className="overflow-hidden h-14">
            <p className="text-reveal mt-2 text-center">
              Your Trusted Partner for Construction Excellence in the Phoenix
              Area!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaHeader;
