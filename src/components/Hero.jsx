import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="heroContainer">
      <div>
        <div id="up"></div>
        <div id="down"></div>
        <div id="left"></div>
        <div id="right"></div>
      </div>
      {/* <div>
        <h1>Escuela de Libertad</h1>
        <h2>
          Título principal o <br /> búsquedas de cliente
        </h2>
      </div> */}
    </section>
  );
};

export default Hero;
