'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function EventAura() {
    const [isMounted, setIsMounted] = useState(false);
    const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const images = ["eventAura1.PNG"]; // add more images if needed

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <div className='my-12 lg:flex w-full lg:w-5/6 lg:mx-auto lg:gap-10'>
            {/* left side project preview with slider */}
            <div className='relative w-full lg:w-8/12 px-8 lg:px-16 pt-6 lg:pt-16 pb-16 lg:pb-20 bg-neutral-100 dark:bg-neutral-800 rounded lg:h-[400px] xl:h-[600px]'>
                <div className='rounded overflow-hidden'>
                    {/* Custom Navigation Buttons */}
                    <button
                        ref={prevRef}
                        className="absolute z-20 bottom-4 left-20 bg-neutral-200 p-1 lg:p-2 rounded-full text-black hover:bg-black/70"
                    >
                        <MdKeyboardArrowLeft size={30} />
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute z-20 bottom-4 right-20 bg-neutral-200 p-1 lg:p-2 rounded-full text-black hover:bg-black/70"
                    >
                        <MdKeyboardArrowRight size={30} />
                    </button>

                    {/* Swiper Slider */}
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onBeforeInit={(swiper) => {
                            if (swiper.params.navigation) {
                                (swiper.params.navigation as any).prevEl = prevRef.current;
                                (swiper.params.navigation as any).nextEl = nextRef.current;
                            }
                        }}
                        loop={true}
                        speed={1000}
                        className="rounded h-full"
                    >
                        {images.map((imgName) => (
                            <SwiperSlide key={imgName}>
                                <img
                                    src={`/projects/${imgName}`}
                                    alt={`Banner ${imgName}`}
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => setFullscreenImg(`/projects/${imgName}`)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* right side information */}
            <div className='w-full px-4 lg:w-4/12 h-[600px] py-6'>
                <div className='border-b border-neutral-600 pb-4'>
                    <h1 className='text-4xl font-bold'>EventAura</h1>
                    <p className="text-base md:text-lg italic text-gray-600 dark:text-gray-200">
                        An event booking application for managing and reserving events.
                    </p>
                </div>
                <div className='border-b border-neutral-600 py-8'>
                    <h1 className='text-2xl font-semibold'>Features and Functionality</h1>
                    <p className="pt-4">
                        EventAura is a smart event management system that helps organize, manage, and track events seamlessly — from planning to execution — ensuring smooth coordination, better engagement, and a hassle-free experience.
                    </p>
                </div>
                <div className='border-b border-neutral-600 py-8'>
                    <h1 className='text-2xl font-semibold'>Tools & Technologies</h1>
                    <div className='pt-4 flex flex-wrap text-white font-semibold space-x-2'>
                        <span className='bg-neutral-400 rounded py-1 px-4 my-1'>Next.js</span>
                        <span className='bg-neutral-400 rounded py-1 px-4 my-1'>MongoDB</span>
                        <span className='bg-neutral-400 rounded py-1 px-4 my-1'>Next Auth</span>
                        <span className='bg-neutral-400 rounded py-1 px-4 my-1'>Tailwind</span>
                    </div>
                </div>
                <div className='py-8 flex gap-4 flex-wrap'>
                    <button className='flex items-center gap-2 py-2 px-4 rounded border hover:scale-105 transition-transform duration-300 cursor-pointer'>
                        <CgWebsite size={20} /> Visit Site
                    </button>
                    <button className='flex items-center gap-2 py-2 px-4 rounded border hover:scale-105 transition-transform duration-300 cursor-pointer'>
                        <FaGithub size={20} /> Visit Github Code
                    </button>
                </div>
            </div>

            {/* Fullscreen Overlay */}
            {fullscreenImg && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={() => setFullscreenImg(null)}
                >
                    <button className="absolute top-8 right-8 text-white text-3xl z-50">
                        <IoClose />
                    </button>
                    <img
                        src={fullscreenImg}
                        alt="Fullscreen"
                        className="max-h-full max-w-full object-contain"
                    />
                </div>
            )}
        </div>
    );
}
