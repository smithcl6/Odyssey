import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import Resume from '/src/assets/resume.pdf';

/**
 * This component simply houses the hero section of the page.
 * @returns The Hero section of the page.
 */
function Hero() {
    return (
        <section className="hero flex p-4 pt-24 sm:p-24 bg-cover bg-center min-h-screen">
            <div className="flex flex-col">
                <h1 className="text-4xl sm:text-6xl p-2 font-bold text-purple-400 zelda:text-amber-500 mario:text-red-500">Christopher Smith</h1>
                <h2 className="text-2xl sm:text-4xl p-2 font-semibold text-blue-400">Software Developer</h2>
                <p className="text-2xl sm:text-4xl p-2 font-medium">
                    I'm a junior developer with full-stack experience, especially in front-end development using Angular and React.
                    With that said, I am still early in my career and am open-minded to areas outside of web dev.
                    In any case, I care about writing clean, maintainable, and scalable code.
                </p>
                <span className="flex text-6xl sm:text-9xl justify-around flex-wrap p-4 pt-8">
                    <a className="hero-links hover:text-purple-700" href='https://github.com/smithcl6' title="GitHub" target='_blank' rel='noopener noreferrer'>
                        <FaGithub /><h1 className="text-xl sm:text-4xl">GitHub</h1>
                    </a>
                    <a className="hero-links hover:text-blue-600" href='https://www.linkedin.com/in/csmith1414/' title="Linkedin" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin /><h1 className="text-xl sm:text-4xl">Linkedin</h1>
                    </a>
                    <a className="hero-links hover:text-emerald-600" href={Resume} title="Resume" target='_blank' rel='noopener noreferrer'>
                        <FaFilePdf /><h1 className="text-xl sm:text-4xl">Resume</h1>
                    </a>
                </span>
            </div>
        </section>
    );
}

export default Hero;