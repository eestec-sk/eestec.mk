"use client";

import Image from "next/image";
import React, { useState } from "react";
import Img from "../images/logos_icons/Skopje.svg";

const HeaderComponent = () => {
  const [isClick, setisClick] = useState(false);

  const toggleNavbar = (): void => {
    setisClick(!isClick);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  <Image src={Img} alt={""} width={235}></Image>
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-eestec hover:bg-eestec hover:text-white rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/events"
                  className="text-eestec hover:bg-eestec hover:text-white rounded-lg p-2"
                >
                  Events
                </a>
                <a
                  href="/blog"
                  className="text-eestec hover:bg-eestec hover:text-white rounded-lg p-2"
                >
                  Blog
                </a>
                <a
                  href="/contact"
                  className="text-eestec hover:bg-eestec hover:text-white rounded-lg p-2"
                >
                  Contact
                </a>
                <a
                  href="/login"
                  className="text-eestec hover:bg-eestec hover:text-white rounded-lg p-2"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="text-eestec hover:bg-eestec hover:text-white rounded-lg p-2"
                >
                  Register
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center 
              justify-center p-2 rounded-md text-white 
              hover:text-white focus:outline-none 
              focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#E52A30"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#E52A30"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 text-center space-y-1 sm:px-3">
              <a
                href="/"
                className="text-eestec block hover:bg-eestec hover:text-white rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/events"
                className="text-eestec block hover:bg-eestec hover:text-white rounded-lg p-2"
              >
                Events
              </a>
              <a
                href="/blog"
                className="text-eestec block hover:bg-eestec hover:text-white rounded-lg p-2"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-eestec block hover:bg-eestec hover:text-white rounded-lg p-2"
              >
                Contact
              </a>
              <a
                href="/login"
                className="text-eestec block hover:bg-eestec hover:text-white rounded-lg p-2"
              >
                Login
              </a>
              <a
                href="/register"
                className="text-eestec block hover:bg-eestec hover:text-white rounded-lg p-2"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default HeaderComponent;