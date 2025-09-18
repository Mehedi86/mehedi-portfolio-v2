import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../../cardStyle.css'
import ProjectCard from '../cards/ProjectCard';
import { projects } from '@/constants';
import { LuGalleryVerticalEnd } from "react-icons/lu";

export default function Projects() {
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
                {/* main box */}
                <div className='mt-12 lg:flex gap-4'>
                    {/* left side box */}
                    <div className='lg:w-1/2 space-y-4'>
                        {projects.slice(0, 2).map(project =>
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />)}
                    </div>
                    {/* right side box */}
                    <div className='lg:w-1/2 mt-4 lg:mt-0 space-y-4'>
                        {projects.slice(2, 4).map(project =>
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />)}
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <button className="bg-white dark:bg-black dark:text-white border dark:border-neutral-600 border-neutral-200 text-black px-4 py-2 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300"><LuGalleryVerticalEnd size={16} />See All Projects</button>
                </div>
            </div>
        </div>
    );
}
