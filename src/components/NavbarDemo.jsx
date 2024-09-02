import React from "react";
// import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const NavbarDemo = () => {
  return (
    <header className="bg-black mt-2 container mx-auto  px-5 py-2  md:px-10">
      <nav className="flex items-center justify-between md:px-4 md:py-2">
        <h2>Object-AI</h2>

        <div className="hidden md:flex md:gap-10 text-gray-400">
          {["iphone", "Macbook", "Tablet"].map((navItem) => (
            <div className="hover:text-white md:text-xl" key={navItem}>
              {navItem}
            </div>
          ))}
        </div>

        <div className="flex gap-5 md:gap-6">
          <FiSearch
            className="w-6 h-6 md:w-15 md:h-15 text-neutral-500"
            alt="search icon"
          />
          <FaUserCircle
            className="w-6 h-6 md:w-15 md:h-15 text-neutral-500"
            alt="account icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavbarDemo;
