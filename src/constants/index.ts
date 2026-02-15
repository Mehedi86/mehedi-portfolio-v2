import type { IProject } from "./types";

export const projects: IProject[] = [
    {
        id: 'project1',
        name: 'EventAura',
        routeName: 'eventAura',
        previewImages:
            ['/projects/eventAura1.PNG'],
        cardHeight: '',
        description: 'An event booking application for managing and reserving events.',
        features: [
            "Organize and manage events seamlessly",
            "Track events from planning to execution",
            "Ensure smooth coordination among participants",
            "Enhance audience engagement and interaction",
            "Provide a hassle-free event management experience"
        ],
        technologies: ['Next.js', 'MongoDB', 'Next Auth', 'Tailwind'],
        bgImage: '/projects/abstract1.jpg',
        isBgRequired: false,
        siteInfo: {
            liveLink: 'https://event-aura-project-3-v445.vercel.app',
            codes: [
                {
                    type: 'Code',
                    link: 'https://github.com/Mehedi86/event-aura-project-3'
                }
            ]
        }
    },
    {
        id: 'project2',
        name: 'Adoptly',
        routeName: 'Adoptly',
        previewImages: ['/projects/adoptly1.PNG'],
        cardHeight: '',
        description: 'A pet adoption and donation platform that connects animal lovers with pets in need, making it easy to adopt, donate, and support animal welfare.',
        features: [
            "Browse pets available for adoption with detailed profiles and images",
            "Register and manage user profiles securely",
            "Submit adoption requests and track their status",
            "Donate to support pets and shelters",
            "Admin dashboard to manage pets, users, and donation records"
        ],
        technologies: ['Next.js', 'MongoDB', 'Next Auth', 'Tailwind'],
        bgImage: '/projects/adoptly1.PNG',
        isBgRequired: true,
        siteInfo: {
            liveLink: 'https://adoptly-team-project.vercel.app',
            codes: [
                {
                    type: 'Frontend',
                    link: 'https://github.com/Mehedi86/adoptly-team-project'
                },
                {
                    type: 'Backend',
                    link: 'https://github.com/Mehedi86/adoptly-team-project-backend'
                }
            ]
        }
    },
    {
        id: 'project3',
        name: 'QuickSurvey',
        routeName: 'buddyGarage',
        previewImages: ['/projects/quick-survey.PNG'],
        cardHeight: 'lg:h-[190px] xl:h-[180px] 2xl:h-[250px]',
        description: 'An interactive social survey platform that leverages AI suggestions, live feedback, and voice command integration to make surveys smarter and more engaging.',
        features: [
            "Create and share social surveys effortlessly",
            "Receive AI-driven suggestions for better survey questions",
            "Collect real-time responses with live updates",
            "Use voice commands to navigate and answer surveys",
            "Analyze survey data with intuitive visualizations",
            "Engage participants with interactive and dynamic surveys",
            "Access survey history and insights anytime"
        ],
        technologies: ['Next.js', 'MongoDB', 'Next Auth', 'Tailwind', 'OpenAI API'],
        bgImage: '/projects/abstract2.jpg',
        isBgRequired: true,
        siteInfo: {
            liveLink: 'https://fydp-project-next.vercel.app',
            codes: [
                {
                    type: 'Code',
                    link: 'https://fydp-project-next.vercel.app'
                }
            ]
        }
    }

]


export const logoImg = [
    {
        imgPath: '/3d/react.png',
        name: 'react'
    },
    {
        imgPath: '/3d/next.PNG',
        name: 'next'
    },
    {
        imgPath: '/3d/redux.png',
        name: 'redux'
    },
    {
        imgPath: '/3d/node.png',
        name: 'node'
    },
    {
        imgPath: '/3d/mongodb.png',
        name: 'mongodb'
    },
    {
        imgPath: '/3d/postgres.png',
        name: 'postgres'
    },
    {
        imgPath: '/3d/sql.png',
        name: 'sql'
    },
    {
        imgPath: '/3d/tailwind.png',
        name: 'tailwind'
    },
    {
        imgPath: '/3d/git.svg',
        name: 'git'
    },
    {
        imgPath: '/3d/firebase.png',
        name: 'firebase'
    }
]

export const eduInfo = [
    {
        institute_name: 'Daffodil International University',
        logoPath: '/diu.png',
        duration: '2021 - 2024',
        level: 'University',
        description: [
            'Completed Bachelor of Science in Computer Science and Engineering (CSE).',
            'Gained knowledge in core areas such as Computer Networking, Peripheral Devices, Database Management Systems (DBMS), and System Analysis.',
            'Built a strong technical foundation through academic projects and coursework.'
        ]
    },
    {
        institute_name: 'Bogura Polytechnic Institute',
        logoPath: '/bogura.png',
        duration: '2016 - 2021',
        level: 'College',
        description: [
            'Chose a technical path over traditional fields, enrolling in a leading technical college in Bogura.',
            'Discovered the vast opportunities within Computer Science and Engineering.',
            'Developed strong motivation to pursue higher studies and build a career in CSE.'
        ]
    },
    {
        institute_name: 'Rani BilasMoni Govt. Boys High School',
        logoPath: '/rani.png',
        duration: '2011 - 2016',
        level: 'High School',
        description: [
            'First exposure to computers through the school’s small computer lab.',
            'Spent tiffin breaks exploring computers, despite limited resources.',
            'Sparked curiosity and nurtured early interest in technology and computing.'
        ]
    }
];

export const certificates = [
    {
        id: 'ph112',
        certificateName: 'Complete Web Development with Programming Hero',
        technologies: 'HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Firebase, Next.js',
        institute: 'Programming Hero',
        published: 'July 2025',
        certificate_link: 'https://drive.google.com/file/d/1KOz3vs8N3Mq9CJLZbW5Ydiwl5PduTtZD/view?usp=drive_link',
        duration: '6 Months'
    },
    {
        id: 'fcc112',
        certificateName: 'Front End Development Libraries',
        technologies: 'Bootstrap, jQuery, SASS, React, Redux',
        institute: 'Free Code Camp',
        published: 'September 6, 2025',
        certificate_link: 'https://drive.google.com/file/d/1bS-F_9fF4T3FtdxvtK1huTVhEYP38McQ/view?usp=sharing',
        duration: 'N/A'
    }
]
