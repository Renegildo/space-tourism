import { useEffect, useState } from "react";
import { bgHomeDesktop, bgHomeMobile, bgHomeTablet } from "../assets";
import Navbar from "./Navbar";
import gsap from "gsap";

const Home = () => {
  const [hovering, setHovering] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseHover = () => {
    setHovering((prev) => !prev);

    if (!hovering) {
      gsap.to("#buttonEffect", {
        opacity: 10,
        y: 0,
      });
    } else {
      gsap.to("#buttonEffect", {
        opacity: 0,
        y: 100,
      });
    }
  };

  return (
    <main
      className="bg-blue-900 h-screen w-full text-white"
      style={{
        backgroundImage:
          width < 768
            ? `url(${bgHomeMobile.src})`
            : width < 1024
              ? `url(${bgHomeTablet.src})`
              : `url(${bgHomeDesktop.src}})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <Navbar />
      <div
        className="flex flex-col lg:flex-row justify-between h-full md:h-5/6 mt-10 lg:justify-between lg:max-w-screen-xl
        lg:items-center lg:m-auto"
      >
        <div className="flex flex-col mx-16 gap-6">
          <h2 className="text-center tracking-widest text-xl md:text-3xl font-barlow-condensed text-blue-300 lg:text-start">
            SO, YOU WANT TRAVEL TO
          </h2>
          <h1 className="text-center text-8xl md:text-[9rem] font-bellefair lg:text-start">
            SPACE
          </h1>
          <p className="text-center leading-[180%] text-blue-300 w-4/5 md:w-[35rem] m-auto lg:m-0 lg:text-start">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="max-lg:m-auto relative z-10 group">
          <div
            id="buttonEffect"
            className="absolute m-auto bg-white/10 w-64 h-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10 opacity-0"
            style={{}}
          />
          <a
            href="/explore"
            className="w-36 h-36 md:w-[17rem] md:h-[17rem] flex items-center justify-center bg-white text-blue-900 rounded-full font-bellefair text-lg md:text-[2rem] tracking-wider"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
          >
            EXPLORE
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
