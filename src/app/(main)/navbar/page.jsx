"use client";
import { useState } from "react";
import { Button, Link } from "@heroui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="sticky top-0 z-40  mx-auto w-full">
      <nav className=" shadow-md  rounded-md bg-blue-300">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            <div>
              <img src="/weblogo.png" alt="website logo" />
            </div>
          </div>

          <div>
            <ul className="hidden items-center gap-4 md:flex text-black">
              <li>
                <Link className="text-black" href="/">Home</Link>
              </li>
              <li className="">
                <Link className="text-black" href="/components/api">Courses</Link>
              </li>
              <li className="">
                <Link className="text-black" href="/">My Profile</Link>
              </li>
            </ul>
          </div>
          <div className="flex  ">
           <button className="bg-blue-400 px-3 rounded-l-full text-white hover:bg-red-400"><Link className="no-underline text-white" href="/components/login">Login</Link></button>
            <button
              className="bg-blue-400 py-1 px-3 rounded-r-full text-white hover:bg-green-500 transition-all duration-300"
            >
             <Link className="no-underline text-white" href="/components/register">Register</Link>
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/components/api">Courses</Link>
              </li>
              <li>
                <Link href="/">My Profile</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;