import { Link } from "react-router-dom";
import { projectsData } from "../data";
import { Badge } from "./ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";

const Projects = () => {
    return (
        <div id="projects" className="p-4 my-40">
            <Carousel className="w-full flex flex-col gap-10">
                <div className="flex justify-between">
                    <h2 className="text-3xl lg:text-5xl font-bold">Projects</h2>
                    <div className="flex gap-5">
                        <CarouselPrevious className="w-10 h-10 rounded-full" />
                        <CarouselNext className="w-10 h-10 rounded-full" />
                    </div>
                </div>
                <CarouselContent>
                    {projectsData.map((project) => (
                        <CarouselItem
                            key={project.id}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <div className="p-2 flex flex-col rounded-lg overflow-hidden hover:bg-slate-800/50">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-cover border rounded-lg border-slate-800/90"
                                />
                                <div className="flex flex-col gap-2 p-4">
                                    <h3 className="text-xl font-bold">
                                        {project.name}
                                    </h3>
                                    <p>{project.description}</p>
                                    {project.email && project.password && (
                                        <h4 className="font-semibold text-teal-500">
                                            Login Credentials:
                                        </h4>
                                    )}
                                    {project.email && (
                                        <p>
                                            Email:{" "}
                                            <span className="font-bold">
                                                {project.email}
                                            </span>
                                        </p>
                                    )}
                                    {project.password && (
                                        <p>
                                            Password:{" "}
                                            <span className="font-bold">
                                                {project.password}
                                            </span>
                                        </p>
                                    )}
                                    <div className="flex flex-wrap gap-3">
                                        {project.techStack.map((tech) => (
                                            <Badge
                                                variant="secondary"
                                                key={tech}
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="mt-5 flex flex-col gap-5 md:flex-row">
                                        <Link
                                            to={project.demo}
                                            target="_blank"
                                            className="px-7 py-2 text-center rounded-md hover:underline text-slate-800 bg-slate-100"
                                        >
                                            Demo
                                        </Link>
                                        <Link
                                            to={project.repo}
                                            target="_blank"
                                            className="px-7 py-2 text-center rounded-md hover:underline text-slate-100 bg-slate-900 border"
                                        >
                                            Repo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
};

export default Projects;
