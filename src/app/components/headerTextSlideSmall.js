"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeaderTextSlideSmall({
  headline,
  orangeWords = "",
  delay = 0,
  scrub,
}) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".small-letter-slide-animate",
        { opacity: 0.1 },
        {
          opacity: 1,
          delay,
          duration: 0.5,
          scrollTrigger: {
            start: "center 10%",
            scrub,
            trigger: ".small-letter-slide-animate",
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
    <div className="flex flex-wrap max-w-3xl mt-4">
      {headline.split(" ").map((word, index) => (
        <div
          key={word + index}
          className={`mr-6 ${
            orangeWords.split(" ").includes(word) ? "text-orange" : ""
          }`}
        >
          {word.split("").map((letter, index) => (
            <p
              key={letter + index}
              className="text-6xl font-bold inline small-letter-slide-animate"
            >
              {letter}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default HeaderTextSlideSmall;
