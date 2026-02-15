import { MdOutlineContacts } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { SiReaddotcv } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss, SiJavascript } from "react-icons/si";
import { Link } from 'react-router';
import { useCallback } from "react";

export default function Banner() {
    const buttonClass = "bg-white text-black px-2 py-1 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300"

    const scrollToSection = useCallback((id: string) => {
        const section = document.querySelector(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <div className="relative flex items-center justify-center h-[calc(100vh-64px)] overflow-hidden">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-pink-400 blur-[160px] opacity-60"></div>
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-400 blur-[160px] opacity-60"></div>
                <div className="absolute top-30 left-1/2 w-[400px] h-[400px] rounded-full bg-purple-400 blur-[160px] opacity-50"></div>
            </div>

            {/* Content */}
            <div className="px-4 md:px-8">
                <div className="md:w-1/2 mx-auto flex justify-center items-center text-3xl lg:text-4xl text-blue-500 my-12">
                    <div className='flex gap-6'>
                        <FaReact title="React" />
                        <SiNextdotjs title="Next.js" />
                        <FaNodeJs title="Node.js" className="text-green-600" />
                        <SiMongodb title="MongoDB" className="text-green-500" />
                        <SiTailwindcss title="Tailwind CSS" className="text-sky-500" />
                        <SiJavascript title="JavaScript" className="text-yellow-500" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hey, I'm Mehedi <br />
                    A Software Developer</h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 font-[500]">
                    A <span className='font-bold'>Fullstack Developer</span> passionate about building creative applications. I love to innovate new designs and share beautiful, dynamic websites with the world.
                </p>

                <div>
                    <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-300">
                        Better Looks. Better Functionality. Faster Loading.
                    </p>

                    <div className='my-4 flex gap-4 flex-wrap'>
                        <button onClick={() => scrollToSection('#contact')} className={`${buttonClass}`}><MdOutlineContacts size={16} /> Contact Me</button>
                        <Link to="/projects" className={`${buttonClass}`} target="_blank"><GoProjectSymlink size={16} />View Projects</Link>
                        <Link to="https://drive.google.com/file/d/1GrIcv0TK_2cTGCzIq6DYPkXjyI5zbXRw/view?usp=sharing" className={`${buttonClass}`} target="_blank"><SiReaddotcv size={16} />Download Resume</Link>
                    </div>
                    {/* social links */}
                    <div className='flex w-1/2 md:w-1/3 mx-auto justify-between items-center my-12'>
                        <Link to="https://github.com/Mehedi86" target="_blank"><FaGithub size={28} /></Link>

                        <Link to="https://www.linkedin.com/in/mahdi866" target="_blank"><FaLinkedin size={28} /></Link>
                        <div className='bg-black w-0.5 h-10'></div>
                        <Link to="https://discord.com/channels/706997778190172271/706997778190172274" target="_blank"><FaDiscord size={32} /></Link>
                        <Link to="https://www.hackerrank.com/profile/abdullahalmehed1" target="_blank"><SiHackerrank size={28} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
