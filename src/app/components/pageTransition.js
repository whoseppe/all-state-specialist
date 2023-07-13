"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

function PageTransition({ setShowTransition }) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: "power2" },
        yoyo: true,
        repeat: 1,
        onComplete: () => setShowTransition(false),
      });
      // use scoped selectors
      tl.fromTo(
        ".overlay",
        { height: 0, y: 100 },
        { height: "100%", y: 0 }
      ).from(".text-animation", {
        y: 125,
        ease: "power4.out",
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-screen h-screen fixed z-50 flex flex-col justify-end">
      <div className="bg-orange overlay w-full h-full flex flex-col items-center justify-center">
        <div className="h-24 w-full overflow-hidden flex justify-center items-center">
          <p className="text-animation text-7xl font-bold text-black tracking-tighter">
            Paving The Future
          </p>
        </div>
      </div>
    </div>
  );
}

export default PageTransition;
