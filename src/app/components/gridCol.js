import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GridCol({ startVal = 0, endVal, images }) {
  const imgRef = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { y: startVal },
        {
          y: endVal,
          scrollTrigger: {
            scrub: 1,
            trigger: imgRef.current,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const GridImage = ({ image }) => (
    <div className={`h-96 w-full shrink-0 relative`}>
      <Image
        src={image}
        className="w-full h-full object-cover"
        alt="Picture of the author"
      />
    </div>
  );

  return (
    <div className="flex-1 space-y-2" ref={imgRef}>
      <GridImage image={images[0]} />
      <GridImage image={images[1]} />
      <GridImage image={images[2]} />
      <GridImage image={images[3]} />
      <GridImage image={images[4]} />
    </div>
  );
}

export default GridCol;
