import { eduInfo } from "@/constants";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function EducationDemo() {
    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                }
            })
        })

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                // Update the animation as the user scrolls
                onUpdate: (self) => {
                    // Scale the timeline height as the user scrolls
                    // from 1 to 0 as the user scrolls up the screen
                    gsap.to(".timeline", {
                        scaleY: 1 - self.progress,
                    });
                },
            }
        })
    }, [])


    return (
        <div className="pb-60">
            <div id='education' className='lg:max-w-5/6 mx-auto py-20 lg:py-30 px-4 lg:px-0'>
                {/* header */}
                <div>
                    <h1 className="text-3xl lg:text-4xl font-bold">Education</h1>
                    <p className="mt-4 text-base md:text-lg italic text-gray-700 dark:text-gray-200">
                        Developed a solid academic background that complements my skills as a
                        developer and lifelong learner.
                    </p>
                </div>

                <div className='mt-12'>
                    <div className='relative z-50 xl:space-y-32 space-y-10'>
                        {eduInfo.map((edu) => (
                            <div key={edu.institute_name} className='exp-card-wrapper'>
                                <div className="xl:w-2/6 w-full timeline-card ">
                                    <div className="xl:flex items-center gap-4 p-6 ml-20">
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
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line mt-4 w-1 h-full" />
                                        </div>
                                        <div className="flex items-center xl:gap-10 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img className="w-16 h-16 rounded-full" src={edu.logoPath} alt="" />
                                            </div>
                                            <div className="p-6 border rounded">
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
