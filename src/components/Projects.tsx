import { useState } from "react";
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
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, fadeInWithExit } from "../lib/animation";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState<
    Record<string, boolean>
  >({});

  const toggleProjectDetails = (projectId: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  return (
    <motion.div id="projects" {...fadeInUp} className="p-4 my-40">
      <div className="h-24 lg:hidden"></div>
      <Carousel className="w-full flex flex-col gap-10">
        <div className="flex justify-between">
          <motion.h2
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="text-3xl lg:text-5xl font-bold"
          >
            Projects
          </motion.h2>
          <div className="flex gap-5">
            <CarouselPrevious className="w-10 h-10 rounded-full" />
            <CarouselNext className="w-10 h-10 rounded-full" />
          </div>
        </div>
        <CarouselContent>
          {projectsData.map((project, index) => (
            <CarouselItem
              key={project.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <motion.div
                {...fadeInWithExit}
                transition={fadeInWithExit.transition(index)}
                className="p-2 flex flex-col rounded-lg border border-slate-800 hover:bg-slate-800/50"
              >
                <div className="w-full h-60 overflow-hidden rounded-lg bg-slate-800">
                  <LazyLoadImage
                    src={project.image}
                    alt={project.name}
                    className="object-cover border rounded-lg border-slate-800/90"
                    title={project.name}
                    width="640"
                    height="360"
                    effect="blur"
                  />
                </div>
                <div className="h-full flex flex-col gap-2 p-4">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="min-h-24">{project.description}</p>
                  <button
                    onClick={() => toggleProjectDetails(project.id)}
                    className="w-max mb-2 flex items-center gap-2 hover:text-slate-400 transition-colors"
                  >
                    {expandedProjects[project.id] ? "see less" : "see more"}{" "}
                    {expandedProjects[project.id] ? (
                      <ChevronUp className="size-4" />
                    ) : (
                      <ChevronDown className="size-4" />
                    )}
                  </button>

                  {expandedProjects[project.id] && (
                    <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-1 duration-200 mb-2">
                      {(project.email || project.password) && (
                        <div className="space-y-1">
                          <h4 className="font-semibold text-teal-500">
                            Login Credentials:
                          </h4>
                          {project.email && (
                            <p>
                              Email:{" "}
                              <span className="font-bold">{project.email}</span>
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
                        </div>
                      )}

                      <div className="flex flex-wrap gap-3">
                        {project.techStack?.map((tech) => (
                          <Badge variant="secondary" key={tech}>
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col gap-5 md:flex-row mt-auto">
                    <Button
                      variant="secondary"
                      className="w-full flex items-center justify-center gap-2"
                      asChild
                    >
                      <Link
                        to={project.demo}
                        target="_blank"
                        title={project.name}
                      >
                        <ExternalLink className="size-4" />
                        Demo
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full flex items-center justify-center gap-2"
                      asChild
                    >
                      <Link
                        to={project.repo}
                        target="_blank"
                        title={project.name}
                      >
                        <Github className="size-4" />
                        Repo
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
};

export default Projects;
