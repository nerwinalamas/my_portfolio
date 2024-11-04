export type Navbar = {
    id: string;
    title: string;
    path: string;
};

export type SkillCategory = 
    | 'frontend'
    | 'backend'
    | 'state management & data handling'
    | 'development tools'
    | string;

export type Skills = {
    id: string;
    title: string;
    icon: string;
    category: SkillCategory
};

export type Projects = {
    id: string;
    name: string;
    description: string;
    image: string;
    repo: string;
    demo: string;
    techStack: string[];
    email?: string;
    password?: string;
};

export type Services = string[];

export type Contacts = {
    id: string;
    icon: string;
    link: string;
    alt: string;
};
