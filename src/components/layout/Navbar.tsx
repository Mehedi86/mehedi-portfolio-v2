import React, { useState } from 'react'

import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggler';
import { FaBars, FaOpencart, FaTimes } from "react-icons/fa";



const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navLinks = (
        <>
            <Link to="/tasks">Home</Link>
            <Link to="/tasks">About</Link>
            <Link to="/tasks">Skills</Link>
            <Link to="/tasks">Projects</Link>
            <Link to="/tasks">Education</Link>
            <Link to="/tasks">Contact</Link>
        </>
    )
    return (
        <div>
            <nav className='max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5'>
                {/* left side logo and name */}
                <div className='flex items-center gap-6'>
                    <div>
                        <h1 className='text-2xl font-bold py-1 px-2 shadow border rounded flex items-center gap-2'>Mehedi</h1>
                    </div>
                    {/* Desktop nav item menu */}
                    <div className='hidden lg:block'>
                        <ul className='space-x-2'>{navLinks}</ul>
                    </div>
                </div>

                {/* right side items */}
                <div className='flex gap-2 md:gap-4 items-center'>
                    <div>
                        <ModeToggle />
                    </div>
                    {/* Mobile & Tablet Hamburger */}
                    <button className='flex items-center lg:hidden' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className={`inline-block transition-transform duration-700 ${menuOpen ? 'rotate-180 scale-110' : 'rotate-360 scale-100'}`}>
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </span>
                    </button>
                </div>
            </nav>
            {/* Mobile & Tablet Menu */}
            <div
                className={`lg:hidden w-full md:w-1/3 md:absolute right-5 p-8 shadow-lg rounded bg-stone-200 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"
                    }`}
            >
                <ul className="flex flex-col gap-4">{navLinks}</ul>
            </div>
        </div>
    )
}

export default Navbar