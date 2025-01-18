"use client";
import Hero from "@/components/Hero";
import Travel from "@/components/Travel";
import Lenis from "lenis";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import Testing from "@/components/Testing";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  useGSAP(() => {
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainContainer",
        start: "top top",
        end: "center bottom",
        scrub: 1.5,
        // markers: true,
      },
    });

    scrollTl.fromTo(
      "body",
      {
        background: "linear-gradient(to bottom, #062448, #EAEAEA)",
      },
      {
        background: "linear-gradient(to bottom, #EAEAEA, #062448)",
        overwrite: "auto",
      },
      1
    );
  });

  return (
    <div className="mainContainer relative min-h-screen w-full overflow-hidden">
      <div className="w-full h-screen">
        <Hero />
      </div>
      <Testing />
      <Travel />
      <Footer />
    </div>
  );
}
