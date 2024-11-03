import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { motion } from "framer-motion";
import { skillsData } from "../data";
import { fadeIn, fadeInUp, fadeInWithExit } from "../lib/animation";

const Skills = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? skillsData
            : skillsData.filter((skill) => skill.category === filter);

    return (
        <motion.div
            id="skills"
            {...fadeInUp}
            className="p-4 my-40 flex flex-col gap-10"
        >
            <div className="flex flex-col gap-5">
                <motion.h1
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.2 }}
                    className="text-5xl font-bold"
                >
                    Skills
                </motion.h1>
                <Tabs defaultValue="All" className="w-full">
                    <TabsList className="h-max flex-wrap bg-slate-900">
                        <TabsTrigger
                            value="All"
                            onClick={() => setFilter("All")}
                        >
                            All
                        </TabsTrigger>
                        <TabsTrigger
                            value="frontend"
                            onClick={() => setFilter("frontend")}
                        >
                            Frontend
                        </TabsTrigger>
                        <TabsTrigger
                            value="backend"
                            onClick={() => setFilter("backend")}
                        >
                            Backend
                        </TabsTrigger>
                        <TabsTrigger
                            value="state management & data handling"
                            onClick={() =>
                                setFilter("state management & data handling")
                            }
                        >
                            State Management & Data Handling
                        </TabsTrigger>
                        <TabsTrigger
                            value="development tools"
                            onClick={() => setFilter("development tools")}
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
                        <img
                            src={data.icon}
                            alt={data.title}
                            className="w-10 h-10"
                        />
                        <p className={`text-center text-xs`}>{data.title}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Skills;
