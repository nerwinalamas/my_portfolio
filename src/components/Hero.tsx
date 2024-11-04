import resume from ".././assets/resume.pdf";
import { motion } from "framer-motion";
import {
    containerVariants,
    itemVariants,
    buttonVariants,
} from "../lib/animation";

const Hero = () => {
    const handleResume = () => {
        window.open(resume);
    };

    return (
        <div
            id="home"
            className="h-screen p-4 flex items-center justify-start md:justify-center xl:justify-start"
        >
            <motion.div
                className="w-96 flex flex-col md:w-3/4 md:items-center md:justify-center lg:w-3/4 xl:items-start xl:justify-start"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.p className="lg:text-xl" variants={itemVariants}>
                    Hello 👋, I'm
                </motion.p>
                <motion.h1
                    className="my-2 text-3xl font-bold md:text-4xl lg:text-6xl"
                    variants={itemVariants}
                >
                    Nerwin Alamas
                </motion.h1>
                <motion.p
                    className="my-2 text-3xl font-bold md:text-4xl lg:text-6xl"
                    variants={itemVariants}
                >
                    Frontend Developer
                </motion.p>
                <motion.p
                    className="md:text-center md:w-3/4 lg:w-4/5 xl:w-3/5 xl:text-start"
                    variants={itemVariants}
                >
                    A passionate Frontend Developer. With a keen eye for detail
                    and a love for creating intuitive user interfaces, I
                    specialize in building seamless web experiences. Let's
                    create something amazing together!
                </motion.p>
                <motion.button
                    onClick={handleResume}
                    className="my-3 px-10 py-2 rounded-lg md:w-max bg-slate-500 hover:bg-slate-600 transition-colors"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    Resume
                </motion.button>
            </motion.div>
        </div>
    );
};

export default Hero;
