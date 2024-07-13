import { skillsData } from "../data";

const Skills = () => {
    return (
        <div id="skills" className="p-4 my-40 flex flex-col gap-10">
            <h2 className="text-5xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-5 justify-center">
                {skillsData.map((data) => (
                    <div
                        key={data.id}
                        className="w-32 h-32 p-4 rounded-md flex flex-col items-center justify-center gap-5 bg-slate-800"
                    >
                        <img
                            src={data.icon}
                            alt={data.title}
                            className="w-10 h-10"
                        />
                        <p className={`text-center text-xs`}>{data.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
