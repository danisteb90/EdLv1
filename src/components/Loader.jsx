"use client";
import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const timer = setTimeout(() => {
      document.body.classList.remove("no-scroll");
      setIsLoading(false);
    }, 5000);

    return () => {
      document.body.classList.remove("no-scroll");
      clearTimeout(timer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-white"
      style={{
        position: "fixed",
        zIndex: 99999,
        isolation: "isolate",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gray-800"></div>
        <h2 className="text-xl font-medium text-gray-800">Cargando...</h2>
      </div>
    </div>
  );
};

export default Loader;
