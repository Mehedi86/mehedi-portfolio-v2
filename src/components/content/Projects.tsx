'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function MyWorks() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="border-t border-neutral-200 dark:border-neutral-700 h-screen">
      <div className="lg:max-w-5/6 mx-auto py-20 px-4 lg:px-0">
        <div ref={ref} className="flex justify-between items-center border-b pb-4">
          {/* Left section */}
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold">My Works</h1>
            <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
              I strongly believe that my work reflects my identity.
            </p>
          </div>

          {/* Project counter */}
          <div className="text-right card2 p-4 border">
            <h1 className="text-3xl lg:text-4xl font-bold">
              {inView && <CountUp end={2} duration={4} />}
            </h1>
            <p className="uppercase text-sm md:text-base tracking-widest mt-2">
              Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
