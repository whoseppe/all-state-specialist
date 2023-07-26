"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeaderTextSlide({ headline, orangeWords = "", delay = 0, scrub }) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".letter-slide-animate",
        { opacity: 0.1 },
        {
          opacity: 1,
          delay,
          duration: 0.5,
          scrollTrigger: {
            scrub,
            trigger: ".letter-slide-animate",
          },
          stagger: {
            amount: 2,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-wrap">
      {headline.split(" ").map((word, index) => (
        <div
          key={word + index}
          className={`mr-2 md:mr-6 ${
            orangeWords.split(" ").includes(word) ? "text-orange" : ""
          }`}
        >
          {word.split("").map((letter, index) => (
            <p
              key={letter + index}
              className="text-5xl md:text-[90px] lg:text-[125px] font-bold leading-none tracking-tighter inline letter-slide-animate"
            >
              {letter}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HeaderTextSlide;
