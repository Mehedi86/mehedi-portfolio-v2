import { LuGalleryVerticalEnd } from 'react-icons/lu'
import { Link } from 'react-router'

export default function CertificateBtn() {
    return (
        <div className='w-full lg:w-5/6 mx-auto flex justify-end mt-10 mb-20 '>
            <Link to="/certificates" className="bg-white dark:bg-black dark:text-white border w-fit dark:border-neutral-600 border-neutral-200 text-black px-4 py-2 rounded cursor-pointer flex items-center gap-2 hover:scale-105 transition-transform duration-300 mr-4 lg:mr-0"><LuGalleryVerticalEnd size={16} />See My Certificates</Link>
        </div>
    )
}
