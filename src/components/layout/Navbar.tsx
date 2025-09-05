import React, { useState } from 'react'
import { Link } from 'react-router'
import { ModeToggle } from '../mode-toggler'
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass =
    "hover:bg-gray-100 px-2 py-2 rounded dark:text-white dark:hover:bg-gray-600"

  const navLinks = (
    <>
      <Link className={linkClass} to="/tasks">Home</Link>
      <Link className={linkClass} to="/tasks">About</Link>
      <Link className={linkClass} to="/tasks">Skills</Link>
      <Link className={linkClass} to="/tasks">Projects</Link>
      <Link className={linkClass} to="/tasks">Education</Link>
      <Link className={linkClass} to="/tasks">Contact</Link>
    </>
  )

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
        <div className="max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5 relative">
          {/* left side logo and name */}
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-2xl font-bold py-1 px-2 shadow border rounded flex items-center gap-2">
                Mehedi
              </h1>
            </div>
            {/* Desktop nav item menu */}
            <div className="hidden lg:block">
              <ul className="space-x-3">{navLinks}</ul>
            </div>
          </div>

          {/* right side items */}
          <div className="flex gap-2 md:gap-4 items-center">
            <div>
              <ModeToggle />
            </div>
            {/* Mobile & Tablet Hamburger */}
            <button
              className="flex items-center lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`inline-block transition-transform duration-700 ${
                  menuOpen
                    ? "rotate-180 scale-110"
                    : "rotate-360 scale-100"
                }`}
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </span>
            </button>
          </div>

          {/* Mobile & Tablet Menu (absolute under navbar) */}
          <div
            className={`lg:hidden absolute top-16 right-5 w-64 p-8 shadow-lg rounded bg-stone-200 dark:bg-stone-800 transition-all duration-300 text-black dark:text-white ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <ul className="flex flex-col gap-4">{navLinks}</ul>
          </div>
        </div>
      </nav>

      {/* Spacer div so content doesn’t hide under navbar */}
      <div className="h-16"></div>
    </>
  )
}

export default Navbar
