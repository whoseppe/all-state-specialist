import { gsap } from "gsap";
import CustomEase from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);

const titleInEase = CustomEase.create("custom", "0.14, 1.00, 0.34, 1.00");

const furnitureInEase = CustomEase.create(
  "furnitureInEase",
  "0.01, 0.99, 0.34, 1.00"
);

export { titleInEase, furnitureInEase };

export const textReveal = () => {
  const tl = gsap.timeline();

  tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3,
    },
  });
};
