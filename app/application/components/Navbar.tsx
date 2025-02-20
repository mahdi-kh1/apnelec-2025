"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

import Link from "next/link";
import Image from "next/image"; // Import Image component

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: "Home", href: "/application/" },
    { name: "About", href: "/application/about" },
    { name: "Services", href: "/application/services" },
    { name: "Contact", href: "/application/contact" },
  ];
  return (
    <nav className="dark:bg-gray-800 bg-white bg-opacity-50 p-4 should-hide-on-scroll w-4/5 mt-4 rounded-lg mx-auto relative z-50">
      <ul className="flex justify-between items-center w-full">
        <div className="flex space-x-4">
          <li>
            <Link href="/" className="font-bold text-inherit">
              <Image
                className="w-16 sm:w-16 md:w-20"
                src="/apnelec-ev-logo.png"
                alt="apnelec"
                width={80}
                height={80}
              />
            </Link>
          </li>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="text-black hover:text-gray-900 dark:text-white dark:hover:text-gray-300"
            >
              <Link
                href={item.href}
                className="w-full transition-colors hover:text-primary/80"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <li>
            <button className="text-white bg-primary px-4 py-2 rounded hover:bg-primary/80">
              Sign In
            </button>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
            >
              {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
