import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <header className="sticky top-0 bg-white  z-40">
      <div className="relative z-50 shadow-md">
        <nav className="flex justify-between items-center max-w-7xl mx-auto h-20 ">
          <div className="sm:pl-4">
            <img
              src="MitchLogo.png"
              alt="logo"
              className="object-contain w-16 rounded-full"
            />
          </div>
          <ul className="sm:hidden lg:flex gap-8">
            <li className="lg:text-slate-900 text-xl font-thin hover:text-blue-600">
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "blue" : "",
                  };
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="lg:text-slate-900 text-xl font-thin hover:text-blue-600">
              <NavLink
                to="portfolio"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "blue" : "",
                  };
                }}
              >
                Portfolio
              </NavLink>
            </li>
            <li className="lg:text-slate-900 text-xl font-thin hover:text-blue-600">
              <NavLink
                to="about"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "blue" : "",
                  };
                }}
              >
                About Me
              </NavLink>
            </li>
            <li className="lg:text-slate-900 text-xl font-thin hover:text-blue-600">
              <NavLink
                to="contact"
                style={({ isActive }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isActive ? "blue" : "",
                  };
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="">
            <button className="sm:hidden lg:block bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white  py-3 px-4 rounded-md hover:border hover:bg-none bg:border border-blue-600 hover:text-blue-600">
              <a href="/Profile.pdf" download={true}>
                Download Cv
              </a>
            </button>
            <div
              className="sm:block  pr-4 lg:hidden"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <GiHamburgerMenu className="text-4xl text-gray-950 font-extrabold" />
              ) : (
                <IoClose className="text-4xl font-extrabold" />
              )}
            </div>
          </div>
        </nav>
      </div>
      {/* Small Screen Size */}
      {!open && (
        <div className="">
          <div className="absolute -z-10 transition duration-30 ease-in-out  bg-gray-200 top-0 right-0 bottom-0 left-0 h-80 w-full  lg:hidden">
            <ul className="h-80 flex flex-col gap-3 items-center justify-center">
              <Link to="/" onClick={() => setOpen("/")}>
                <li className="text-slate-800">Home</li>
              </Link>
              <Link to="about" onClick={() => setOpen("/about")}>
                <li className="text-slate-800">About</li>
              </Link>
              <Link to="contact" onClick={() => setOpen("/contact")}>
                <li className="text-slate-800">Contact</li>
              </Link>
              <Link to="portfolio" onClick={() => setOpen("/portfolio")}>
                <li className="text-slate-800">Portfolio</li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
