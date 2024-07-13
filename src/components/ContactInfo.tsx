import { Mail, Phone } from "lucide-react";
import { contactData } from "../data";
import { Link } from "react-router-dom";

const ContactInfo = () => {
    return (
        <div id="contacts" className="p-4 my-40 flex flex-col gap-10">
            <h2 className="text-5xl font-bold md:text-center">
                Let's build an awesome project together!
            </h2>
            <div className="flex flex-col gap-5 md:flex-row md:justify-evenly">
                <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-slate-800">
                            <Mail />
                        </div>
                        <div className="text-start">
                            <p className="text-slate-400">Email me at</p>
                            <h3 className="font-semibold">
                                nerwinalamas@gmail.com
                            </h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-3 rounded-full bg-slate-800">
                            <Phone />
                        </div>
                        <div className="text-start">
                            <p className="text-slate-400">Call me at</p>
                            <h3 className="font-semibold">+63 966 3609 104</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
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
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
