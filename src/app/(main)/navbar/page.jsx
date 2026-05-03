"use client";
import { useState } from "react";
import { Avatar, Button, Link } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const session = authClient.useSession();
  const user = session.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

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
                {isMenuOpen ?
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                : <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                }
              </svg>
            </button>

            <div>
              <img src="/weblogo.png" alt="website logo" />
            </div>
          </div>

          <div>
            <ul className="hidden items-center gap-4 md:flex text-black">
              <li>
                <Link
                  className="text-black no-underline hover:border-blue-700 border-1 border-blue-500 rounded-sm px-1  bg-blue-400 hover:text-white "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-black no-underline hover:border-blue-700 border-1 border-blue-500 rounded-sm px-1  bg-blue-400 hover:text-white "
                  href="/api/courses"
                >
                  Courses
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-black no-underline hover:border-blue-700 border-blue-500 border-1 rounded-sm px-1  bg-blue-400 hover:text-white "
                  href="/profile"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            {!user && (
              <ul className="flex items-center  text-sm gap-5">
                <li>
                  <Link href={"/login"}>SignUp</Link>
                </li>
                <li>
                  <Link href={"/login"}>SignIn</Link>
                </li>
              </ul>
            )}

            {user && (
              <div className="flex gap-3">
                <Avatar size="sm">
                  <Avatar.Image
                    alt="John Doe"
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <Button onClick={handleLogout} size="sm" variant="danger">
                  SignOut
                </Button>
              </div>
            )}
            
          </div>
        </header>

        {isMenuOpen && (
          <div className="border-t border-separator md:hidden">
            <ul className="flex flex-col gap-2 p-4">
              <li>
                <Link
                  className="text-black no-underline hover:border-blue-700 border-1 rounded-sm px-12  bg-blue-400 hover:text-white "
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-black no-underline hover:border-blue-700 border-1 rounded-sm px-10  bg-blue-400 hover:text-white "
                  href="/components/api"
                >
                  Courses
                </Link>
              </li>
              <li className="">
                <Link
                  className="text-black no-underline hover:border-blue-700 border-1 rounded-sm px-9  bg-blue-400 hover:text-white "
                  href="/"
                >
                  My Profile
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
