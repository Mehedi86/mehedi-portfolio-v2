import { logoImg } from '@/constants'
import React from 'react'
import earthBg from '/images/earth.jpg' // make sure the path is correct

export default function Skills() {
    return (
        <div className="border-t border-neutral-200 dark:border-neutral-700 bg-[url('/images/earth.jpg')] bg-no-repeat bg-cover bg-center">
            <section
                className="lg:max-w-5/6 mx-auto py-20 lg:py-30 px-4 lg:px-0"
            >
                {/* ✅ Foreground Content Layer */}
                <div>
                    <div>
                        <h1 className='text-3xl lg:text-4xl font-bold text-white'>My Skillset</h1>
                        <p className="mt-4 text-base md:text-lg italic text-gray-200">
                            Here are some important things to know about me as a person and developer, beyond just the code I write.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
                        {logoImg.map((logo, idx) => (
                            <div
                                key={idx}
                                className="w-full h-60 
                            flex flex-col items-center justify-center gap-2 lg:gap-4
                            shadow-md hover:shadow-xl transform hover:scale-105 
                            transition duration-300 group animate-fade-in p-8 md:p-12 lg:p-16"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                <img
                                    src={logo.imgPath}
                                    alt={logo.name}
                                    className="w-full h-full object-contain 
                                group-hover:scale-110 transition-transform duration-300 
                                animate-float"
                                />
                                <span className="text-xs sm:text-sm text-gray-300 mt-2 text-center">
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
