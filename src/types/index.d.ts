export type Navbar = {
    id: string;
    title: string;
    path: string;
};

export type Skills = {
    id: string;
    title: string;
    icon: any;
};

export type Projects = {
    id: string;
    name: string;
    description: string;
    image: string;
    repo: string;
    demo: string;
    techStack: string[];
};

export type Services = string[];

export type Contacts = {
    id: string;
    icon: any;
    link: string;
    alt: string;
};
