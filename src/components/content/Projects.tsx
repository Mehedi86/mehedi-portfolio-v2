import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../../cardStyle.css'
import { Link } from 'react-router';

export default function MyWorks() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const stackClass = "bg-neutral-400 text-black px-2 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300"
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
        {/* main box */}
        <div className='lg:flex gap-4'>
          {/* project box left side*/}
          <div className='lg:w-1/2 mt-12 space-y-4'>
            {/* project1 */}
            <div className="p-2 lg:p-20 bg-project1 bg-black/60 object-cover rounded lg:rounded-lg relative overflow-hidden shadow-lg group cursor-pointer">
              <img className='rounded' src="/projects/eventAura1.PNG" alt="" />
              {/* project1 details */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <div className='text-white w-1/2'>
                  <h1 className='text-2xl font-semibold'>EventAura</h1>
                  <p className="text-base md:text-lg italic text-gray-100 dark:text-gray-200">
                    An event booking application for managing and reserving events.
                  </p>
                  {/* project1 tech stack */}
                  <div className='flex gap-2 mt-2 font-semibold'>
                    <span className={`${stackClass}`}>Next.js</span>
                    <span className={`${stackClass}`}>MongoDB</span>
                    <span className={`${stackClass}`}>Tailwind</span>
                  </div>
                </div>
              </div>
              <Link to="/projects/eventAura">
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                  <h1 className='text-neutral-200 text-2xl font-semibold'>View Details</h1>
                </div>
              </Link>
            </div>
            <div className="p-2 lg:p-20 bg-project1 bg-black/60 object-cover rounded lg:rounded-lg relative overflow-hidden shadow-lg group cursor-pointer">
              <img className='rounded' src="/projects/eventAura1.PNG" alt="" />
              {/* project1 details */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <div className='text-white w-1/2'>
                  <h1 className='text-2xl font-semibold'>EventAura</h1>
                  <p className="text-base md:text-lg italic text-gray-100 dark:text-gray-200">
                    An event booking application for managing and reserving events.
                  </p>
                  {/* project1 tech stack */}
                  <div className='flex gap-2 mt-2 font-semibold'>
                    <span className={`${stackClass}`}>Next.js</span>
                    <span className={`${stackClass}`}>MongoDB</span>
                    <span className={`${stackClass}`}>Tailwind</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                <h1 className='text-neutral-200 text-2xl font-semibold'>View Details</h1>
              </div>
            </div>
          </div>
          {/* project box right side */}
          <div className='lg:w-1/2 mt-4 lg:mt-12 space-y-4'>
            {/* project1 */}
            <div className="p-2 lg:h-[300px] lg:p-20 bg-project1 bg-black/60 object-cover rounded lg:rounded-lg relative overflow-hidden shadow-lg group cursor-pointer">
              <img className='rounded' src="/projects/eventAura1.PNG" alt="" />
              {/* project1 details */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <div className='text-white w-1/2'>
                  <h1 className='text-2xl font-semibold'>EventAura</h1>
                  <p className="text-base md:text-lg italic text-gray-100 dark:text-gray-200">
                    An event booking application for managing and reserving events.
                  </p>
                  {/* project1 tech stack */}
                  <div className='flex gap-2 mt-2 font-semibold'>
                    <span className={`${stackClass}`}>Next.js</span>
                    <span className={`${stackClass}`}>MongoDB</span>
                    <span className={`${stackClass}`}>Tailwind</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                <h1 className='text-neutral-200 text-2xl font-semibold'>View Details</h1>
              </div>
            </div>
            <div className="p-2 lg:p-20 bg-project1 bg-black/60 object-cover rounded lg:rounded-lg relative overflow-hidden shadow-lg group cursor-pointer">
              <img className='rounded' src="/projects/eventAura1.PNG" alt="" />
              {/* project1 details */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <div className='text-white w-1/2'>
                  <h1 className='text-2xl font-semibold'>EventAura</h1>
                  <p className="text-base md:text-lg italic text-gray-100 dark:text-gray-200">
                    An event booking application for managing and reserving events.
                  </p>
                  {/* project1 tech stack */}
                  <div className='flex gap-2 mt-2 font-semibold'>
                    <span className={`${stackClass}`}>Next.js</span>
                    <span className={`${stackClass}`}>MongoDB</span>
                    <span className={`${stackClass}`}>Tailwind</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                <h1 className='text-neutral-200 text-2xl font-semibold'>View Details</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
