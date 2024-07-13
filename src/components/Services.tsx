import { servicesData } from "../data";

const Services = () => {
    return (
        <div id="services" className="p-4 my-40 flex flex-col gap-5">
            <h2 className="text-5xl font-bold">Services</h2>
            <p>
                I offer a range of services to meet your web development needs,
                including:
            </p>
            <div className="flex flex-wrap gap-3">
                {servicesData.map((services) => (
                    <p
                        key={services}
                        className="p-2 text-sm rounded-lg bg-slate-800"
                    >
                        {services}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Services;
