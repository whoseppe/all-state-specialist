"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Mission() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".slide-text", {
        opacity: 0.0,
        duration: 2,
        delay: 0.1,
        stagger: {
          amount: 1.5,
        },
        scrollTrigger: {
          trigger: ".slide-text",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="p-4 max-w-3xl">
        <p className="font-forum text-5xl text-center slide-text">
          Our Mission
        </p>
        <p className="font-bold text-lg text-center mt-6 slide-text">
          Constructing Excellence, Every Project, Every Time!
        </p>
        <p className="text-center text-2xl lg:text-4xl sm:max-w-3xl mt-4 slide-text">
          At All State Specialist LLC, we are on a mission to redefine
          <span className="font-bold text-orange"> excellence</span> in the
          construction industry. With unwavering commitment, we craft each
          project with meticulous attention to detail, delivering{" "}
          <span className="font-bold text-orange">unparalleled quality</span>{" "}
          and exceeding expectations, making excellence our standard—every
          project, every time.
        </p>
      </div>
    </div>
  );
}

export default Mission;
