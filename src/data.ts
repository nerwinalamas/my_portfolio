import { Contacts, Navbar, Projects, Services, Skills } from "./types";
import {
    html,
    css,
    javaScript,
    typeScript,
    react,
    next,
    node,
    express,
    socketIo,
    redux,
    zustand,
    tanstackQuery,
    zod,
    prisma,
    mongoDb,
    mySql,
    tailwindCss,
    bootstrap,
    php,
    codeIgniter,
    git,
    github,
    postman,
    figma,
    facebook,
    linkedin,
    supabase,
    vscode,
} from "./assets/svgs";
import {
    paAppointment,
    adminDashboard,
    kanbanBoard,
    netflixClone,
    reinventInstagram,
    threeS,
    videoSearch,
} from "./assets/images";

export const navbarData: Navbar[] = [
    {
        id: "1",
        title: "Home",
        path: "#home",
    },
    {
        id: "2",
        title: "About",
        path: "#about",
    },
    {
        id: "3",
        title: "Skills",
        path: "#skills",
    },
    {
        id: "4",
        title: "Projects",
        path: "#projects",
    },
    {
        id: "5",
        title: "Services",
        path: "#services",
    },
];

export const skillsData: Skills[] = [
    {
        id: "1",
        title: "HTML",
        icon: html,
    },
    {
        id: "2",
        title: "CSS",
        icon: css,
    },
    {
        id: "3",
        title: "JavaScript",
        icon: javaScript,
    },
    {
        id: "4",
        title: "TypeScript",
        icon: typeScript,
    },
    {
        id: "5",
        title: "React",
        icon: react,
    },
    {
        id: "6",
        title: "Next",
        icon: next,
    },
    {
        id: "7",
        title: "Node",
        icon: node,
    },
    {
        id: "8",
        title: "Express",
        icon: express,
    },
    {
        id: "9",
        title: "Socket.io",
        icon: socketIo,
    },
    {
        id: "10",
        title: "Redux",
        icon: redux,
    },
    {
        id: "11",
        title: "Zustand",
        icon: zustand,
    },
    {
        id: "12",
        title: "Tanstack Query",
        icon: tanstackQuery,
    },
    {
        id: "13",
        title: "Zod",
        icon: zod,
    },
    {
        id: "14",
        title: "Prisma",
        icon: prisma,
    },
    {
        id: "25",
        title: "Supabase",
        icon: supabase,
    },
    {
        id: "15",
        title: "MongoDB",
        icon: mongoDb,
    },
    {
        id: "16",
        title: "MySQL",
        icon: mySql,
    },
    {
        id: "17",
        title: "TailwindCSS",
        icon: tailwindCss,
    },
    {
        id: "18",
        title: "Bootstrap",
        icon: bootstrap,
    },
    {
        id: "19",
        title: "PHP",
        icon: php,
    },
    {
        id: "20",
        title: "CodeIgniter",
        icon: codeIgniter,
    },
    {
        id: "21",
        title: "Git",
        icon: git,
    },
    {
        id: "22",
        title: "Github",
        icon: github,
    },
    {
        id: "23",
        title: "Postman",
        icon: postman,
    },
    {
        id: "26",
        title: "VS Code",
        icon: vscode,
    },
    {
        id: "24",
        title: "Figma",
        icon: figma,
    },
];

export const projectsData: Projects[] = [
    {
        id: "pa-Appointment",
        name: "pa-Appointment",
        description: "A web appointment system is a digital platform designed to streamline scheduling and managing appointments.",
        email: "test@gmail.com",
        password: "123456",
        image: paAppointment,
        repo: "https://github.com/nerwinalamas/pa-appointment",
        demo: "https://pa-appointment.vercel.app/appointments",
        techStack: [
            "Next.js",
            "TypeScript",
            "Zustand",
            "Zod",
            "TailwindCSS",
            "Shadcn-ui",
            "Supabase",
        ],
    },
    {
        id: "Admin Dashboard",
        name: "Admin Dashboard",
        description:
            "A admin dashboard that provides analytics, user management, and various administrative tools for efficient management of web applications.",
        image: adminDashboard,
        repo: "https://github.com/nerwinalamas/admin_dashboard_fe",
        demo: "https://admin-dashboard-fe-mu.vercel.app/",
        techStack: [
            "React",
            "TypeScript",
            "Recharts",
            "Highcharts",
            "React Big Calendar",
            "Zustand",
            "TailwindCSS",
            "Shadcn-ui",
        ],
    },
    {
        id: "Kanban Board",
        name: "Kanban Board",
        description:
            "A task management application that allows users to organize tasks into columns such as 'Pending', 'In Progress', 'Blocked', and 'Done', with drag-and-drop functionality",
        image: kanbanBoard,
        repo: "https://github.com/nerwinalamas/kanban_board_fe",
        demo: "https://kanban-board-fe.pages.dev/",
        techStack: [
            "React",
            "TypeScript",
            "Zustand",
            "DND-kit",
            "TailwindCSS",
            "Shadcn-ui",
        ],
    },
    {
        id: "Reinvent Instagram",
        name: "Reinvent Instagram",
        description:
            "A social media platform where users can create profiles, follow other users, and engage with content through likes and comments",
        image: reinventInstagram,
        repo: "https://github.com/nerwinalamas/reinvent_instagram",
        demo: "https://youtu.be/711R0KjOSZU",
        techStack: [
            "React",
            "Node",
            "Express",
            "Socket.io",
            "MongoDB",
            "Cloudinary",
            "Zustand",
            "Tanstack Query",
            "React Responsive Masonry",
            "TailwindCSS",
            "Daisy-ui",
        ],
    },
    {
        id: "Video Search",
        name: "Video Search",
        description:
            "A video streaming platform that allows users to watch and search videos, with features like comments, like/unlike video, and related videos",
        image: videoSearch,
        repo: "https://github.com/nerwinalamas/video_search",
        demo: "https://youtu.be/iSM4L9v_qcM",
        techStack: ["React", "TailwindCSS", "Youtube API"],
    },
    {
        id: "3S",
        name: "3S",
        description:
            "An online store that enables users to browse and purchase products, with features like add to carts, search product and filter product.",
        image: threeS,
        repo: "https://github.com/nerwinalamas/3S",
        demo: "https://3s-phi.vercel.app/",
        techStack: ["React", "TailwindCSS", "Fakestore API"],
    },
    {
        id: "NetFlix Clone",
        name: "NetFlix Clone",
        description:
            "A UI implementation of a streaming service that offers a wide variety of TV shows, movies, and documentaries, designed to replicate the look and feel of Netflix",
        image: netflixClone,
        repo: "https://github.com/nerwinalamas/Netflix-Clone",
        demo: "https://netflix-clone-iota-silk.vercel.app/",
        techStack: ["React", "CSS", "TMDB API"],
    },
];

export const servicesData: Services = [
    "Frontend Development",
    "Responsive Design",
    "Version Control",
    "Integration with Backend",
    "Mobile-first Development",
    "API Integration",
    "Continuous Learning",
    "Data Visualization",
    "UI/UX Design Implementation",
    "Performance Optimization",
    "Cross-Browser Compatibility",
    "Code Reviews and Collaboration",
    "Testing and Debugging",
    "Deployment and Maintenance",
];

export const contactData: Contacts[] = [
    {
        id: "1",
        icon: facebook,
        link: "https://www.facebook.com/nerwinalamas",
        alt: "Nerwin's facebook profile",
    },
    {
        id: "2",
        icon: linkedin,
        link: "https://www.linkedin.com/in/nerwinalamas/",
        alt: "Nerwin's linked-in profile",
    },
    {
        id: "3",
        icon: github,
        link: "https://github.com/nerwinalamas",
        alt: "Nerwin's github profile",
    },
];
