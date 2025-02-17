"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement).id !== "menu-toggle-btn" // Prevent immediate closing when clicking the toggle button
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = ["Home", "Events", "Schedule"];

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-black shadow-lg transition duration-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <div className="flex items-center space-x-3">
          <img
            src="/rgmcetlogo.png"
            className="h-12 sm:h-14 md:h-14"
            alt="RGMCET Logo"
          />
          <img
            src="/cse-ds-logo.png"
            className="h-20 md:h-24"
            alt="CSE-DS Logo"
          />
        </div>

        {/* Toggle button */}
        <button
          id="menu-toggle-btn"
          onClick={toggleMenu}
          type="button"
          className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden transition duration-200 ${
            isMenuOpen ? "bg-gray-700" : "bg-transparent"
          } hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300`}
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 17"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l15 15M1 16L16 1"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        <div
          ref={menuRef}
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col font-large font-black mt-4 rounded-lg md:space-x-8 md:flex-row md:mt-0 text-white">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`
                  }
                  className={`block py-2 px-3 md:p-0 rounded transition-all duration-300 ${
                    pathname ===
                    (item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(" ", "")}`)
                      ? "underline underline-offset-8 text-blue-700"
                      : "text-white"
                  }`}
                  onClick={closeMenu}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
