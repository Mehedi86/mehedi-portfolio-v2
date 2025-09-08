import React from 'react'
import { MdOutlineContacts } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { SiReaddotcv } from "react-icons/si";

export default function Banner() {
    const buttonClass = "bg-white text-black px-2 py-1 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300"
    return (
        <div className="relative flex items-center justify-center h-[calc(100vh-64px)] overflow-hidden ">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-pink-400 blur-[160px] opacity-60"></div>
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-400 blur-[160px] opacity-60"></div>
                <div className="absolute top-30 left-1/2 w-[400px] h-[400px] rounded-full bg-purple-400 blur-[160px] opacity-50"></div>
            </div>

            {/* Content */}
            <div className="px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hey, I'm Mehedi <br />
                    A Software Developer</h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                    A Fullstack Developer passionate about building creative applications. I love to innovate new designs and share beautiful, dynamic websites with the world.
                </p>

                <div>
                    <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-300">
                        Better Looks. Better Functionality. Faster Loading.
                    </p>

                    <div className='my-4 flex gap-4 flex-wrap'>
                        <button className={`${buttonClass}`}><MdOutlineContacts size={16} /> Contact Me</button>
                        <button className={`${buttonClass}`}><GoProjectSymlink size={16}/>View Projects</button>
                        <button className={`${buttonClass}`}><SiReaddotcv size={16}/>Download Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
