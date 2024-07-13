import { navbarData } from "../data";

const Footer = () => {
    return (
        <div className="p-4 flex flex-col items-center justify-center gap-5 border-t border-slate-800 md:py-6 lg:py-8 lg:flex-row lg:justify-between">
            <ul className="flex items-center justify-evenly gap-5">
                {navbarData.map((data) => (
                    <li key={data.id}>
                        <a href={data.path}>{data.title}</a>
                    </li>
                ))}
            </ul>
            <p>&copy; 2024 Nerwin Alamas. All rights reserved.</p>
        </div>
    );
};

export default Footer;
