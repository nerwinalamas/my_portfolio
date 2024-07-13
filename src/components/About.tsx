import { id } from "../assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const About = () => {
    return (
        <div id="about" className="p-4 my-40 flex items-center justify-center">
            <div className="text-center flex flex-col items-center justify-center gap-3 md:w-[80%] md:gap-5 xl:w-[65%]">
                <h2 className="text-5xl font-bold">About me</h2>
                <p className="text-slate-400">
                    Hello! I'm Nerwin Alamas, a passionate Frontend Developer. I
                    specialize in creating responsive, and user-friendly web
                    applications. My expertise lies in turning complex problems
                    into simple, elegant solutions, and I thrive on challenges
                    that push my skills to the next level. With a strong focus
                    on performance and usability. In my journey as a developer,
                    I've honed my skills in various modern web technologies, and
                    I'm always eager to learn and embrace new trends. Whether
                    working on a dynamic web app or a static site, my goal is to
                    build products that are not only functional but also
                    visually appealing. Let's collaborate and build something
                    exceptional together!
                </p>
                <div className="flex gap-3">
                    <Avatar>
                        <AvatarImage src={id} sizes="" />
                        <AvatarFallback>NA</AvatarFallback>
                    </Avatar>
                    <div className="text-start">
                        <h3 className="font-bold text-lg">Nerwin Alamas</h3>
                        <p className="text-slate-400">Frontend Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
