"use client";
import React, { useEffect, useState, useLayoutEffect, useContext } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { AppContext } from "./provider";

function OpenAnimation() {
  let { setShowMobileNav } = useContext(AppContext);
  const [showLoading, setShowLoading] = useState(true);

  const router = useRouter();
  const [phrase, setPhrase] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    setPhrase(phrases[Math.floor(Math.random() * 14)]);
  }, []);

  useLayoutEffect(() => {
    setShowMobileNav(false);
    let ctx = gsap.context(() => {
      const textTl = gsap.timeline({
        defaults: {
          duration: 0.8,
          ease: "power2",
          repeat: 1,
          yoyo: true,
        },
      });

      textTl.from(".text-animation", {
        delay: 0.2,
        y: 145,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      });
    });

    gsap.to(".overlay", {
      delay: 1.8,
      duration: 0.8,
      height: 0,
      ease: "power2",
      y: 100,
      onComplete: () => {
        setShowLoading(false);
      },
    });
    return () => ctx.revert();
  }, []);

  const phrases = [
    "Paving The Future",
    "Building Dreams",
    "Design-Build Excellence",
    "Transforming Spaces",
    "Building Arizona's Best",
    "Precision at Work",
    "Innovate. Construct.",
    "Phoenix's Trusted Builders.",
    "Building the Future, Together.",
    "Where Dreams Take Shape.",
    "Crafting Arizona's Landscapes.",
    "Designing, Building, Inspiring.",
    "Building Communities, Building Lives.",
    "Raising the Bar in Construction.",
  ];

  if (!showLoading) return null;

  return (
    <div className="w-screen h-screen fixed z-[100] flex flex-col justify-end">
      <div className="bg-black-950 overlay w-full h-full flex flex-col items-center justify-center">
        <div className="h-24 w-full overflow-hidden flex justify-center items-center">
          <p className="text-animation text-3xl lg:text-7xl text-center font-bold text-orange tracking-tighter">
            {phrase}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OpenAnimation;
