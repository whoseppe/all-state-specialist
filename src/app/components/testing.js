"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

// import s from "./Scenography.module.scss";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { titleInEase } from "../utils";
gsap.registerPlugin(ScrollTrigger);
const Testing = () => {
  const letterWrapperRef = useRef();
  const videoRef = useRef();
  const innerRef = useRef();
  const timelineRef = useRef(gsap.timeline({ paused: true }));
  const imgRef = useRef();

  const [activeImg, setActiveImg] = useState(0);

  // const onClick = (direction) => {
  //   if (activeImg === 1 && direction === "right") {
  //     return;
  //   }

  //   if (activeImg === 0 && direction === "left") {
  //     return;
  //   }

  //   const imgs = Array.from(
  //     document.querySelectorAll("[data-scenography-img]")
  //   );

  //   gsap.to(imgs[activeImg], {
  //     opacity: 0,
  //   });

  //   if (direction === "right") {
  //     setActiveImg(activeImg + 1);
  //   } else {
  //     setActiveImg(activeImg - 1);
  //   }
  //   // const img = document.querySelector
  // };

  // useEffect(() => {
  //   const imgs = Array.from(
  //     document.querySelectorAll("[data-scenography-img]")
  //   );

  //   gsap.to(imgs[activeImg], {
  //     opacity: 1,
  //   });
  // }, [activeImg]);

  useEffect(() => {
    // const imgs = Array.from(
    //   document.querySelectorAll("[data-scenography-img]")
    // );

    // for (let i = 0; i < imgs.length; i++) {
    //   if (i === 0) {
    //     imgs[i].style.opacity = 1;
    //   } else {
    //     imgs[i].style.opacity = 0;
    //   }
    // }

    const text = "scenography";

    const letters = text.split("");
    const spansArray = [];

    const even = [];
    const odds = [];

    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.innerHTML = letter;

      span.setAttribute("data-animation", "");

      if (i % 2 === 0) {
        even.push(span);
      } else {
        odds.push(span);
      }

      if (letter.toLowerCase() === "c") {
        span.classList.add("yellow");
        span.removeAttribute("data-animation");
        span.setAttribute("data-rotation", "");
      }
      if (letter.toLowerCase() === "p" || letter.toLowerCase() === "f") {
        span.classList.add("salmon");
        span.removeAttribute("data-animation");
        span.setAttribute("data-rotation", "");
      }

      letterWrapperRef.current.appendChild(span);
      spansArray.push(span);
    });

    const lettersToReveal = document.querySelectorAll(
      "#scenography h1 [data-animation]"
    );
    const lettersToRotate = document.querySelectorAll(
      "#scenography h1 [data-rotation]"
    );

    gsap.fromTo(
      odds,
      {
        y: "17%",
        opacity: 1,
      },
      {
        y: "100%",
        scrollTrigger: {
          trigger: letterWrapperRef.current,
          start: `${window.innerHeight * 0.75}px center`,
          end: `+=50%`,
          scrub: true,
          // markers: {},
          onEnter: () => {
            letterWrapperRef.current.style.overflow = "initial";
          },
          // onRefresh: () => {
          //   console.log("refresh odds");
          // },
        },
      }
    );

    gsap.fromTo(
      even,
      {
        y: "17%",
        opacity: 1,
      },
      {
        y: "-100%",
        scrollTrigger: {
          trigger: letterWrapperRef.current,
          start: `${window.innerHeight * 0.75}px center`,
          end: `+=50%`,
          scrub: true,
          // markers: {},
          // onRefresh: () => {
          //   console.log("refresh even");
          // },
        },
      }
    );

    gsap.fromTo(
      imgRef.current,
      {
        scale: 0,
        translateX: "-50%",
        translateY: "-50%",
      },
      {
        translateX: "-50%",
        translateY: "-50%",
        scale: 1,
        scrollTrigger: {
          trigger: letterWrapperRef.current,
          start: `${window.innerHeight}px center`,
          end: `+=50%`,
          scrub: true,
          onEnter: () => {
            videoRef.current.play();
          },
        },
      }
    );

    letterWrapperRef.current.style.overflow = "hidden";

    gsap.fromTo(
      spansArray,
      {
        opacity: 1,
      },
      {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: letterWrapperRef.current,
          start: `${window.innerHeight}px center`,
          end: `+=50%`,
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      lettersToRotate,
      {
        transformOrigin: "50% 50%",
        rotationX: -270,
        // z: -100,
        y: "17%",
        opacity: 0,
      },
      {
        y: "17%",
        ease: titleInEase,
        opacity: 1,
        // z: 0,
        duration: 2,
        stagger: 0.6,
        rotationX: 0,
        scrollTrigger: {
          trigger: letterWrapperRef.current,
          start: "top center",
          end: `+=50%`,
          scrub: true,
          refreshPriority: 1,
          // onRefresh: () => {
          //   console.log("refresh letters to rotate");
          // },
        },
      }
    );

    gsap.fromTo(
      lettersToReveal,
      {
        y: "100%",
      },
      {
        stagger: 0.1,
        duration: 1.2,
        ease: titleInEase,
        y: "17%",
        scrollTrigger: {
          trigger: letterWrapperRef.current,
          start: "top center",
          end: `+=50%`,
          scrub: true,
          // markers: {},
          onEnterBack: () => {
            letterWrapperRef.current.style.overflow = "hidden";
          },
          // onRefresh: () => {
          //   console.log("refresh letters to reveal");
          // },
        },
      }
    );

    // ScrollTrigger.refresh();
  }, []);

  // useScroll(({ scroll }) => {
  //   const start = wrapperRect.top - windowHeight + windowHeight * 0.5;
  //   const end =
  //     wrapperRect.top - windowHeight + windowHeight * 0.5 + windowHeight;

  //   let progress = mapRange(start, end, scroll, 0, 1);

  //   progress = clamp(0, progress, 1);

  //   timelineRef.current.progress(progress);
  // });

  return (
    <div id="scenography">
      <div ref={innerRef}>
        <h1 ref={letterWrapperRef}></h1>
      </div>
    </div>
  );
};

export default Testing;
