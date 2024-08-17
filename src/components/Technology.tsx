import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { bgTechDesktop, bgTechMobile, bgTechTablet } from "../assets";
import { technology } from "../utils";

const Technology = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [currentTech, setCurrentTech] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="bg-blue-900 h-screen w-full text-white"
      style={{
        backgroundImage:
          width < 768
            ? `url(${bgTechMobile.src})`
            : width < 1024
              ? `url(${bgTechTablet.src})`
              : `url(${bgTechDesktop.src}})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <Navbar />

      <h2 className="font-barlow-condensed text-xl flex w-full justify-center gap-6 mb-10">
        <span className="opacity-25">03</span> SPACE LAUNCH 101
      </h2>

      <div className="flex flex-col">
        <div className="relative w-full md:max-w-screen-sm h-72 overflow-hidden">
          <img
            className="absolute object-cover w-full -translate-y-40"
            src={technology[currentTech].images.portrait}
          />
        </div>
        <div>
          <div className="flex gap-4 my-[2.5rem] w-full justify-center">
            {technology.map((_, i) => (
              <button
                onClick={() => setCurrentTech(i)}
                className={`rounded-full w-10 h-10 transition-colors ${currentTech === i ? "bg-white border border-white text-black" : "border border-white/25"}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <h2 className="text-center opacity-50 font-bellefair text-lg">
            THE TERMINOLOGY
          </h2>
          <h1 className="text-center mb-5 mt-2 text-2xl font-bellefair">
            {technology[currentTech].name.toUpperCase()}
          </h1>
          <p className="text-center text-blue-300 max-w-96 leading-[180%] m-auto">
            {technology[currentTech].description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Technology;
