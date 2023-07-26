"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

function ServicesCard({ title, image, body, reverse }) {
  const overlayRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      overlayRef.current,
      { width: "100%" },
      {
        width: 0,
        ease: "power2",
        duration: 1.5,
        scrollTrigger: {
          trigger: overlayRef.current,
          start: "center 90%",
        },
      }
    );
  }, []);

  return (
    <div
      className={`flex w-full justify-between flex-wrap lg:flex-nowrap h-full ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="h-full w-full lg:w-1/2 relative">
        <div ref={overlayRef} className="w-full h-full absolute bg-black-950" />
        <Image
          src={image}
          className="w-full h-full object-cover p-1"
          alt="Picture of the author"
        />
      </div>

      <div className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:px-4 flex flex-col justify-between">
        <div>
          <p className="font-forum text-6xl">{title}</p>
          <p className="mt-2 text-sm opacity-80">{body}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
