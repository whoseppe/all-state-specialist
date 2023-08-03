"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import logo from "../../../public/logo-black.png";
import { gsap } from "gsap";

function MobileNav({ setShowMobileNav }) {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef();
  const [shouldClose, setShouldClose] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current, { width: 0 }, { width: "100%" });

      gsap.from(".fade-in", {
        opacity: 0,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".link-animate", {
        y: 100,
        skewY: 7,
        duration: 0.8,
        ease: "power2",
        delay: 0.5,
        stagger: {
          amount: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const close = (route) => {
    if (pathname === route) return;
    setShouldClose(true);
    router.push(route);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (shouldClose) {
        gsap.to(".link-animate", {
          y: 100,
          skewY: 7,
          duration: 0.8,
          ease: "power2",
          stagger: {
            amount: 0.3,
          },
        });
        gsap.to(".fade-in", {
          opacity: 0,
          duration: 1,
          delay: 0.2,
        });
        gsap.to(containerRef.current, {
          width: 0,
          x: 20,
          delay: 0.8,
          onComplete: () => setShowMobileNav(false),
        });
      }
    });

    return () => ctx.revert();
  }, [pathname]);

  const closeAnimation = () => {
    gsap.to(".link-animate", {
      y: 100,
      skewY: 7,
      duration: 0.8,
      ease: "power2",
      stagger: {
        amount: 0.3,
      },
    });
    gsap.to(".fade-in", {
      opacity: 0,
      duration: 1,
      delay: 0.2,
    });
    gsap.to(containerRef.current, {
      width: 0,
      x: 20,
      delay: 0.8,
      onComplete: () => setShowMobileNav(false),
    });
  };

  const MobileLink = ({ name, route }) => (
    <div className={"h-22 overflow-hidden"} onClick={() => close(route)}>
      <div className="flex items-center cursor-pointer link-animate">
        <p
          className={`${
            pathname === route ? "underline" : ""
          } text-7xl font-bold cursor-pointer p-2`}
        >
          {name}
        </p>
        <ArrowUpRightIcon className="h-12 flex-shrink-0 w-12 text-blue-500" />
      </div>
    </div>
  );

  return (
    <div className="w-screen h-screen fixed text-black-950 z-50">
      <div className="flex w-full justify-end h-full">
        <div
          ref={containerRef}
          className="w-full h-full bg-orange p-2 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center fade-in">
              <div className="cursor-pointer" onClick={() => close("/")}>
                <Image
                  src={logo}
                  className="h-12 w-32 object-contain"
                  alt="Picture of the author"
                />
              </div>

              <XMarkIcon
                className="h-12 flex-shrink-0 w-12 text-blue-500"
                onClick={() => closeAnimation()}
              />
            </div>
            <div className="flex flex-col space-y-2 mt-8">
              <MobileLink name="About" route="/about" />

              <MobileLink name="Services" route="/services" />

              <MobileLink name="Safety" route="/safety" />

              <MobileLink name="Careers" route="/careers" />

              <MobileLink name="Contact" route="/contact" />
            </div>
          </div>
          <div className="pb-20">
            <p className="text-xs fade-in">
              Copyright © 2023 All State Specialist LLC. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
