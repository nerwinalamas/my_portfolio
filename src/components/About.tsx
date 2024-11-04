import { id } from "../assets/images";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp, scaleIn } from "../lib/animation";
import { LazyLoadImage } from "react-lazy-load-image-component";

const About = () => {
    return (
        <motion.div
            id="about"
            {...fadeInUp}
            className="p-4 flex flex-col items-center justify-center gap-4 xl:py-20"
        >
            <div className="h-20 lg:hidden"></div>
            <motion.h2
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
                className="text-4xl font-bold"
            >
                About me
            </motion.h2>

            <motion.p
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.4 }}
                className="max-w-2xl text-center text-gray-300"
            >
                Hello! I'm Nerwin Alamas, a passionate Frontend Developer. I
                specialize in creating responsive, and user-friendly web
                applications. My expertise lies in turning complex problems into
                simple, elegant solutions, and I thrive on challenges that push
                my skills to the next level. With a strong focus on performance
                and usability. In my journey as a developer, I've honed my
                skills in various modern web technologies, and I'm always eager
                to learn and embrace new trends. Whether working on a dynamic
                web app or a static site, my goal is to build products that are
                not only functional but also visually appealing. Let's
                collaborate and build something exceptional together!
            </motion.p>

            <motion.div
                {...scaleIn}
                transition={{ ...fadeIn.transition, delay: 0.6 }}
                className="flex gap-3"
            >
                <LazyLoadImage
                    src={id}
                    alt="Nerwin Alamas"
                    title="Nerwin Alamas"
                    className="h-12 w-12 rounded-full object-cover"
                    effect="blur"
                />

                <motion.div
                    {...scaleIn}
                    transition={{ ...fadeIn.transition, delay: 0.8 }}
                >
                    <p className="text-lg font-semibold">Nerwin Alamas</p>
                    <p className="text-gray-400">Frontend Developer</p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default About;
