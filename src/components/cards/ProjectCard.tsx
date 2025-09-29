
import type { IProject } from '@/constants/types';
import { Link } from 'react-router'

export default function ProjectCard({ project }: { project: IProject }) {

    const { routeName, previewImages } = project;
    // const stackClass = "bg-neutral-400 text-black px-2 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300"
    return (
        <div className=''>
            <Link to={`/projects/${routeName}`}>
                <div className='hover:scale-110 transition duration-300'>
                    <img className='w-full h-[200px]' src={previewImages[0]} alt="" />
                </div>
            </Link>
            <div className='my-6 md:my-4 lg:my-0 border-t-2 border-neutral-400 dark:border-neutral-600 lg:border-none  w-1/2 mx-auto'></div>
        </div>
    )
}
