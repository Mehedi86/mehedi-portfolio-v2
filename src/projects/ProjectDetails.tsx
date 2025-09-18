'use client';

import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useParams } from 'react-router';
import { projects } from '@/constants';
import type { IProject } from '@/constants/types';

export default function ProjectDetails() {
  const [isMounted, setIsMounted] = useState(false);
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);
  const [projectData, setProjectData] = useState<IProject | null>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const routeName = useParams();

  const name = projectData?.name;
  const previewImages = projectData?.previewImages ?? [];
  const description = projectData?.description;
  const features = projectData?.features;
  const technologies = projectData?.technologies ?? [];
  const liveLink = projectData?.liveLink;
  const githubLink = projectData?.githubLink;

  useEffect(() => {
    setIsMounted(true);
    const exactData = projects.find(project => project.routeName === routeName.projectRoute);
    setProjectData(exactData ?? null);
  }, []);

  if (!isMounted || !projectData) return null;

  return (
    <div className='my-12 flex flex-col lg:flex-row w-full lg:w-5/6 mx-auto gap-10'>
      {/* Left Side - Image Slider */}
      <div className='relative w-full lg:w-8/12 px-4 pt-6 pb-10 bg-neutral-100 dark:bg-neutral-800 rounded'>
        <div className='relative rounded overflow-hidden h-[250px] sm:h-[350px] md:h-[400px] xl:h-[600px]'>
          {/* Swiper Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute z-20 top-1/2 -translate-y-1/2 left-4 bg-white/80 dark:bg-black/60 p-2 rounded-full text-black dark:text-white hover:bg-black/70 transition"
          >
            <MdKeyboardArrowLeft size={24} />
          </button>
          <button
            ref={nextRef}
            className="absolute z-20 top-1/2 -translate-y-1/2 right-4 bg-white/80 dark:bg-black/60 p-2 rounded-full text-black dark:text-white hover:bg-black/70 transition"
          >
            <MdKeyboardArrowRight size={24} />
          </button>

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
            className="w-full h-full"
          >
            {previewImages.map((imgPath, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={imgPath}
                  alt={`Preview ${idx}`}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setFullscreenImg(imgPath)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Right Side - Project Info */}
      <div className='w-full px-4 lg:w-4/12 py-4'>
        <div className='border-b border-neutral-600 pb-4'>
          <h1 className='text-3xl lg:text-4xl font-bold'>{name}</h1>
          <p className="text-base mt-2 md:text-lg italic text-gray-600 dark:text-gray-200">
            {description}
          </p>
        </div>

        <div className='border-b border-neutral-600 py-6'>
          <h1 className='text-2xl font-semibold'>Features and Functionality</h1>
          <p className="pt-3 text-sm md:text-base leading-relaxed">
            {features}
          </p>
        </div>

        <div className='border-b border-neutral-600 py-6'>
          <h1 className='text-2xl font-semibold'>Tools & Technologies</h1>
          <div className='pt-3 flex flex-wrap gap-2 font-semibold'>
            {technologies.map((t, i) => (
              <span key={i} className='bg-neutral-400 text-black rounded px-3 py-1 text-sm'>
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className='py-6 flex gap-4 flex-wrap'>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 py-2 px-4 rounded border hover:scale-105 transition-transform duration-300 cursor-pointer'
            >
              <CgWebsite size={20} /> Visit Site
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className='flex items-center gap-2 py-2 px-4 rounded border hover:scale-105 transition-transform duration-300 cursor-pointer'
            >
              <FaGithub size={20} /> View GitHub Code
            </a>
          )}
        </div>
      </div>

      {/* Fullscreen Image View */}
      {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setFullscreenImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl z-50"
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImg(null);
            }}
          >
            <IoClose />
          </button>
          <img
            src={fullscreenImg}
            alt="Fullscreen"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
}
