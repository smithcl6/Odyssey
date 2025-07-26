import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import CloseIcon from '@mui/icons-material/Close';
import { CardContent, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import { useRef, useState, type JSX } from 'react';
import { FaGithub } from 'react-icons/fa';
import { type ProjectInfo, projects } from './constants';
import InspectedImage from './InspectedImage';

/**
 * Takes information of each project and displays them in an expanded or collapsed card view.
 * @param projectInfo houses information of each project. Allows for scalable Projects section.
 * @returns Expanded or compressed card of a non-work-related project.
 */
function Project({ projectInfo }: { projectInfo: ProjectInfo }) {
    const [expanded, setExpanded] = useState(false);
    const [inspectedImage, setInspectedImage] = useState('');
    const expandedCardRef = useRef<HTMLDivElement | null>(null);

    /**
     * Scrolls to the top of the project card that was clicked to be expanded.
     */
    function handleCardExpansion() {
        expandedCardRef?.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    // GitHub Icon and link if it exists for any given project.
    const github: JSX.Element = projectInfo.repo ? (
        <a
            className='text-4xl'
            href={projectInfo.repo}
            title='GitHub'
            target='_blank'
            rel='noopener noreferrer'
        >
            <FaGithub className='small-icon' />
        </a>
    ) : (
        <span></span>
    );

    // Houses JSX of a project in its condensed view.
    const condensedCard: JSX.Element = (
        <div className='p-4 md:w-1/2 xl:w-1/3'>
            <Card className='flex h-full flex-col justify-between rounded-2xl bg-gray-900 text-white'>
                <h4 className='p-2 text-center font-bold'>
                    {projectInfo.title}
                </h4>
                <CardMedia
                    className='w-full cursor-pointer rounded-4xl object-cover p-4'
                    component='img'
                    image={projectInfo.images[0]}
                    onClick={() => setExpanded(!expanded)}
                />
                <p className='p-4'>{projectInfo.summary}</p>
                <CardContent className='flex justify-between'>
                    {github}
                    <OpenInFullIcon
                        className='small-icon cursor-pointer self-end'
                        onClick={() => setExpanded(!expanded)}
                    />
                </CardContent>
            </Card>
        </div>
    );

    // Houses images for each project. Only viewable in expanded card view.
    const expandedImages: JSX.Element[] = projectInfo.images.map(
        (image, index) => (
            <div
                key={index}
                className='inline-block h-[25vh] snap-center p-2 sm:pr-4 sm:pl-4'
            >
                <img
                    className='h-full w-full cursor-pointer rounded-2xl object-cover'
                    src={image}
                    onClick={() => setInspectedImage(image)}
                />
            </div>
        ),
    );

    // Houses JSX of a project in its expanded view.
    const expandedCard: JSX.Element = (
        <div
            className='w-full scroll-mt-28 p-4'
            ref={expandedCardRef}
            onLoad={handleCardExpansion}
        >
            <Card className='rounded-2xl bg-gray-900 text-white'>
                <CardContent className='flex items-center justify-between'>
                    {github}
                    <h5 className='p-2 text-center font-bold'>
                        {projectInfo.title}
                    </h5>
                    <CloseIcon
                        className='small-icon cursor-pointer self-start'
                        onClick={() => setExpanded(!expanded)}
                    />
                </CardContent>
                <CardContent className='flex flex-col'>
                    <div className='flex justify-center'>
                        <span className='snap-x overflow-x-auto whitespace-nowrap'>
                            {expandedImages}
                            <InspectedImage
                                inspectedImage={inspectedImage}
                                setInspectedImage={setInspectedImage}
                            />
                        </span>
                    </div>
                    <h4 className='pt-4 font-bold'>Project Details</h4>
                    <ul className='list-disc p-4' id='details'>
                        {projectInfo.details.map((details, index) => (
                            <li className='p-1' key={index}>
                                <p>{details}</p>
                            </li>
                        ))}
                    </ul>
                    <h4 className='font-bold'>Tech Used</h4>
                    <span className='flex flex-wrap justify-evenly'>
                        {projectInfo.tech?.map((tech) => (
                            <div
                                className='flex flex-col items-center p-2'
                                key={tech.key}
                            >
                                <div className='large-icon'>{tech}</div>
                                <h5>{tech.key}</h5>
                            </div>
                        ))}
                    </span>
                    <span className='flex justify-end'>
                        <CloseFullscreenIcon
                            className='small-icon cursor-pointer'
                            onClick={() => setExpanded(!expanded)}
                        />
                    </span>
                </CardContent>
            </Card>
        </div>
    );

    return <>{expanded ? expandedCard : condensedCard}</>;
}

/**
 * Displays projects that have been worked on over time in expanded/compressed card views.
 * @returns section of the page that houses all non-work projects.
 */
function Projects() {
    const projectCards = projects.map((project, index) => (
        <Project key={index} projectInfo={project} />
    ));

    return (
        <section className='flex flex-col p-4 sm:pr-24 sm:pl-24'>
            <h2 className='font-semibold'>Notable Projects</h2>
            <h4>
                These are projects I have worked on that are not involved with
                work.
            </h4>
            <div className='flex flex-wrap justify-evenly'>{projectCards}</div>
        </section>
    );
}

export default Projects;
