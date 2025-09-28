import React from 'react'

export default function Contact() {
    return (
        <div className='border-t border-neutral-200 dark:border-neutral-700'>
            <div className="lg:max-w-5/6 mx-auto py-20 lg:py-30 px-4 lg:px-0">
                <div className="bg-[url('/projects/abstract.jpg')] w-full xl:h-[600px] bg-no-repeat bg-cover bg-center bg-neutral-700/60 p-6 space-y-6 xl:space-y-0  xl:p-12  xl:flex overflow-hidden rounded border shadow-2xl">
                    {/* left content - message */}
                    <div className='w-full xl:w-2/3 flex items-center text-white'>
                        <div>
                            <h1 className='text-4xl font-bold'>Turning creativity into digital experiences — let’s collaborate! </h1>
                            <p className='mt-4 text-base md:text-lg italic dark:text-gray-200'>Have a project in mind or simply want to chat? Let’s connect and make it happen!</p>
                        </div>
                    </div>
                    {/* right content - contact form */}
                    <div className='w-full xl:w-1/3 flex items-center'>
                        <form className='w-full space-y-1 text-white bg-neutral-950 p-6 rounded border border-stone-700'>
                            <div className='flex flex-col space-y-2'>
                                <label className='font-semibold'>Name</label>
                                <input className='border border-neutral-700 p-2 rounded' type="text" placeholder='Your Name' />
                            </div>
                            <div className='flex flex-col space-y-1'>
                                <label className='font-semibold'>Email</label>
                                <input className='border border-neutral-700 p-2 rounded' type="text" placeholder='contact@example.com' />
                            </div>
                            <div className='flex flex-col space-y-1'>
                                <label className='font-semibold'>Message</label>
                                <textarea className='border border-neutral-700 p-2 rounded h-40' placeholder='write your message here...' />
                            </div>
                            <div className='mt-4 flex justify-end'>
                                <button className="text-white dark:text-white border border-stone-700 w-fit dark:border-neutral-600 px-4 py-2 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
