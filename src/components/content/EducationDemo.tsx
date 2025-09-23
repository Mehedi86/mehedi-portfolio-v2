import { eduInfo } from "@/constants";



export default function EducationDemo() {
    return (
        <div>
            <div id='education' className='lg:max-w-5/6 mx-auto py-20 lg:py-30 px-4 lg:px-0'>
                {/* header */}
                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold">Education</h1>
                    <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
                        Developed a solid academic background that complements my skills as a
                        developer and lifelong learner.
                    </p>
                </div>

                <div className='mt-12 relative'>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {eduInfo.map((edu) => (
                            <div key={edu.institute_name} className='exp-card-wrapper'>
                                <div className="xl:w-2/6 w-full">
                                    <div className="flex items-center gap-4 p-6">
                                        <img
                                            src={edu.logoPath}
                                            alt={edu.institute_name}
                                            className="w-20 h-20 object-contain"
                                        />
                                        <div>
                                            <h1 className="font-semibold text-xl">
                                                {edu.institute_name}
                                            </h1>
                                            <p className="text-gray-500 dark:text-gray-300">
                                                🗓️ {edu.duration}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:4/6">
                                    <div className="flex items-center">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line w-1 h-full" />
                                        </div>
                                        <div className="flex items-center xl:gap-10 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img className="w-16 h-16 rounded-full" src={edu.logoPath} alt="" />
                                            </div>
                                            <div>
                                                <h1>This is the details of the institution I have read in</h1>
                                                <ul>
                                                    <li>Number 1</li>
                                                    <li>Number 2</li>
                                                    <li>Number 3</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
