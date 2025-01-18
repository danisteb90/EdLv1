import "./Testing.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testing = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      autoAlpha: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "bottom-=5% top",
        end: "bottom+=300% bottom",
        scrub: 8,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.set(path, {
            strokeDashoffset: length - length * progress,
          });
        },
      },
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="svgContainer mix-blend-multiply absolute top-[81vh] left-0 w-full h-[400vh] pointer-events-none z-[1]">
      <svg
        className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2"
        width="1440"
        height="3190"
        viewBox="0 0 1800 3190"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_236_166)">
          <mask
            id="mask0_236_166"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="2085"
            height="3190"
          >
            <path d="M2085 0H0V3190H2085V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_236_166)">
            <path
              d="M-51 161C564.946 502.369 9.42596 714.993 284.781 1006.83C474.204 1207.59 1111.27 1248.67 1209.37 984.842C1307.47 721.016 988.101 585.435 806.345 680.706C624.586 775.977 521.853 977.507 640.39 1380.58C762.14 1794.56 155.773 1607.74 196.771 2012.99C284.779 2882.94 1627.68 2113.5 1018.7 1822.38C301.685 1479.62 -91.7979 3057.06 2369 2954.17"
              stroke="url(#paint0_linear_236_166)"
              stroke-width="30"
              stroke-linejoin="round"
              ref={pathRef}
            />
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_236_166"
            x1="1159"
            y1="161"
            x2="1159"
            y2="2959"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9D0D4E" />
            <stop offset="0.5" stop-color="#0A7A7A" />
            <stop offset="1" stop-color="#062448" />
          </linearGradient>
          <clipPath id="clip0_236_166">
            <rect width="2085" height="3190" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Testing;
