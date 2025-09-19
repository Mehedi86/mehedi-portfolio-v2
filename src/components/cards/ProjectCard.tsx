
import type { IProject } from '@/constants/types';
import { Link } from 'react-router'

export default function ProjectCard({ project }: { project: IProject }) {
    console.log(project)
    const { name, description, technologies, routeName, cardHeight, previewImages, bgImage, isBgRequired } = project;
    const stackClass = "bg-neutral-400 text-black px-2 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300"
    return (
        <div>
            <div>
                <img className='w-full h-[200px]' src={previewImages[0]} alt="" />
            </div>
        </div>
    )
}
