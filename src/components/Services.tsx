import { motion } from "framer-motion";
import { servicesData } from "../data";
import { fadeIn, fadeInUp, fadeInWithExit } from "../lib/animation";

const Services = () => {
    return (
        <motion.div
            id="services"
            {...fadeInUp}
            className="p-4 my-40 flex flex-col gap-5"
        >
            <div className="h-20 lg:hidden"></div>
            <motion.h2
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
                className="text-5xl font-bold"
            >
                Services
            </motion.h2>
            <motion.p
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.4 }}
            >
                I offer a range of services to meet your web development needs,
                including:
            </motion.p>
            <div className="flex flex-wrap gap-3">
                {servicesData.map((services, index) => (
                    <motion.p
                        key={services}
                        {...fadeInWithExit}
                        transition={fadeInWithExit.transition(index)}
                        className="p-2 text-sm rounded-lg bg-slate-800"
                    >
                        {services}
                    </motion.p>
                ))}
            </div>
        </motion.div>
    );
};

export default Services;
