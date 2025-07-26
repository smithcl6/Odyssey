import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import Resume from '/src/assets/resume.pdf';

/**
 * This component simply houses the hero section of the page.
 * @returns The Hero section of the page.
 */
function Hero() {
    return (
        <section className='hero min-h-screen bg-cover pt-24'>
            <h1 className='zelda:text-amber-500 mario:text-red-500 p-2 font-bold text-purple-400'>
                Christopher Smith
            </h1>
            <h2 className='p-2 font-semibold text-blue-400'>
                Software Developer
            </h2>
            <h4 className='p-2 font-medium'>
                I'm a junior developer with full-stack experience, especially in
                front-end development using Angular and React. With that said, I
                am still early in my career and am open-minded to areas outside
                of web dev. In any case, I care about writing clean,
                maintainable, and scalable code.
            </h4>
            <span className='flex flex-wrap justify-around p-4 pt-8'>
                <a
                    className='hero-links hover:text-purple-700'
                    href='https://github.com/smithcl6'
                    title='GitHub'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaGithub className='large-icon' />
                    <h2>GitHub</h2>
                </a>
                <a
                    className='hero-links hover:text-blue-600'
                    href='https://www.linkedin.com/in/csmith1414/'
                    title='Linkedin'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaLinkedin className='large-icon' />
                    <h2>Linkedin</h2>
                </a>
                <a
                    className='hero-links hover:text-emerald-600'
                    href={Resume}
                    title='Resume'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaFilePdf className='large-icon' />
                    <h2>Resume</h2>
                </a>
            </span>
        </section>
    );
}

export default Hero;
