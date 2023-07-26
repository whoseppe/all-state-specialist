"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SlideUp({ children }) {
  const el = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        {
          y: 200,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: el.current,
            end: "top 65%",
            scrub: 1,
            toggleActions: "restart none reverse pause",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={el} className="slide-up-animation">
      {children}
    </div>
  );
}

export default SlideUp;
