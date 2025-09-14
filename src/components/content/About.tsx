import { BsFillFilePersonFill } from "react-icons/bs";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { GoGoal } from "react-icons/go";
import { FaFileCode } from "react-icons/fa";
import '../../cardStyle.css'

export default function About() {
  return (
    <div className='border-t border-neutral-200 dark:border-neutral-700 h-screen'>
      <div className='lg:max-w-5/6 mx-auto py-20 lg:py-30 px-4 lg:px-0'>
        <div>
          <h1 className='text-3xl lg:text-4xl font-bold'>Better to known: Behind the Code</h1>
          <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
            Here are some important things to know about me as a person and developer, beyond just the code I write.
          </p>
        </div>
        <div className='grid lg:grid-cols-3 gap-12 my-12'>
          {/* Who I am */}
          <div className='card p-0.5'>
            <div className="bg-white dark:bg-black p-6 rounded-lg border h-full">
              <div className='flex items-center gap-4'>
                <BsFillFilePersonFill
                  className="text-[#603f88] size-10 drop-shadow-[0_2px_4px_rgba(151,101,174,0.8)]  dark:drop-shadow-[0_1px_1px_rgba(151,101,174,0.8)]"
                />
                <h1 className='text-2xl font-semibold'>Who am I</h1>
              </div>
              <p className="mt-6 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
                A Junior Software Developer willing to work on valuable projects, achieving meaningful results that bring satisfaction, with a passion for problem-solving and a mindset without boundaries.
              </p>
              <div className='my-6'>
                <ul className='space-y-4 text-lg list-disc list-inside'>
                  <li>Full Name: Md. Abdullah Al Mehedi</li>
                  <li>Location: Dhaka, Bangladesh</li>
                  <li>Role: Junior Full Stack Developer</li>
                  <li>Focus: MERN Stack & Problem Solving</li>
                  <li>Hobbies: Touring and exploring new things, places</li>
                </ul>
              </div>
            </div>
          </div>
          {/* What I do */}
          <div className='card p-0.5'>
            <div className="bg-white dark:bg-black p-6 rounded-lg border h-full">
              <div className='flex items-center gap-4'>
                <FaFileCode
                  className="text-[#603f88] size-10 drop-shadow-[0_2px_4px_rgba(151,101,174,0.8)]  dark:drop-shadow-[0_1px_1px_rgba(151,101,174,0.8)]"
                />
                <h1 className='text-2xl font-semibold'>What I do</h1>
              </div>
              <p className="mt-6 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
                I focus on building practical, reusable solutions that deliver value to both users and the development community.
              </p>
              <div className='my-6'>
                <ul className='space-y-4 text-lg list-disc list-inside'>
                  <li>UI/UX Design and Implementation</li>
                  <li>Fullstack Web Development</li>
                  <li>Database Design</li>
                  <li>API Integration</li>
                  <li>Optimizing User Experiences</li>
                </ul>
              </div>
            </div>
          </div>
          {/* What is my goal */}
          <div className='card p-0.5'>
            <div className="bg-white dark:bg-black p-6 rounded-lg border h-full">
              <div className='flex items-center gap-4'>
                <GoGoal
                  className="text-[#603f88] size-10 drop-shadow-[0_2px_4px_rgba(151,101,174,0.8)]  dark:drop-shadow-[0_1px_1px_rgba(151,101,174,0.8)]"
                />
                <h1 className='text-2xl font-semibold'>Who am I</h1>
              </div>
              <p className="mt-6 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
                Websites have become an essential part of our daily lives, and I continue to see tremendous growth in this field. My goal is to contribute meaningfully to the web development industry — both as a problem solver and as an active community member. I strive to grow my own skills while supporting and inspiring others who are passionate about building innovative digital experiences.
              </p>
              <div className='my-6'>
                <ul className='space-y-4 text-lg list-disc list-inside'>
                  <li>Grow as a full-stack developer through continuous learning</li>
                  <li>Contribute to open-source and community-driven projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
