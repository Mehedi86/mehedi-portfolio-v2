import React from 'react'

export default function Banner() {
    return (
        <div className="relative flex items-center justify-center h-[calc(100vh-64px)] overflow-hidden ">
            {/* Background Blur Effect */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-pink-400 blur-[160px] opacity-60"></div>
                <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-400 blur-[160px] opacity-60"></div>
                <div className="absolute top-30 left-1/2 w-[400px] h-[400px] rounded-full bg-purple-400 blur-[160px] opacity-50"></div>
            </div>

            {/* Content */}
            <div className="text-center">
                <h1 className="text-5xl font-bold">Hey, I'm Mehedi</h1>
                <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                    A Fullstack Developer passionate about building creative apps
                </p>
            </div>
        </div>
    )
}
