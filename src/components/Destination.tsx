import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { destinations } from "../utils";
import { bgDestDesktop, bgDestMobile, bgDestTablet } from "../assets";

const Destination = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const currentDestination = useState<number>(0);

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
      <div className="flex flex-col items-center">
        <h2 className="text-center flex gap-6 font-barlow-condensed text-xl tracking-wider">
          <span className="opacity-25">01</span> PICK YOUR DESTINATION
        </h2>

        <div className="w-36 h-36 m-14">
          <img src="/src/assets/destination/image-moon.webp" alt="moon" />
        </div>

        <ul className="flex gap-5">
          {destinations.map((item, i) => (
            <li
              className={`capitalize ${i === 0 ? "text-white" : "text-blue-300"} font-barlow-condensed text-xl`}
            >
              {item.name.toUpperCase()}
            </li>
          ))}
        </ul>

        <h1 className="text-6xl my-5 font-bellefair">
          {destinations[0].name.toUpperCase()}
        </h1>

        <p className="w-5/6 text-center text-blue-300 pb-10 border-b border-white/25 leading-[180%]">
          {destinations[0].description}
        </p>

        <div className="text-center flex flex-col gap-3 mt-10 mb-5">
          <h2 className="text-blue-300">AVG. DISTANCE</h2>
          <h1 className="font-bellefair text-4xl">
            {destinations[0].distance.toUpperCase()}
          </h1>
        </div>
        <div className="text-center">
          <h2 className="text-blue-300">EST. TRAVEL TIME</h2>
          <h1 className="font-bellefair text-4xl">
            {destinations[0].travel.toUpperCase()}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Destination;
