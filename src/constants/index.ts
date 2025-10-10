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
            liveLink: 'https://event-management-ten-topaz.vercel.app',
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
        name: 'Edulab',
        routeName: 'eduLab',
        previewImages:
            ['/projects/edulab1.PNG'],
        cardHeight: '',
        description: 'A smart library management system designed to manage books, members, and borrowing activities efficiently.',
        features: [
            "Manage books with details like title, author, and category",
            "User-friendly member registration and profile management",
            "Borrowing and returning system with due date tracking",
            "Search and filter books easily",
            "Admin dashboard for monitoring library activities"
        ]
        ,
        technologies: ['Next.js', 'MongoDB', 'Next Auth', 'Tailwind'],
        bgImage: '/projects/abstract2.jpg',
        isBgRequired: true,
        siteInfo: {
            liveLink: 'https://silly-cobbler-5517a0.netlify.app/',
            codes: [
                {
                    type: 'Frontend',
                    link: 'https://github.com/Mehedi86/assignment-eleven'
                },
                {
                    type: 'Backend',
                    link: 'https://github.com/Mehedi86/assignment-eleven-server'
                }
            ]
        }
    },
    {
        id: 'project3',
        name: 'BuddyGarage',
        routeName: 'buddyGarage',
        previewImages:
            ['/projects/buddyGarage1.PNG'],
        cardHeight: 'lg:h-[190px] xl:h-[180px] 2xl:h-[250px]',
        description: 'A car servicing platform, can book service through online and also take suggetion',
        features: [
            "Book and manage car maintenance services online",
            "Schedule service appointments with ease",
            "Track real-time service status updates",
            "Receive automated service reminders",
            "Access complete vehicle service history",
            "Streamline garage operations for efficiency",
            "Enjoy hassle-free vehicle maintenance management"
        ],
        technologies: ['Next.js', 'MongoDB', 'Next Auth', 'Tailwind'],
        bgImage: '/projects/abstract2.jpg',
        isBgRequired: true,
        siteInfo: {
            liveLink: 'https://buddy-Garage-ten-topaz.vercel.app',
            codes: [
                {
                    type: 'Code',
                    link: 'https://github.com/Mehedi86/buddy-garage'
                }
            ]
        }
    },
    {
        id: 'project4',
        name: 'SpendSence',
        routeName: 'spendSence',
        previewImages:
            ['/projects/spendSence1.PNG'],
        cardHeight: 'lg:h-[240px] xl:h-[250px] 2xl:h-[350px]',
        description: 'An event booking application for managing and reserving events.',
        features: [
            "Record and track daily expenses easily",
            "Categorize expenses for better financial insights",
            "View spending summaries and analytics",
            "Set monthly budgets and monitor limits",
            "Track income alongside expenses",
            "Visualize data with charts and reports",
            "Secure user accounts with authentication"
        ],
        technologies: ['Next.js', 'MongoDB', 'Next Auth', 'Tailwind'],
        bgImage: '/projects/abstract1.jpg',
        isBgRequired: false,
        siteInfo: {
            liveLink: 'https://event-management-ten-topaz.vercel.app',
            codes: [
                {
                    type: 'Code',
                    link: 'https://github.com/Mehedi86/event-aura-project-3'
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
