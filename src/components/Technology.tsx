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

      <h2 className="font-barlow-condensed text-xl flex w-full justify-center gap-6 mb-10 md:mt-10 md:justify-start md:ml-10 lg:ml-[10rem] lg:text-3xl">
        <span className="opacity-25">03</span> SPACE LAUNCH 101
      </h2>

      <div className="flex flex-col lg:flex-row-reverse lg:justify-center lg:items-center">
        <div className="relative w-full lg:max-w-screen-sm h-72 overflow-hidden lg:h-[36.5rem] lg:w-full">
          <img
            className="absolute object-cover w-full"
            src={
              width < 1024
                ? technology[currentTech].images.landscape
                : technology[currentTech].images.portrait
            }
          />
        </div>
        <div>
          <div className="lg:flex">
            <div className="flex gap-4 lg:gap-8 my-[2.5rem] w-full justify-center lg:flex-col lg:w-fit lg:my-0">
              {technology.map((_, i) => (
                <button
                  onClick={() => setCurrentTech(i)}
                  className={`rounded-full w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 transition-colors font-bellefair md:text-xl ${currentTech === i ? "bg-white border border-white text-black" : "border border-white/25"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <div className="lg:mx-16">
              <h2 className="text-center opacity-50 font-bellefair text-lg md:text-2xl lg:text-start">
                THE TERMINOLOGY...
              </h2>
              <h1 className="text-center mb-5 mt-2 text-2xl font-bellefair md:text-4xl lg:text-start lg:text-5xl">
                {technology[currentTech].name.toUpperCase()}
              </h1>
              <p className="text-center text-blue-300 max-w-96 leading-[180%] m-auto md:max-w-screen-sm lg:text-start">
                {technology[currentTech].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
