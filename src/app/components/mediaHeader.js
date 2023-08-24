import React, { useLayoutEffect } from "react";
import ScrollDown from "./scrollDown";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MediaHeader() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".mouse", {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          ease: "power4.out",
          trigger: ".mouse",
          start: "bottom center",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="absolute w-full h-full bg-black-950 opacity-50 z-10" />
      <video
        loop
        autoPlay
        muted
        playsInline
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
      <div className="absolute bottom-1 w-full mouse">
        <ScrollDown />
      </div>
    </div>
  );
}

export default MediaHeader;
