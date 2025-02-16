import { useState } from "react";
import { Link } from "react-router-dom";
import { Copy, Mail, Phone, Check } from "lucide-react";
import { motion } from "framer-motion";
import { contactData } from "../data";
import { fadeIn, fadeInUp } from "../lib/animation";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ContactInfo = () => {
  const [copiedItems, setCopiedItems] = useState({
    email: false,
    phone: false,
  });

  const handleCopy = (type: "phone" | "email", text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItems((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopiedItems((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  return (
    <motion.div
      id="contacts"
      {...fadeInUp}
      className="p-4 my-40 flex flex-col gap-10"
    >
      <motion.h2
        {...fadeIn}
        transition={{ ...fadeIn.transition, delay: 0.2 }}
        className="text-5xl font-bold md:text-center"
      >
        Let's build an awesome project together!
      </motion.h2>
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
              <div className="flex items-center gap-2 relative">
                <p className="font-semibold">nerwinalamas@gmail.com</p>
                <div className="relative">
                  {copiedItems.email ? (
                    <div className="absolute -top-8 -left-2 bg-slate-800 text-white text-xs py-1 px-2 rounded">
                      Copied!
                    </div>
                  ) : null}
                  {copiedItems.email ? (
                    <Check className="w-4 h-4 text-slate-500" />
                  ) : (
                    <Copy
                      onClick={() =>
                        handleCopy("email", "nerwinalamas@gmail.com")
                      }
                      className="w-4 h-4 hover:cursor-pointer hover:text-slate-500 transition-colors"
                    />
                  )}
                </div>
              </div>
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
              <div className="flex items-center gap-2 relative">
                <p className="font-semibold">+639663609104</p>
                <div className="relative">
                  {copiedItems.phone ? (
                    <div className="absolute -top-8 -left-2 bg-slate-800 text-white text-xs py-1 px-2 rounded">
                      Copied!
                    </div>
                  ) : null}
                  {copiedItems.phone ? (
                    <Check className="w-4 h-4 text-slate-500" />
                  ) : (
                    <Copy
                      onClick={() => handleCopy("phone", "+639663609104")}
                      className="w-4 h-4 hover:cursor-pointer hover:text-slate-500 transition-colors"
                    />
                  )}
                </div>
              </div>
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
                title={contact.alt}
              >
                <LazyLoadImage
                  title={contact.alt}
                  src={contact.icon}
                  alt={contact.alt}
                  className="w-11 h-11 cursor-pointer hover:scale-110 duration-300"
                  effect="blur"
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
