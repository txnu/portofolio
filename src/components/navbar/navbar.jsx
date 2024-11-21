import React from "react";
import menu from "../../assets/icons/menu.svg";
import KedaiProgrammer from "../../assets/img/KedaiProgrammer.jpeg";

const Navbar = () => {
  return (
    <div className="container sm:mx-auto bg-gray-700  rounded-b-2xl">
      <div className="flex justify-between items-center p-4 text-white mx-4">
        <div className="flex flex-row items-center">
          <img
            src={KedaiProgrammer}
            alt=""
            className="rounded-full object-cover w-11 h-11 mr-4"
          />
          <h1 className="inline-block font-bold text-lg sm:text-xl  animate-typing overflow-hidden whitespace-nowrap">
            Kedai Programmer
          </h1>
        </div>
        <div className="hidden space-x-2 md:flex">
          <a
            href="#dashboard"
            className="px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
            Dashboard
          </a>
          <a
            href="#section"
            className="px-4 py-2  rounded-full hover:bg-gray-600 transition-colors duration-300">
            About
          </a>
          <a
            href="/"
            className="px-4 py-2  rounded-full hover:bg-gray-600 transition-colors duration-300">
            Services
          </a>
          <a
            href="/"
            className="px-4 py-2 rounded-full hover:bg-gray-600 transition-colors duration-300">
            Contact
          </a>
        </div>
        <div className="flex md:hidden">
          <a href="/">
            <img
              src={menu}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
