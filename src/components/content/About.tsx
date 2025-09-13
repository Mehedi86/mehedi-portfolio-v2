import { SquareUser } from 'lucide-react';
import React from 'react'
import { BsFillFilePersonFill } from "react-icons/bs";

export default function About() {
  return (
    <div className='border-t border-neutral-200 dark:border-neutral-700 h-screen'>
      <div className='lg:max-w-5/6 mx-auto py-20 px-4 lg:px-0'>
        <div>
          <h1 className='text-4xl font-bold'>Better to known: Behind the Code</h1>
          <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
            Here are some important things to know about me as a person and developer, beyond just the code I write.
          </p>
        </div>
        <div className='grid lg:grid-cols-3 my-12'>
          {/* Who I am */}
          <div className='border rounded p-6'>
            <div className='flex items-center gap-4'>
              <BsFillFilePersonFill
                className="text-[#603f88] size-10 drop-shadow-[0_2px_4px_rgba(151,101,174,0.8)]"
              />
              <h1 className='text-2xl font-semibold'>Who am I</h1>
            </div>
            <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
              A Junior Software Developer willing to work on valuable projects, achieving meaningful results that bring satisfaction, with a passion for problem-solving and a mindset without boundaries.
            </p>
          </div>
          {/* What I do */}
          <div></div>
          {/* What is my goal */}
          <div></div>
        </div>
      </div>
    </div>
  )
}
