"use client";
import React, { useState } from "react";
import Link from "next/link";
import { style } from "../fonts";
import { IoMdMenu } from "react-icons/io";
import { links } from "../constants";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen((e) => !e);
  };
  console.log(menuOpen);

  return (
    <nav className="p-7 border-b-2 border-gray-700 bg-[#090909] text-white sticky top-0 left-0 z-[3000]">
      <div className="container mx-auto flex justify-between items-center mt-2">
        <Link
          href="/hero"
          className={`text-3xl font-bold ${style.className} uppercase text-2xl font-extrabold`}
        >
          Learn DSA
        </Link>
        <div>
          <span
            className="hidden max-[800px]:block text-4xl cursor-pointer"
            onClick={openMenu}
          >
            <IoMdMenu />
          </span>

          <ul
            className={`flex ease-in-out duration-500 justify-around z-[-1]
     ${menuOpen ? "max-[800px]:top-[110px]" : "max-[800px]:top-[-300%]"}
      max-[800px]:absolute max-[800px]:right-2 max-[800px]:flex-col max-[800px]:bg-gray-300
      max-[800px]:w-auto max-[800px]:items-end max-[800px]:pt-2 pl-10 pb-8 rounded-[5px]`}
          >
            {links.map((e) => (
              <Link
                href={e.url}
                key={e.title}
                className="mr-12 mt-4"
                onClick={() => setMenuOpen(false)}
              >
                <li className="uppercase font-bold text-gray-300 max-sm:hover:text-gray-100 hover:text-gray-100 hover:font-extrabold">
                  {e.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
