import About from "../components/About";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div className="relative max-w-screen-xl mx-auto">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default Home;
