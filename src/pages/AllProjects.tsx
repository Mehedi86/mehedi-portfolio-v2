import { projects } from '@/constants';
import { LuGalleryVerticalEnd } from "react-icons/lu";
import ProjectCard from '@/components/cards/ProjectCard';

export default function AllProjects() {


    return (
        <div className='lg:max-w-5/6 mx-auto'>
            <div className="border-t border-neutral-200 dark:border-neutral-700 z-10">
                <div className="py-20 px-4 lg:px-0">
                    {/* Left section */}
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold">My Works</h1>
                        <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
                            I strongly believe that my work reflects my identity.
                        </p>
                    </div>
                </div>
                {/* main box */}
                <div className='md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-12'>
                    {projects.map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
                {/* <div className='flex justify-center mt-20'>
                    <button className="bg-white dark:bg-black dark:text-white border dark:border-neutral-600 border-neutral-200 text-black px-4 py-2 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300"><LuGalleryVerticalEnd size={16} />See All Projects</button>
                </div> */}
            </div>
        </div>
    );
}
