import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Portfolio", "TechStacks", "Testimonies", "Contact"];

  return (
    <nav className="w-full bg-black text-yellow-100 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to={'/'} className="text-xl font-semibold font-Outfit">Sifan</Link>
          <ul className="hidden md:flex md:items-center md:space-x-6">
            {links.map((link) => (
              
                <NavLink
        to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
        
      >
        <p className='font-Prata'>{link}</p>
        <hr className='w-3/4 border-none h-[1.5px] bg-yellow-100 hidden' />
      </NavLink>
              
            ))}
          </ul>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md  hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
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
          </div>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden p-4 space-y-3 shadow-lg"
        >
          {links.map((link) => (
            <NavLink
              key={link}
              to={link.toLowerCase() === "home" ? "/" : `/${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block text-base font-medium py-2 px-3 rounded hover:bg-black ${
                  isActive ? "bg-yellow-100 text-black" : ""
                }`
              }
            >
              {link}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
