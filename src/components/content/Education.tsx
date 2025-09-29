import { eduInfo } from "@/constants";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function Education() {
    useGSAP(() => {
        gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card) => {
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
                                            <div className="p-6 border rounded ml-2 md:ml-0">
                                                <h1 className="text-2xl font-bold">{edu.level}</h1>
                                                <div className="max-w-[250px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[610px] pl-4 pt-2">
                                                    {edu.description.map((des, idx)=> <li key={idx}>{des}</li>)}
                                                </div>
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
