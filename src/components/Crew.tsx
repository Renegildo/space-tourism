import { useEffect, useState } from "react";
import { bgCrewDesktop, bgCrewMobile, bgCrewTablet } from "../assets";
import Navbar from "./Navbar";
import { crew } from "../utils";

const Crew = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [currentCrew, setCurrentCrew] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="h-full text-white overflow-hidden"
      style={{
        backgroundImage:
          width < 768
            ? `url(${bgCrewMobile.src})`
            : width < 1024
              ? `url(${bgCrewTablet.src})`
              : `url(${bgCrewDesktop.src}})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <h3 className="text-xl flex gap-5 font-barlow-condensed tracking-wide w-full justify-center md:mt-10 md:justify-start md:ml-12 lg:ml-40">
        <span className="opacity-25">02</span> MEET YOUR CREW
      </h3>

      <div className="lg:flex lg:ml-40 lg:gap-8 lg:justify-center">
        <div className="flex flex-col lg:h-[65vh] lg:justify-between">
          <div>
            <div className="flex items-center lg:items-start flex-col gap-2 mt-16 text-xl font-bellefair">
              <h2 className="opacity-50">
                {crew[currentCrew].role.toUpperCase()}
              </h2>
              <h1 className="text-2xl md:text-4xl lg:text-[3.5rem] lg:leading-[3.5rem]">
                {crew[currentCrew].name.toUpperCase()}
              </h1>
            </div>
            <p className="max-w-80 text-center mx-auto mt-6 text-blue-300 md:max-w-lg lg:text-start lg:mx-0">
              {crew[currentCrew].bio}
            </p>
          </div>

          <div className="flex gap-4 w-full justify-center lg:justify-start mt-20 z-10">
            {[...new Array(4)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentCrew(i)}
                className={`rounded-full bg-white w-3 h-3 ${i === currentCrew ? "opacity-100" : "opacity-25"} transition`}
              />
            ))}
          </div>
        </div>
        <div className="relative mt-8 z-10">
          <img
            className="max-lg:w-1/2 m-auto pointer-events-none select-none lg:h-full lg:w-full"
            src={crew[currentCrew].images.png}
            alt={crew[currentCrew].name}
            width={350}
            height={470}
          />
          <div
            className={`absolute bg-gradient-to-b left-0 bottom-0 w-full h-64 from-transparent to-blue-900 ${currentCrew === 3 ? "h-52" : ""}`}
          />
        </div>
      </div>
    </section>
  );
};

export default Crew;
