import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

let smoother = ScrollSmoother.create({
  smooth: 1.25,
  effects: true,
  normalizeScroll: true,
});

gsap.utils.toArray("a").forEach((button: any) => {
  button.addEventListener("click", (e: any) => {
    const id = e.target.getAttribute("href");
    smoother.scrollTo(id, true, "top top");
    e.preventDefault();
  });
});

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top+=50",
    end: "bottom top+=100",
    scrub: true,
  },
});

tl.fromTo(
  "#hero",
  {
    scale: 1,
    autoAlpha: 1,
    ease: "power2.inOut",
  },
  {
    scale: 0,
    autoAlpha: 0,
    ease: "power2.inOut",
  },
).fromTo(
  "#about-me > div:first-of-type",
  {
    scale: 0,
    autoAlpha: 0,
    ease: "power2.inOut",
  },
  {
    scale: 1,
    autoAlpha: 1,
    ease: "power2.inOut",
  },
);
