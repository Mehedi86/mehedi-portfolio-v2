import React from 'react'

import { Link } from 'react-router';
import { ModeToggle } from '../mode-toggler';



const Navbar = () => {
    return (
        <nav className='max-w-7xl mx-auto h-16 flex justify-between items-center gap-3 px-5'>
            {/* left side logo and name */}
            <div className='flex items-center gap-6'>
                <div>
                    
                    <h1 className='text-2xl font-bold border py-1 px-2 shadow rounded flex items-center gap-2'>Mehedi</h1>
                    
                </div>
                <div className='space-x-2'>
                    <Link to="/tasks">Home</Link>
                    <Link to="/tasks">About</Link>
                    <Link to="/tasks">Skills</Link>
                    <Link to="/tasks">Projects</Link>
                    <Link to="/tasks">Education</Link>
                    <Link to="/tasks">Contact</Link>
                </div>
            </div>

            {/* right side items */}
            <div className='flex gap-4 items-center'>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    )
}

export default Navbar