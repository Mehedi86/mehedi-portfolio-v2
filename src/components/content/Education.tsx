import { edu } from '@/constants'

export default function Education() {
    return (
        <div>
            <div className='lg:max-w-5/6 mx-auto py-20 lg:py-30 px-4 lg:px-0'>
                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold">Education</h1>
                    <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
                        Developed a solid academic background that complements my skills as a
                        developer and lifelong learner.
                    </p>
                </div>
                {/* main section */}
                <div className='mt-12'>
                    {/* Timeline Section */}
                    <div className="mt-20 relative">
                        <div className="relative z-50 xl:space-y-10 space-y-10">
                            {edu.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-6">
                                    {/* Timeline + GlowCard */}
                                    <div className="xl:w-2/6 w-full">
                                        <div className="flex items-center gap-4 p-6">
                                            <img
                                                src={item.logoPath}
                                                alt={item.institute_name}
                                                className="w-20 h-20 object-contain"
                                            />
                                            <div>
                                                <h1 className="font-semibold text-xl">
                                                    {item.institute_name}
                                                </h1>
                                                <p className="text-gray-500 dark:text-gray-300">
                                                    🗓️ {item.duration}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
