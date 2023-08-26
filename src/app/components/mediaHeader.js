"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import ScrollDown from "./scrollDown";
import { gsap } from "gsap";
import logo from "../../../public/logo-white.png";
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
      <div className="relative w-full h-full flex flex-col items-center justify-center z-20">
        <div className="-mt-24 flex flex-col items-center w-full">
          <Image
            src={logo}
            className="h-full w-48 lg:w-1/6 max-w-xl object-contain lg:mb-10"
            alt="Picture of the author"
          />
          <p className="text-2xl lg:text-5xl font-bold text-center max-w-3xl">
            Your <span className="text-orange">Trusted Partner</span> for
            Construction Excellence in the Phoenix Area!
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
