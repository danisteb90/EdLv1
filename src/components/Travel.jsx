"use client";

import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./experience/Experience";

gsap.registerPlugin(ScrollTrigger);

const Travel = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#travel-clip",
        start: "center center",
        end: "+=800 -=4500",
        scrub: false,
        pin: true,
        pinSpacing: true,
        markers: true,
        toggleActions: "play reverse play reverse",
      },
    });
    clipAnimation
      .to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        right: "0",
        borderRadius: "0",
        duration: 1,
      })
      .to(".mask-clip-path", {
        position: "sticky",
        top: "0",
        duration: 0.5,
      });
  });

  return (
    <div id="travel" className="min-h-[900vh] w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-sm uppercase md:text-[10px]">Bienvenidos!</h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          A este gran viaje
        </div>
        <div className="h-dvh w-full" id="travel-clip">
          <div className="mask-clip-path travel-video">
            <Experience />
          </div>
        </div>
        <p>Example Text</p>
      </div>
    </div>
  );
};

export default Travel;
