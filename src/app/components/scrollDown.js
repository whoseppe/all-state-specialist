"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const ScrollDown = () => {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        repeat: 20,
        duration: 0.6,
        yoyo: true,
        ease: "power1.inOut",
      });
      tl.fromTo(
        ".wheel",
        { y: 5, opacity: 0.5 },
        {
          y: 30,
          opacity: 1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-10 h-16 border-4 border-black-950  rounded-[100px] flex flex-col justify-start items-center">
        <div className="w-5 h-5 rounded-full bg-black-950 wheel" />
      </div>
      <p className="text-black-950 font-bold">Scroll Down</p>
    </div>
  );
};

export default ScrollDown;
