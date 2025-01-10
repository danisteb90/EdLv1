import React, { useRef, useState } from "react";

export const UI = ({ currentScreen, onScreenChange, isAnimating, isReady }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleClick = (screen) => {
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play();

      // Incrementar volumen gradualmente
      let vol = 0;
      const interval = setInterval(() => {
        if (vol < 0.39) {
          vol += 0.1;
          audioRef.current.volume = Math.min(vol, 0.4);
        } else {
          clearInterval(interval);
        }
      }, 300);
    }
    onScreenChange(screen);
  };

  const handleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <main
      className={`fixed inset-0 z-10 transition-opacity duration-1000 ${
        isReady
          ? "opacity-100 duration-[2000ms]"
          : "opacity-0 pointer-events-none"
      }`}
      animate={isAnimating ? "" : currentScreen}
    >
      <audio ref={audioRef} src="/assets/japanese-style.mp3" />
      <button
        onClick={handleMute}
        className="fixed bottom-5 right-5 w-12 h-12 bg-gray-800 bg-opacity-80 rounded-full flex items-center justify-center text-white hover:bg-opacity-100 transition-all z-50"
      >
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        )}
      </button>
      <section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-5000 ${
          currentScreen === "Intro" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-7xl text-gray-800 opacity-100 font-extrabold w-full ml-[20vw] text-start">
          Escuela de Libertad
        </h1>
        <div className="flex items-center gap-3 mt-2 w-full ml-[20vw]">
          <button
            onClick={() => handleClick("Home")}
            className="bg-gray-800 bg-opacity-80 p-3 rounded-full text-white font-medium text-xl"
          >
            Empezemos la aventura!
          </button>
        </div>
      </section>
      <section
        animate={isAnimating ? "" : currentScreen}
        className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
          currentScreen === "Home" && !isAnimating
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
            onClick={() => onScreenChange("Gallery1")}
            className="bg-gray-400 bg-opacity-80 p-3 mt-3 rounded-xl text-gray-900 font-medium"
          >
            Viaje 1
          </button>
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
            Viaje 1
          </h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae voluptatum, quia, quibusdam, voluptates voluptate quos quod
            voluptatibus quas doloribus quidem. Quisquam quae voluptatum, quia,
            quibusdam, voluptates voluptate quos quod voluptatibus quas
            doloribus quidem.
          </p>
          <button
            onClick={() => onScreenChange("Gallery2")}
            className="bg-gray-400 bg-opacity-80 p-3 mt-3 rounded-xl text-gray-900 font-medium"
          >
            Viaje 2
          </button>
        </div>
      </section>
      <section
        animate={isAnimating ? "" : currentScreen}
        className={`absolute inset-0 flex flex-col items-start justify-center p-10 transition-opacity duration-1000 ${
          currentScreen === "Gallery2" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="md:max-w-2xl">
          <h1 className="text-7xl text-white opacity-90 font-extrabold -ml-1">
            Viaje 2
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
            className="bg-gray-400 bg-opacity-80 p-3 mt-3 rounded-xl text-gray-900 font-medium"
          >
            Viaje 3
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
            Viaje 3
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
            className="bg-gray-400 bg-opacity-80 p-3 mt-3 rounded-xl text-gray-900 font-medium"
          >
            Viaje 4
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
            Viaje 4
          </h1>
          <p className="text-white mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quae voluptatum, quia, quibusdam, voluptates voluptate quos quod
            voluptatibus quas doloribus quidem. Quisquam quae voluptatum, quia,
            quibusdam, voluptates voluptate quos quod voluptatibus quas
            doloribus quidem.
          </p>
          <button
            onClick={() => onScreenChange("End")}
            className="bg-gray-400 bg-opacity-80 p-3 rounded-xl text-gray-900 font-medium"
          >
            Regresar al Inicio
          </button>
        </div>
      </section>
      <section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-5000 ${
          currentScreen === "End" && !isAnimating
            ? ""
            : "opacity-0 pointer-events-none"
        }`}
      >
        <h1 className="text-7xl text-gray-800 opacity-90 font-extrabold w-full ml-[20vw] text-start">
          Escuela de Libertad
        </h1>
        <div className="flex items-center gap-3 mt-2 w-full ml-[20vw]">
          <button
            onClick={() => onScreenChange("Home")}
            className="bg-gray-800 bg-opacity-80 p-3 rounded-xl text-white font-medium text-xl"
          >
            Empezemos la aventura!
          </button>
        </div>
      </section>
    </main>
  );
};
