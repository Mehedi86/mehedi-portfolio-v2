
import type { IProject } from '@/constants/types';
import { Link } from 'react-router'

export default function ProjectCard({ project }: { project: IProject }) {
    console.log(project)
    const { name, description, technologies, routeName, cardHeight, previewImages } = project;
    const stackClass = "bg-neutral-400 text-black px-2 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300"
    return (
        <div className="p-2 md:p-10 lg:p-20 bg-project1 bg-black/60 object-cover rounded lg:rounded-lg relative overflow-hidden shadow-lg group cursor-pointer">
            <div className={cardHeight}>
                <img className='rounded w-full h-full' src={previewImages[0]} alt="" />
            </div>
            {/* project1 details */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <div className='text-white w-1/2'>
                    <h1 className='text-2xl font-semibold'>{name}</h1>
                    <p className="text-base md:text-lg italic text-gray-100 dark:text-gray-200">
                        {description}
                    </p>
                    {/* project1 tech stack */}
                    <div className='flex gap-2 mt-2 font-semibold'>
                        {technologies.map((tech: string, idx: number) => <span key={idx} className={`${stackClass}`}>{tech}</span>)}
                    </div>
                </div>
            </div>
            <Link to={`/projects/${routeName}`}>
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition duration-300 flex justify-center items-center">
                    <h1 className='text-neutral-200 text-2xl font-semibold'>View Details</h1>
                </div>
            </Link>
        </div>
    )
}
