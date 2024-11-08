import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { navbarData } from "../data";
import { handleScroll } from "../lib";
import { motion } from "framer-motion";
import { buttonVariants } from "../lib/animation";

const Navbar = () => {
    const [openSheet, setOpenSheet] = useState(false);

    return (
        <div
            className={`p-4 sticky z-10 top-0 w-full flex justify-between items-center lg:px-7 lg:justify-between bg-gray-900`}
        >
            <Link to="/" className="text-xl font-bold" title="Home">
                Ner.dev
            </Link>
            <div className="lg:hidden">
                <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent
                        aria-describedby={undefined}
                        side="left"
                        className="flex items-center justify-center border-none bg-slate-900 text-slate-100"
                    >
                        <SheetTitle></SheetTitle>
                        <ul className="h-full w-full flex flex-col items-center justify-center gap-5">
                            {navbarData.map((data) => (
                                <li
                                    key={data.id}
                                    onClick={() => {
                                        setOpenSheet(false);
                                        handleScroll(data.path);
                                    }}
                                    className="w-full text-center p-4"
                                >
                                    {data.title}
                                </li>
                            ))}
                            <Link
                                to="/"
                                onClick={() => {
                                    setOpenSheet(false);
                                    handleScroll("contacts");
                                }}
                                className="w-full text-center p-4"
                                title="Hire me"
                            >
                                <button>Hire me</button>
                            </Link>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
            <ul className="hidden lg:flex items-center justify-evenly gap-10">
                {navbarData.map((data) => (
                    <li
                        key={data.id}
                        onClick={() => handleScroll(data.path)}
                        className="cursor-pointer hover:underline"
                    >
                        {data.title}
                    </li>
                ))}
            </ul>
            <motion.a
                onClick={() => handleScroll("contacts")}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="hidden lg:cursor-pointer lg:flex lg:px-10 lg:py-2 lg:rounded-lg bg-slate-500"
            >
                Hire me
            </motion.a>
        </div>
    );
};

export default Navbar;
