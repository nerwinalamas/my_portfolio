import { motion } from "framer-motion";
import { navbarData } from "../data";
import { fadeIn, fadeInWithExit } from "../lib/animation";

const Footer = () => {
    return (
        <div className="p-4 flex flex-col items-center justify-center gap-5 border-t border-slate-800 md:py-6 lg:py-8 lg:flex-row lg:justify-between">
            <ul className="flex items-center justify-evenly gap-5">
                {navbarData.map((data, index) => (
                    <motion.li
                        key={data.id}
                        {...fadeInWithExit}
                        transition={fadeInWithExit.transition(index)}
                    >
                        <a href={data.path}>{data.title}</a>
                    </motion.li>
                ))}
            </ul>
            <motion.p
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
                &copy; 2024 Nerwin Alamas. All rights reserved.
            </motion.p>
        </div>
    );
};

export default Footer;
