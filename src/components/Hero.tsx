import resume from ".././assets/resume.pdf";

const Hero = () => {
    const handleResume = () => {
        window.open(resume);
    };

    return (
        <div
            id="home"
            className="h-screen p-4 flex items-center justify-start md:justify-center xl:justify-start"
        >
            <div className="w-96 flex flex-col md:w-3/4 md:items-center md:justify-center lg:w-3/4 xl:items-start xl:justify-start">
                <p className="lg:text-xl">Hello 👋, I'm</p>
                <h1 className="my-2 text-3xl font-bold md:text-4xl lg:text-6xl">
                    Nerwin Alamas
                </h1>
                <h2 className="my-2 text-3xl font-bold md:text-4xl lg:text-6xl">
                    Frontend Developer
                </h2>
                <p className="md:text-center md:w-3/4 lg:w-4/5 xl:w-3/5 xl:text-start">
                    A passionate Frontend Developer. With a keen eye for detail
                    and a love for creating intuitive user interfaces, I
                    specialize in building seamless web experiences. Let's
                    create something amazing together!
                </p>
                <button
                    onClick={handleResume}
                    className="my-3 px-10 py-2 rounded-lg md:w-max bg-slate-500"
                >
                    Resume
                </button>
            </div>
        </div>
    );
};

export default Hero;
