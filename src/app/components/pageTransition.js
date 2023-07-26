"use client";
import React, { useEffect, useContext, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";
import { AppContext } from "./provider";

function PageTransition({ routeFlow, setRouteFlow }) {
  let { setShowTransition } = useContext(AppContext);
  const router = useRouter();
  const [phrase, setPhrase] = useState("");
  const [firstComplete, setFirstComplete] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setPhrase(phrases[Math.floor(Math.random() * 14)]);
  }, []);

  useEffect(() => {
    if (routeFlow[0] === routeFlow[1]) {
      setShowTransition(false);
    } else {
      triggerOpen();
    }
  }, []);

  useEffect(() => {
    if (firstComplete && pathname === routeFlow[1]) {
      triggerClose();
    }
  }, [firstComplete, pathname]);

  const triggerOpen = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2" },
      onComplete: () => {
        setFirstComplete(true);
        router.push(routeFlow[1]);
      },
    });
    tl.fromTo(".overlay", { height: 0, y: 100 }, { height: "100%", y: 0 }).from(
      ".text-animation",
      {
        y: 145,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      }
    );
  };
  const triggerClose = () => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2", delay: 0.2 },
      onComplete: () => {
        setShowTransition(false);
        setRouteFlow([]);
      },
    });

    tl.fromTo(".overlay", { height: "100%", y: 0 }, { height: 0, y: 100 });
  };

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

  if (routeFlow[0] === routeFlow[1]) return null;

  return (
    <div className="w-screen h-screen fixed z-50 flex flex-col justify-end">
      <div className="bg-orange overlay w-full h-0 flex flex-col items-center justify-center">
        <div className="h-24 w-full overflow-hidden flex justify-center items-center">
          <p className="text-animation text-3xl lg:text-7xl text-center font-bold text-black-950 tracking-tighter">
            {phrase}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageTransition;
