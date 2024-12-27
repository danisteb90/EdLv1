import React, { useRef, useEffect } from "react";

export const UI = ({ currentScreen, onScreenChange, isAnimating }) => {
  const mainRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/assets/japanese-style.mp3"); // Ajusta la ruta a tu archivo de sonido
    audioRef.current.volume = 0;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playTransitionSound = () => {
    if (!audioRef.current) return;

    // Resetear el audio
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0;
    audioRef.current.play();

    // Fade in del volumen
    let volume = 0;
    const fadeInterval = setInterval(() => {
      if (volume < 0.3) {
        volume += 0.01;
        audioRef.current.volume = volume;
      } else {
        audioRef.current.volume = 1;
        clearInterval(fadeInterval);
      }
    }, 80);
  };

  const handleScreenChange = (nextScreen) => {
    playTransitionSound();
    onScreenChange(nextScreen);
  };

  useEffect(() => {
    let lastScrollTime = 0;
    const scrollCooldown = 1000;

    const handleScroll = (e) => {
      e.preventDefault();

      if (isAnimating) return;

      const currentTime = Date.now();
      if (currentTime - lastScrollTime < scrollCooldown) return;

      const direction = e.deltaY > 0 ? "backward" : "forward";

      const screenSequence = [
        "Home",
        "Gallery1",
        "Gallery2",
        "Gallery3",
        "Gallery4",
      ];
      const currentIndex = screenSequence.indexOf(currentScreen);

      let shouldChange = false;
      let nextScreen = null;

      if (direction === "forward" && currentIndex > 0) {
        shouldChange = true;
        nextScreen = screenSequence[currentIndex - 1];
      } else if (
        direction === "backward" &&
        currentIndex < screenSequence.length - 1
      ) {
        shouldChange = true;
        nextScreen = screenSequence[currentIndex + 1];
      }

      if (shouldChange) {
        lastScrollTime = currentTime;
        handleScreenChange(nextScreen);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement && currentScreen !== "Main") {
      mainElement.addEventListener("wheel", handleScroll, {
        passive: false,
        capture: true,
      });
    }

    return () => {
      if (mainElement) {
        mainElement.removeEventListener("wheel", handleScroll, {
          capture: true,
        });
      }
    };
  }, [currentScreen, onScreenChange, isAnimating]);

  return (
    <main
      ref={mainRef}
      className="fixed inset-0 z-10"
      animate={isAnimating ? "" : currentScreen}
    >
      <section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
          currentScreen === "Home" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-7xl text-white opacity-90 font-extrabold">
          Escuela de Libertad
        </h1>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => handleScreenChange("Gallery1")}
            className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
          >
            Galeria 1
          </button>
          {/* <button
						onClick={() => onScreenChange("Windmill")}
						className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
					>
						Discover the town windmill
					</button> */}
        </div>
      </section>
      <section
        animate={isAnimating ? "" : currentScreen}
        className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
          currentScreen === "Gallery1" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="md:max-w-2xl">
          <h1 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
            Galeria 1
          </h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae voluptatum, quia, quibusdam, voluptates voluptate quos quod
            voluptatibus quas doloribus quidem. Quisquam quae voluptatum, quia,
            quibusdam, voluptates voluptate quos quod voluptatibus quas
            doloribus quidem.
          </p>
          <button
            onClick={() => handleScreenChange("Gallery2")}
            className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
          >
            Galeria 2
          </button>
        </div>
      </section>
      <section
        animate={isAnimating ? "" : currentScreen}
        className={`absolute inset-0 flex flex-col items-end justify-center p-10 transition-opacity duration-1000 ${
          currentScreen === "Gallery2" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="md:max-w-2xl">
          <h1 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
            Galeria 2
          </h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae voluptatum, quia, quibusdam, voluptates voluptate quos quod
            voluptatibus quas doloribus quidem. Quisquam quae voluptatum, quia,
            quibusdam, voluptates voluptate quos quod voluptatibus quas
            doloribus quidem.
          </p>
          <button
            onClick={() => onScreenChange("Gallery3")}
            className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
          >
            Galeria 3
          </button>
        </div>
      </section>
      <section
        animate={isAnimating ? "" : currentScreen}
        className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
          currentScreen === "Gallery3" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="md:max-w-2xl">
          <h1 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
            Galeria 3
          </h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae voluptatum, quia, quibusdam, voluptates voluptate quos quod
            voluptatibus quas doloribus quidem. Quisquam quae voluptatum, quia,
            quibusdam, voluptates voluptate quos quod voluptatibus quas
            doloribus quidem.
          </p>
          <button
            onClick={() => onScreenChange("Gallery4")}
            className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
          >
            Galeria 4
          </button>
        </div>
      </section>
      <section
        animate={isAnimating ? "" : currentScreen}
        className={`absolute inset-0 flex flex-col items-end justify-center p-10 transition-opacity duration-1000 ${
          currentScreen === "Gallery4" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="md:max-w-2xl">
          <h1 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
            Galeria 4
          </h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae voluptatum, quia, quibusdam, voluptates voluptate quos quod
            voluptatibus quas doloribus quidem. Quisquam quae voluptatum, quia,
            quibusdam, voluptates voluptate quos quod voluptatibus quas
            doloribus quidem.
          </p>
          <button
            onClick={() => onScreenChange("Home")}
            className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
          >
            Regresar al Inicio
          </button>
        </div>
      </section>
    </main>
  );
};
