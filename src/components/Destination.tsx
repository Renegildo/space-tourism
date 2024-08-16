import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { destinations } from "../utils";
import { bgDestDesktop, bgDestMobile, bgDestTablet } from "../assets";

const Destination = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [currentDestination, setCurrentDestination] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="bg-blue-900 h-full text-white"
      style={{
        backgroundImage:
          width < 768
            ? `url(${bgDestMobile.src})`
            : width < 1024
              ? `url(${bgDestTablet.src})`
              : `url(${bgDestDesktop.src}})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <h2 className="text-center flex justify-center md:justify-start gap-6 font-barlow-condensed text-xl tracking-wider md:ml-10 md:mt-10 w-full">
        <span className="opacity-25">01</span> PICK YOUR DESTINATION
      </h2>
      <div className="flex flex-col items-center md:mx-14 lg:flex-row lg:justify-between lg:max-w-screen-xl overflow-hidden">
        <div className="w-36 h-36 my-14 md:my-8 md:w-72 md:h-72 lg:w-max lg:h-max">
          <img
            src={destinations[currentDestination].images.png}
            alt={destinations[currentDestination].name}
          />
        </div>

        <div className="flex flex-col items-center lg:items-start md:mx-14 overflow-hidden">
          <ul className="flex gap-5">
            {destinations.map((item, i) => (
              <li className="relative flex flex-col items-center">
                <button
                  className={`capitalize ${i === currentDestination ? "text-white" : "text-blue-300"} font-barlow-condensed text-xl`}
                  onClick={() => setCurrentDestination(i)}
                >
                  {item.name.toUpperCase()}
                </button>
                <div
                  className={`absolute -bottom-2 h-px w-full border border-white ${i === currentDestination ? "scale-100" : "scale-0"} transition duration-200`}
                />
              </li>
            ))}
          </ul>

          <h1 className="text-6xl mb-1 mt-5 font-bellefair lg:text-8xl">
            {destinations[currentDestination].name.toUpperCase()}
          </h1>

          <p className="w-5/6 text-center lg:text-start text-blue-300 pb-10 md:pb-6 lg:pb-10 border-b border-white/25 max-w-[32rem] leading-[180%]">
            {destinations[currentDestination].description}
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:gap-28">
            <div className="text-center lg:text-start flex flex-col gap-1 mt-10 md:mt-6 lg:mt-10 mb-5 lg:gap-3">
              <h2 className="text-blue-300">AVG. DISTANCE</h2>
              <h1 className="font-bellefair text-4xl">
                {destinations[currentDestination].distance.toUpperCase()}
              </h1>
            </div>
            <div className="text-center lg:text-start flex flex-col gap-1 lg:gap-3">
              <h2 className="text-blue-300">EST. TRAVEL TIME</h2>
              <h1 className="font-bellefair text-4xl">
                {destinations[currentDestination].travel.toUpperCase()}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
