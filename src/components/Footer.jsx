import React from "react";

const Footer = () => {
  return (
    <div
      className="relative h-[400px]"
      style={{
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div className="absolute h-[40vh] w-full bottom-0">
        <Content />
      </div>
    </div>
  );
};

export default Footer;

const Content = () => {
  return (
    <footer className="bg-[#424242] text-white w-full h-full py-8 bottom-0">
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 mx-12">
        <div className="footer-section">
          <h3 className="text-base font-medium mb-4">ABOUT</h3>
          <ul className="space-y-2">
            <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              Home
            </li>
            <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              Projects
            </li>
            <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              Our Mission
            </li>
            <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              Contact Us
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="text-base font-medium mb-4">EDUCATION</h3>
          <ul className="space-y-2">
            <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              News
            </li>
            <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              Learn
            </li>
            <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              Certification
            </li>
            <li className="text-sm opacity-80 hover:opacity-100 cursor-pointer transition-opacity">
              Publications
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex items-center justify-start text-center px-12 mt-24">
        <h1 className="text-6xl md:text-6xl font-light leading-none mb-4">
          Escuela de Libertad
        </h1>
        <span className="text-sm opacity-80">©copyright</span>
      </div>
    </footer>
  );
};
