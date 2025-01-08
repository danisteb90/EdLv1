export const UI = ({ currentScreen, onScreenChange, isAnimating, isReady }) => {
  return (
    <main
      className={`fixed inset-0 z-10 transition-opacity duration-1000 ${
        isReady
          ? "opacity-100 duration-[2000ms]"
          : "opacity-0 pointer-events-none"
      }`}
      animate={isAnimating ? "" : currentScreen}
    >
      <section
        className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-5000 ${
          currentScreen === "Intro" && !isAnimating
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
            className="bg-gray-800 bg-opacity-50 p-3 rounded-full text-white font-medium text-xl"
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
            className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
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
            className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
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
            className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
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
            className="bg-gray-400 bg-opacity-50  p-3 mt-3 rounded-full text-white font-medium"
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
            className="bg-gray-400 bg-opacity-50 p-3 rounded-full text-white font-medium"
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
            className="bg-gray-800 bg-opacity-50 p-3 rounded-full text-white font-medium text-xl"
          >
            Empezemos la aventura!
          </button>
        </div>
      </section>
    </main>
  );
};
