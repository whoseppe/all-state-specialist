"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import concreteImage from "../images/concrete-min.jpg";
import massGradingImage from "../images/mass-grading-min.jpg";
import wetUtilitiesImage from "../images/wet-utilities-min.jpg";
import dryUtilitiesImage from "../images/dry-utilities-min.jpg";
import structuresImages from "../images/structures-min.jpg";
import asphaltImage from "../images/asphalt-min.jpg";

import Image from "next/image";
import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);

function ServicesContent() {
  const containerRef = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".horizontal-card", {
        x: () => -(containerRef.current.scrollWidth - window.innerWidth),
        scrollTrigger: {
          trigger: containerRef.current,
          pin: containerRef.current,
          start: "center 55%",
          end: () =>
            "+=" + (containerRef.current.scrollWidth - window.innerWidth),
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  const handleClick = (ref, on) => {
    const tl = gsap.timeline({ yoyo: true });

    if (on) {
      tl.to(ref.current, {
        height: 112,
      });
    } else {
      tl.to(ref.current, {
        height: "100%",
      });
    }
  };

  const ServicesCard = ({ title, image, overlayRef, body }) => {
    const [on, setOn] = useState(false);
    return (
      <div
        className="h-full w-96 m-2 shrink-0 relative horizontal-card cursor-pointer"
        onClick={() => {
          setOn(!on);
          handleClick(overlayRef, on);
        }}
      >
        <div className="absolute w-full h-full flex flex-col justify-end">
          <div
            className="w-full bg-black-950 bg-opacity-70 flex items-center justify-center h-[112px]"
            ref={overlayRef}
          >
            <div>
              <div className="flex flex-nowrap justify-center items-center">
                <p className="font-bold text-2xl text-orange">{title}</p>
                {on ? (
                  <ChevronDoubleDownIcon className="h-5 w-5 ml-1 text-orange" />
                ) : (
                  <ChevronDoubleUpIcon className="h-5 w-5 ml-1 text-orange" />
                )}
              </div>
              <p className={`mt-2 font-bold p-4 ${on ? "" : "hidden"}`}>
                {body}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={image}
          className="w-full h-full object-cover"
          alt="Picture of the author"
        />
      </div>
    );
  };

  return (
    <div
      className="mt-10 overflow-hidden"
      style={{ height: window.innerHeight - 100 }}
      ref={containerRef}
    >
      <div className="h-full flex flex-nowrap pl-2">
        <ServicesCard
          title="Mass Grading"
          body="Our mass grading services involve the precise and efficient movement of earth to prepare sites for construction. Our skilled team utilizes state-of-the-art equipment and advanced techniques to ensure accurate grading, proper drainage, and a solid foundation for your projects. We carefully consider site plans, soil conditions, and environmental factors to deliver optimal results.
 "
          image={massGradingImage}
          overlayRef={ref1}
        />
        <ServicesCard
          body="All State Specialist LLC. specializes in wet utilities, encompassing the installation and maintenance of water and sewer systems. From underground pipe installations to pump stations and stormwater management, we have the knowledge and experience to handle projects of varying complexities. We adhere to industry standards and regulations, ensuring the safe and efficient operation of wet utility systems."
          title="Wet Utilities"
          image={wetUtilitiesImage}
          overlayRef={ref2}
        />
        <ServicesCard
          body="Our dry utilities services cover the installation and maintenance of electrical, telecommunications, and natural gas systems. We work closely with utility providers and clients to plan and execute precise installations, ensuring reliable connections and efficient distribution of services. Safety and compliance are paramount as we navigate the complexities of dry utility infrastructure."
          title="Dry Utilities"
          image={dryUtilitiesImage}
          overlayRef={ref3}
        />
        <ServicesCard
          body="All State Specialist LLC. is equipped to construct a wide range of structures, from commercial buildings to industrial facilities. Our team of engineers, architects, and skilled tradespeople collaborate to deliver structurally sound and visually impressive results. We adhere to building codes, quality standards, and client specifications to create functional and aesthetically pleasing structures that stand the test of time."
          title="Structure"
          image={structuresImages}
          overlayRef={ref4}
        />

        <ServicesCard
          body="We excel in all aspects of concrete construction. Our expertise includes foundations, slabs, walls, sidewalks, curbs, and more. We work with precision, paying attention to proper formwork, reinforcement, and concrete mix design to ensure durability and longevity. Whether it's a residential new construction project or a large-scale commercial development, we deliver exceptional concrete work to meet your specific requirements."
          title="Concrete"
          image={concreteImage}
          overlayRef={ref5}
        />
        <ServicesCard
          body="Asphalt paving is one of our specialties, catering to projects such as roadways, parking lots, and pathways. Our experienced team utilizes industry-leading techniques and equipment to deliver smooth and durable asphalt surfaces. We focus on proper site preparation, efficient installation, and meticulous finishing to create safe and visually appealing paved areas."
          title="Asphalt Paving"
          image={asphaltImage}
          overlayRef={ref6}
        />
        <div className="h-full w-4 horizontal-card shrink-0" />
      </div>
    </div>
  );
}

export default ServicesContent;
