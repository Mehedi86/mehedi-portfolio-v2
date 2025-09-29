
import { FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHackerrank } from 'react-icons/si'
import { Link } from 'react-router'

export default function Footer() {
    return (
        <div className='border-t border-neutral-200 dark:border-neutral-700'>
            <div className="lg:max-w-5/6 mx-auto py-10 lg:py-14 px-4 lg:px-0 xl:flex justify-between space-y-6">
                {/* left content */}
                <div className='space-y-6 xl:w-2/3'>
                    <div className='text-xl font-bold'>
                        <h1>Md. Abdullah Al Mehedi</h1>
                        <h1>From Bangladesh</h1>
                    </div>
                    <p>© 2025 Mehedi. All rights are reserved.</p>
                </div>
                {/* right content */}
                <div className='md:w-2/3 xl:w-1/3'>
                    <h1 className='text-base md:text-lg text-gray-700 dark:text-gray-200'>Design inspiration from online resourses. Built with React.js, Typescript, Tailwind CSS, Shadcn UI, Gsap Animation and custom CSS</h1>
                    <div className='flex gap-6 items-center mt-4 xl:justify-end text-gray-700 dark:text-gray-200'>
                        <Link to="https://github.com/Mehedi86" target="_blank"><FaGithub size={28} /></Link>
                        <Link to="https://www.linkedin.com/in/mahdi866" target="_blank"><FaLinkedin size={28} /></Link>
                        <Link to="https://discord.com/channels/706997778190172271/706997778190172274" target="_blank"><FaDiscord size={32} /></Link>
                        <Link to="https://www.hackerrank.com/profile/abdullahalmehed1" target="_blank"><SiHackerrank size={28} /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
