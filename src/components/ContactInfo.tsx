import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { contactData } from "../data";
import { fadeIn, fadeInUp } from "../lib/animation";

const ContactInfo = () => {
    return (
        <motion.div
            id="contacts"
            {...fadeInUp}
            className="p-4 my-40 flex flex-col gap-10"
        >
            <motion.h1
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: 0.2 }}
                className="text-5xl font-bold md:text-center"
            >
                Let's build an awesome project together!
            </motion.h1>
            <div className="flex flex-col gap-5 md:flex-row md:justify-evenly">
                <div className="flex flex-col gap-5">
                    <motion.div
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.2 }}
                        className="flex items-center gap-3"
                    >
                        <div className="p-3 rounded-full bg-slate-800">
                            <Mail />
                        </div>
                        <div className="text-start">
                            <p className="text-slate-400">Email me at</p>
                            <h3 className="font-semibold">
                                nerwinalamas@gmail.com
                            </h3>
                        </div>
                    </motion.div>
                    <motion.div
                        {...fadeIn}
                        transition={{ ...fadeIn.transition, delay: 0.4 }}
                        className="flex items-center gap-3"
                    >
                        <div className="p-3 rounded-full bg-slate-800">
                            <Phone />
                        </div>
                        <div className="text-start">
                            <p className="text-slate-400">Call me at</p>
                            <h3 className="font-semibold">+63 966 3609 104</h3>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    {...fadeIn}
                    transition={{ ...fadeIn.transition, delay: 0.6 }}
                    className="flex flex-col gap-3"
                >
                    <h2 className="text-lg">Socials:</h2>
                    <div className="flex gap-5">
                        {contactData.map((contact) => (
                            <Link
                                key={contact.id}
                                to={contact.link}
                                target="_blank"
                            >
                                <img
                                    title={contact.alt}
                                    src={contact.icon}
                                    alt={contact.alt}
                                    className="w-11 h-11 cursor-pointer hover:scale-110 duration-300"
                                />
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ContactInfo;
