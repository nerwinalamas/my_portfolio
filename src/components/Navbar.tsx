import { useState } from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { navbarData } from "../data";

const Navbar = () => {
    const [openSheet, setOpenSheet] = useState(false);

    return (
        <div
            className={`p-4 sticky z-10 top-0 w-full flex justify-between items-center lg:px-7 lg:justify-between bg-gray-900`}
        >
            <Link to="/" className="text-xl font-bold">
                Ner.dev
            </Link>
            <div className="lg:hidden">
                <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent side="left" className="flex items-center justify-center border-none bg-slate-900 text-slate-100">
                        <ul className="h-full w-full flex flex-col items-center justify-center gap-5">
                            {navbarData.map((data) => (
                                <li
                                    key={data.id}
                                    onClick={() => setOpenSheet(false)}
                                    className="w-full text-center p-4"
                                >
                                    <a href={data.path}>{data.title}</a>
                                </li>
                            ))}
                            <Link
                                to="/"
                                onClick={() => setOpenSheet(false)}
                                className="w-full text-center p-4"
                            >
                                <button>Hire me</button>
                            </Link>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
            <ul className="hidden lg:flex items-center justify-evenly gap-10">
                {navbarData.map((data) => (
                    <li key={data.id}>
                        <a href={data.path}>{data.title}</a>
                    </li>
                ))}
            </ul>
            <a href="#contacts" className="hidden lg:flex lg:px-10 lg:py-2 lg:rounded-lg bg-slate-500">
                Hire me
            </a>
        </div>
    );
};

export default Navbar;
