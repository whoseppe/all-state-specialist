"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);

function ServicesCard({ containerRef, title, image }) {
  const overlayRef = useRef();

  useEffect(() => {
    const cont = containerRef.current;

    gsap.to(".horizontal-card", {
      x: () => -(1291 - window.innerWidth),
      scrollTrigger: {
        trigger: cont,
        pin: cont,
        start: "center 55%",
        end: () => "+=" + (1291 - window.innerWidth),
        scrub: true,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  const handleClick = () => {
    const tl = gsap.timeline();
    tl.to(overlayRef.current, {
      height: "100%",
    });
  };

  return (
    <div
      className="h-full w-96 m-2 shrink-0 relative horizontal-card cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="absolute w-full h-full flex flex-col justify-end">
        <div className="w-full bg-black-950 bg-opacity-60 flex items-center justify-center h-28 overlay">
          <p className="font-bold text-2xl text-orange">{title}</p>
          <ChevronDoubleUpIcon className="h-5 w-5 ml-1 text-orange" />
        </div>
      </div>
      <Image
        src={image}
        className="w-full h-full object-cover"
        alt="Picture of the author"
      />
    </div>
  );
}

export default ServicesCard;
