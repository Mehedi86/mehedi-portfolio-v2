// import { useState } from 'react'
// import { ModeToggle } from '../mode-toggler'
// import { FaBars, FaTimes } from "react-icons/fa"

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false)

//   const linkClass =
//     "hover:bg-gray-100 px-2 py-2 rounded dark:text-white dark:hover:bg-gray-600 cursor-pointer"

//   const handleNavClick = (id: string) => {
//     const section = document.querySelector(id)
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" })
//       setMenuOpen(false) // close mobile menu after click
//     }
//   }

//   const navLinks = (
//     <>
//       <li className={linkClass} onClick={() => handleNavClick('#home')}>Home</li>
//       <li className={linkClass} onClick={() => handleNavClick('#about')}>About</li>
//       <li className={linkClass} onClick={() => handleNavClick('#projects')}>Projects</li>
//       <li className={linkClass} onClick={() => handleNavClick('#skills')}>Skills</li>
//       <li className={linkClass} onClick={() => handleNavClick('#education')}>Education</li>
//       <li className={linkClass} onClick={() => handleNavClick('#contact')}>Contact</li>
//     </>
//   )

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-60 bg-transparent backdrop-blur-md">
//         <div className="w-full lg:max-w-5/6 mx-auto h-16 flex justify-between items-center gap-3 px-5 relative border-b border-b-neutral-300 dark:border-none">
//           <div className="flex items-center gap-6">
//             <h1 className="text-2xl font-bold py-1 px-2 shadow border rounded text-neutral-400 cursor-pointer">
//               Mehedi
//             </h1>
//             <ul className="hidden lg:flex space-x-3">{navLinks}</ul>
//           </div>

//           <div className="flex gap-2 md:gap-4 items-center">
//             <ModeToggle />
//             <button
//               className="flex items-center lg:hidden"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <span
//                 className={`inline-block transition-transform duration-700 ${menuOpen
//                   ? "rotate-180 scale-110"
//                   : "rotate-360 scale-100"
//                   }`}
//               >
//                 {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//               </span>
//             </button>
//           </div>

//           <div
//             className={`lg:hidden absolute top-16 right-5 w-64 p-8 shadow-lg rounded bg-stone-200 dark:bg-stone-800 transition-all duration-300 text-black dark:text-white ${menuOpen
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 -translate-y-4 pointer-events-none"
//               }`}
//           >
//             <ul className="flex flex-col gap-4">{navLinks}</ul>
//           </div>
//         </div>
//       </nav>

//       <div className="h-16"></div>
//     </>
//   )
// }

// export default Navbar

import { useState } from 'react'
import { ModeToggle } from '../mode-toggler'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-router'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass =
    "hover:bg-gray-100 px-2 py-2 rounded dark:text-white dark:hover:bg-gray-600 cursor-pointer"

  const handleNavClick = (id: string) => {
    if (window.location.pathname === '/') {
      // If on home, scroll to section
      const section = document.querySelector(id)
      if (section) {
        section.scrollIntoView({ behavior: "smooth" })
        setMenuOpen(false)
      }
    } else {
      // If not on home, redirect to home with hash
      window.location.href = `/${id}`
      setMenuOpen(false)
    }
  }

  const navLinks = (
    <>
      <li className={linkClass} onClick={() => handleNavClick('#home')}>Home</li>
      <li className={linkClass} onClick={() => handleNavClick('#about')}>About</li>
      <li className={linkClass} onClick={() => handleNavClick('#projects')}>Projects</li>
      <li className={linkClass} onClick={() => handleNavClick('#skills')}>Skills</li>
      <li className={linkClass} onClick={() => handleNavClick('#education')}>Education</li>
      <li className={linkClass} onClick={() => handleNavClick('#contact')}>Contact</li>
    </>
  )

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-60 bg-transparent backdrop-blur-md">
        <div className="w-full lg:max-w-5/6 mx-auto h-16 flex justify-between items-center gap-3 px-5 relative border-b border-b-neutral-300 dark:border-none">
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold py-1 px-2 shadow border rounded text-neutral-400 cursor-pointer">
              Mehedi
            </Link>
            <ul className="hidden lg:flex space-x-3">{navLinks}</ul>
          </div>

          <div className="flex gap-2 md:gap-4 items-center">
            <ModeToggle />
            <button
              className="flex items-center lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span
                className={`inline-block transition-transform duration-700 ${menuOpen
                  ? "rotate-180 scale-110"
                  : "rotate-360 scale-100"
                  }`}
              >
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </span>
            </button>
          </div>

          <div
            className={`lg:hidden absolute top-16 right-5 w-64 p-8 shadow-lg rounded bg-stone-200 dark:bg-stone-800 transition-all duration-300 text-black dark:text-white ${menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
          >
            <ul className="flex flex-col gap-4">{navLinks}</ul>
          </div>
        </div>
      </nav>

      <div className="h-16"></div>
    </>
  )
}

export default Navbar

