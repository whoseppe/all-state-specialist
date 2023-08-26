"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import droneImage from "../../../public/drone-view-min.jpg";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { titleInEase } from "../utils";

function ServicesAnimation() {
  const letterWrapperRef = useRef();
  const letters = [
    "o",
    "u",
    "r",
    "",
    "",
    "s",
    "e",
    "r",
    "v",
    "i",
    "c",
    "e",
    "s",
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pinned",
          start: "top center",
          end: "center 10%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".text1",
        { y: 200 },
        {
          y: 0,
          stagger: {
            amount: 1,
          },
          ease: titleInEase,
        }
      );

      tl.fromTo(
        ".flip-letter",
        {
          transformOrigin: "50% 50%",
          rotationX: -270,
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          ease: titleInEase,
          opacity: 1,
          duration: 2,
          stagger: 0.6,
          rotationX: 0,
        },
        "<"
      );

      gsap.fromTo(
        ".animate-image",
        { scale: 1.9, opacity: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".image-trigger",
            start: "top 80%",
            end: "center",
            scrub: 1,
            toggleActions: "restart none reverse pause",
          },
          stagger: {
            amount: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-8">
      <div className="overflow-hidden w-screen h-screen image-trigger">
        <Image
          src={droneImage}
          className="w-full h-full object-cover animate-image"
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-col items-center justify-center pinned">
        <div
          ref={letterWrapperRef}
          className="overflow-hidden h-32 sm:h-44 lg:h-58 w-full flex flex-nowrap justify-center my-32"
        >
          {letters.map((i, index) => (
            <p
              key={i + index}
              className={`text-5xl sm:text-7xl md:text-7xl lg:text-[200px] font-forum uppercase ${
                i === "u" || i === "c" ? "flip-letter text-orange" : "text1"
              } ${i === "" ? "ml-4" : ""} ${
                index % 2 === 0 ? "text-slide-up" : "text-slide-down"
              }`}
            >
              {i}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesAnimation;
