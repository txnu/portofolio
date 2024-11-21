import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center p-4 text-white">
        <div className="text-2xl font-bold overflow-hidden">
          <h1 className="inline-block animate-typing overflow-hidden whitespace-nowrap">
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
      </div>
    </div>
  );
};

export default Navbar;
