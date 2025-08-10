import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";
import { skillsData } from "../data";
import { fadeIn, fadeInUp, fadeInWithExit } from "../lib/animation";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { SkillCategory } from "../types";

const Skills = () => {
   const [filter, setFilter] = useState<SkillCategory | "All">("All");

    const filteredProjects =
        filter === "All"
            ? skillsData
            : skillsData.filter((skill) => skill.category === filter);

    const handleTabs = (category: SkillCategory | "All") => {
        setFilter(category);
    };

    return (
        <motion.div
            id="skills"
            {...fadeInUp}
            className="p-4 my-40 flex flex-col gap-10"
        >
            <div className="h-20 lg:hidden"></div>
            <div className="flex flex-col gap-5">
                <motion.h2
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.2 }}
                    className="text-5xl font-bold"
                >
                    Skills
                </motion.h2>
                <Tabs defaultValue="All" className="w-full">
                    <TabsList className="h-max flex-wrap bg-slate-900">
                        <TabsTrigger
                            value="All"
                            onClick={() => handleTabs("All")}
                        >
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            value="frontend"
                            onClick={() => handleTabs("frontend")}
                        >
                            Frontend
                        </TabsTrigger>
                        <TabsTrigger
                            value="backend"
                            onClick={() => handleTabs("backend")}
                        >
                            Backend
                        </TabsTrigger>
                        <TabsTrigger
                            value="mobile"
                            onClick={() => handleTabs("mobile")}
                        >
                            Mobile
                        </TabsTrigger>
                        <TabsTrigger
                            value="state management & data handling"
                            onClick={() =>
                                handleTabs("state management & data handling")
                            }
                        >
                            State Management & Data Handling
                        </TabsTrigger>
                        <TabsTrigger
                            value="development tools"
                            onClick={() => handleTabs("development tools")}
                        >
                            Development Tools
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
                {filteredProjects.map((data, index) => (
                    <motion.div
                        key={data.id}
                        {...fadeInWithExit}
                        transition={fadeInWithExit.transition(index)}
                        className="w-32 h-32 p-4 rounded-md flex flex-col items-center justify-center gap-5 bg-slate-800"
                    >
                        <LazyLoadImage
                            src={data.icon}
                            alt={data.title}
                            className="w-10 h-10"
                            title={data.title}
                            effect="blur"
                        />
                        <p className={`text-center text-xs`}>{data.title}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;