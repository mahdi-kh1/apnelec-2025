"use client";

import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image"; // Import Image component
import { Sun, Moon, User, ChevronDown } from "lucide-react"; // Import Lucide icons
import LineMdMoonTwotoneAltLoop from "@/public/icons/LineMdMoonTwotoneAltLoop";
import LineMdSunRisingTwotoneLoop from "@/public/icons/LineMdSunRisingTwotoneLoop";
import LineMdAccount from "@/public/icons/LineMdAccount";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { id: 1, name: "Home", href: "/application/", disabled: false },
    {
      id: 2,
      name: "Solar solutions",
      href: "/application/Solar-solutions",
      disabled: false,
      submenu: [
        {
          id: 21,
          name: "About Solar",
          href: "/application/Solar-solutions/about-Solar",
          disabled: false,
        },
        {
          id: 22,
          name: "Solar energy calculator",
          href: "/application/Solar-solutions/solar-energy-calculator",
          disabled: false,
        },
        {
          id: 23,
          name: "Complaints",
          href: "/application/Solar-solutions/Complaints",
          disabled: false,
        },
      ],
    },
    {
      id: 3,
      name: "EV-solutions",
      href: "/application/EV-solutions",
      disabled: false,
    },
    {
      id: 4,
      name: "Services",
      href: "/application/Services",
      disabled: false,
      submenu: [
        {
          id: 41,
          name: "Commercial",
          href: "/application/Services/Commercial",
          disabled: false,
        },
        {
          id: 42,
          name: "Domestic",
          href: "/application/Services/Domestic",
          disabled: false,
        },
        {
          id: 43,
          name: "Inspection and Testing",
          href: "/application/Services/Inspection-and-Testing",
          disabled: false,
        },
      ],
    },
    {
      id: 5,
      name: "About",
      href: "/application/About",
      disabled: false,
    },
    { id: 6, name: "Contact", href: "/application/Contact", disabled: false },
    { id: 7, name: "Blog", href: "/application/Blog", disabled: false },
  ];

  return (
    <header className="sticky top-4 z-50">
      <nav className="dark:bg-gray-800 bg-white dark:bg-opacity-50 bg-opacity-50 backdrop-blur-xl p-4 should-hide-on-scroll w-4/5 rounded-lg mx-auto relative z-50 shadow-lg">
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
                key={item.id}
                className={`relative group text-black hover:text-gray-900 dark:text-white dark:hover:text-gray-300`}
              >
                <Link
                  href={item.href}
                  className={`w-full transition-colors hover:text-primary/80 flex items-center`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 transition-transform group-hover:rotate-180" />
                  )}
                </Link>
                {item.submenu && (
                  <ul className="absolute left-0 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                    {item.submenu.map((subItem) => (
                      <li
                        key={subItem.id}
                        className={`px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700`}
                      >
                        <Link href={subItem.href}>{subItem.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <li>
              <button>
                <LineMdAccount />
              </button>
            </li>
            <li>
              <button onClick={toggleTheme}>
                {theme === "dark" ? (
                  <LineMdMoonTwotoneAltLoop />
                ) : (
                  <LineMdSunRisingTwotoneLoop />
                )}
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
