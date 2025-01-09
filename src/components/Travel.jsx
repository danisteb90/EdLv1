"use client";

import gsap from "gsap";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./experience/Experience";

gsap.registerPlugin(ScrollTrigger);

const Travel = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#travel-clip",
        start: "center center",
        end: "+=800 -=200",
        pin: true,
        pinSpacing: true,
        markers: false,
        // scrub: 0.5,
        toggleActions: "play reverse play reverse",
        onEnter: () => {
          console.log("Entrando en la animación");
          setAnimationComplete(true);
        },
        onLeave: () => {
          console.log("Animación completada");
          setAnimationComplete(false);
        },
        onEnterBack: () => {
          console.log("Volviendo a entrar");
          setAnimationComplete(true);
        },
        onLeaveBack: () => {
          setAnimationComplete(false);
          console.log("Saliendo hacia atrás");
        },
      },
    });
    clipAnimation
      .to(".mask-clip-path", {
        width: "100vw",
        height: "100vh",
        right: "0",
        borderRadius: "0",
        duration: 1.5,
        ease: "power4.inOut",
        force3D: true,
        willChange: "transform",
        stagger: {
          amount: 0.3,
        },
      })
      .to(".mask-clip-path", {
        position: "sticky",
        top: "0",
        duration: 0.5,
      });
  });

  return (
    <div id="travel" className="min-h-[100vh] w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-sm uppercase md:text-[10px]">Bienvenidos!</h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
          A este gran viaje
        </div>
        <div className="h-[100dvh] w-full" id="travel-clip">
          <div className="mask-clip-path travel-experience">
            <Experience isReady={animationComplete} />
          </div>
        </div>
        <p>Example Text</p>
      </div>
    </div>
  );
};

export default Travel;
