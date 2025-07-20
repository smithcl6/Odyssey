import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { CardContent, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import { useRef, useState, type JSX } from "react";
import { FaGithub } from "react-icons/fa";
import { type ProjectInfo, projects } from './constants'

/**
 * Takes information of each project and displays them in an expanded or collapsed card view.
 * @param projectInfo houses information of each project. Allows for scalable Projects section.
 * @returns Expanded or compressed card of a non-work-related project.
 */
function Project({ projectInfo }: { projectInfo: ProjectInfo }) {
    const [expanded, setExpanded] = useState(false);
    const expandedCardRef = useRef<HTMLDivElement | null>(null);

    /**
     * Scrolls to the top of the project card that was clicked to be expanded.
     */
    function handleCardExpansion() {
        expandedCardRef?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // GitHub Icon and link if it exists for any given project.
    const github: JSX.Element = 
        projectInfo.repo ? <a className='text-4xl' href={projectInfo.repo} title="GitHub" target='_blank' rel='noopener noreferrer'><FaGithub /></a> : <span></span>;

    // Houses JSX of a project in its condensed view.
    const condensedCard: JSX.Element =
        <div className='p-4 md:w-1/2 xl:w-1/3'>
            <Card className='bg-gray-900 text-white flex flex-col h-full justify-between rounded-2xl'>
                <h5 className='text-lg md:text-2xl lg:text-xl p-2 text-center font-bold'>{projectInfo.title}</h5>
                <CardMedia className='object-cover rounded-4xl w-full p-4' component='img' image={projectInfo.images[0]} />
                <h6 className='text-lg p-4'>{projectInfo.summary}</h6>
                <CardContent className='flex justify-between'>
                    {github}
                    <button onClick={() => setExpanded(!expanded)}><OpenInFullIcon /></button>
                </CardContent>
            </Card>
        </div>

    // Houses images for each project. Only viewable in expanded card view.
    const expandedImages: JSX.Element[] = 
        projectInfo.images.map((image, index) => 
        <div key={index} className='snap-center inline-block p-2 sm:pl-4 sm:pr-4 h-[25vh]'><img className='w-full h-full object-cover rounded-2xl' src={image} /></div>);

    // Houses JSX of a project in its expanded view.
    const expandedCard: JSX.Element = 
        <div className='p-4 w-full scroll-mt-28' ref={expandedCardRef} onLoad={handleCardExpansion}>
            <Card className='bg-gray-900 text-white rounded-2xl'>
                <CardContent className='flex flex-col'>
                    <h5 className='text-lg lg:text-2xl 2xl:text-3xl p-2 text-center font-bold'>{projectInfo.title}</h5>
                    <div className='flex justify-center'><span className='snap-x overflow-x-auto whitespace-nowrap'>{expandedImages}</span></div>
                    <h6 className='text-lg font-bold pt-4'>Project Details</h6>
                    <ul className='list-disc p-4' id="details">
                        {projectInfo.details.map((details, index) => <li className='p-1' key={index}>{details}</li>)}
                    </ul>
                    <h6 className='text-lg font-bold'>Tech Used</h6>
                    <span className='flex flex-wrap justify-evenly'>
                        {projectInfo.tech?.map((tech) => <div className='flex flex-col items-center' key={tech.key}><div className='text-9xl p-2'>{tech}</div><h6>{tech.key}</h6></div>)}
                    </span>
                    <span className='flex justify-end'>
                        <button onClick={() => setExpanded(!expanded)}><CloseFullscreenIcon /></button>
                    </span>
                </CardContent>
            </Card>
        </div>
    
    return (<>{expanded ? expandedCard : condensedCard}</>);
}

/**
 * Displays projects that have been worked on over time in expanded/compressed card views.
 * @returns section of the page that houses all non-work projects.
 */
function Projects() {
    const projectCards = projects.map((project, index) => <Project key={index} projectInfo={project}></Project>)

    return (
        <section className="flex flex-col sm:pl-24 sm:pr-24 p-4">
            <h1 className="text-4xl font-semibold">Notable Projects</h1>
            <h2 className="text-2xl">These are projects I have worked on that are not involved with work.</h2>
            <div className="flex flex-wrap justify-evenly">{projectCards}</div>
        </section>
    );
}

export default Projects;