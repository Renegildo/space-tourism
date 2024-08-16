"use client";

import { useEffect, useState } from "react";
import { iconClose, iconHamburguer, logo } from "../assets";
import { navbarItems } from "../utils";
import gsap from "gsap";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (menuOpen) {
      gsap.to("#hamburguerMenu", {
        x: 0,
      });
    } else {
      gsap.to("#hamburguerMenu", {
        x: 256,
      });
    }
  }, [menuOpen]);

  const handleOpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between p-8 md:p-0 lg:pt-14">
      <img
        src={logo.src}
        className="w-12 h-12 md:mx-12"
        width={48}
        height={48}
      />

      <div className="w-full border border-white translate-x-10 opacity-25 hidden lg:block z-10" />

      <ul className="bg-white/5 md:flex gap-12 hidden md:py-8 md:px-10 md:w-full md:justify-end lg:px-16 lg:w-auto lg:pl-40 lg:backdrop-blur relative">
        {navbarItems.map((item) => (
          <li key={item.label} className="flex flex-col items-center">
            <a href={item.link} className="flex gap-3">
              <span className="font-bold">{item.number}</span>
              {item.label}
            </a>

            <div className="border border-white w-20 absolute h-px bottom-px" />
          </li>
        ))}
      </ul>

      <button onClick={handleOpenMenu} className="block md:hidden">
        <img
          src={iconHamburguer.src}
          height={24}
          width={24}
          className="h-8 w-8"
        />
      </button>

      <div
        id="hamburguerMenu"
        className="p-10 absolute top-0 right-0 h-full translate-x-[800px] h-[0B0D17]/15 backdrop-blur w-64"
      >
        <div className="flex w-full justify-end">
          <button onClick={handleOpenMenu} className="mb-12">
            <img
              src={iconClose.src}
              height={24}
              width={24}
              className="h-8 w-8"
            />
          </button>
        </div>

        <ul className="flex flex-col gap-8">
          {navbarItems.map((item) => (
            <li key={item.number} className="flex items-center">
              <a href={item.link} className="flex gap-3 ">
                <span className="font-bold">{item.number}</span>
                {item.label}
              </a>
              <div className="border border-white bg-white h-6 w-1 absolute right-0" />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
