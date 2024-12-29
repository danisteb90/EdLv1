import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const containerRef = useRef(null);
  const imageIndexRef = useRef(1);
  const animationTimeoutRef = useRef(null);
  const currentlyAnimatingRef = useRef(false);
  const lastAddTimeRef = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    function addNewItem(x, y) {
      const now = Date.now();
      if (now - lastAddTimeRef.current < 80) return;

      lastAddTimeRef.current = now;

      if (manageItemLimit()) return;

      const newItem = document.createElement("div");
      newItem.className = "item";
      newItem.style.left = `${x - 75}px`;
      newItem.style.top = `${y - 75}px`;
      newItem.style.opacity = "0";
      newItem.style.transform = "scale(0)";

      const img = document.createElement("img");
      img.src = `./assets/isla${imageIndexRef.current}.png`;
      newItem.appendChild(img);
      imageIndexRef.current = (imageIndexRef.current % 9) + 1;

      containerRef.current.appendChild(newItem);

      gsap.to(newItem, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        borderRadius: "10px",
        ease: "power2.out",
      });
    }

    function manageItemLimit() {
      if (containerRef.current.children.length > 60) {
        startAnimation();
        return true;
      }
      return false;
    }

    function startAnimation() {
      if (
        currentlyAnimatingRef.current ||
        containerRef.current.children.length === 0
      )
        return;

      currentlyAnimatingRef.current = true;

      const items = containerRef.current.querySelectorAll(".item");

      gsap.to(items, {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.015,
        onComplete: function () {
          items.forEach((item) => {
            if (item.parentNode) {
              item.parentNode.removeChild(item);
            }
          });
          currentlyAnimatingRef.current = false;
        },
      });
    }

    const handleMouseMove = (event) => {
      clearTimeout(animationTimeoutRef.current);
      addNewItem(event.pageX, event.pageY);
      animationTimeoutRef.current = setTimeout(startAnimation, 50);
    };

    // Agregar el event listener
    containerRef.current.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
      clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  return (
    <div className="heroContainer">
      <div ref={containerRef} className="items"></div>
      <h1>Escuela de Libertad</h1>
      <h2>
        Título principal o <br /> búsquedas de cliente
      </h2>
    </div>
  );
};

export default Hero;
