import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { CardContent, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import { useState, type JSX } from "react";
import { AiOutlineDotNet } from "react-icons/ai";
import { DiNginx } from "react-icons/di";
import { FaGitAlt, FaGithub, FaNpm } from "react-icons/fa";
import { SiAngular, SiExpress, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

interface ProjectInfo {
    title: string,
    images: string[],
    summary: string,
    details: string[],
    tech: JSX.Element[],
    repo?: string
}

function Project({ projectInfo }: {projectInfo: ProjectInfo}) {
    const [expanded, setExpanded] = useState(false);

    const github: JSX.Element = 
        projectInfo.repo ? <a className='text-4xl' href={projectInfo.repo} title="GitHub" target='_blank' rel='noopener noreferrer'><FaGithub /></a> : <span></span>;

    const condensedCard: JSX.Element =
        <div className='p-4 md:w-1/2 xl:w-1/3'>
            <Card className='bg-gray-900 text-white flex flex-col h-full justify-between'>
                <h5 className='text-lg md:text-2xl lg:text-xl p-2 text-center font-bold'>{projectInfo.title}</h5>
                <CardMedia className='object-cover rounded-4xl w-full p-4' component='img' image={projectInfo.images[0]} />
                <h6 className='text-lg p-4'>{projectInfo.summary}</h6>
                <CardContent className='flex justify-between'>
                    {github}
                    <button onClick={() => setExpanded(!expanded)}><OpenInFullIcon /></button>
                </CardContent>
            </Card>
        </div>

    const expandedImages: JSX.Element[] = 
        projectInfo.images.map((image, index) => 
        <div key={index} className='snap-center inline-block p-2 sm:pl-4 sm:pr-4 h-[25vh]'><img className='w-full h-full object-cover rounded-2xl' src={image} /></div>);

    const expandedCard: JSX.Element = 
        <div className='p-4 w-full'>
            <Card className='bg-gray-900 text-white'>
                <CardContent className='flex flex-col'>
                    <h5 className='text-lg lg:text-2xl 2xl:text-3xl p-2'>{projectInfo.title}</h5>
                    <div className='flex justify-center'><span className='snap-x overflow-x-auto whitespace-nowrap'>{expandedImages}</span></div>
                    <h6 className='text-lg font-bold pt-4'>Project Details</h6>
                    <ul className='list-disc p-4' id="details">
                        {projectInfo.details.map((details, index) => <li className='p-1' key={index}>{details}</li>)}
                    </ul>
                    <h6 className='text-lg font-bold'>Tech Used</h6>
                    <span className='flex flex-wrap justify-evenly'>
                        {projectInfo.tech?.map((tech) => <div className='flex flex-col items-center p-4' key={tech.key}><div className='text-9xl'>{tech}</div><h6>{tech.key}</h6></div>)}
                    </span>
                    <span className='flex justify-end'>
                        <button onClick={() => setExpanded(!expanded)}><CloseFullscreenIcon /></button>
                    </span>
                </CardContent>
            </Card>
        </div>
    
    return (<>{expanded ? expandedCard : condensedCard}</>);
}

function Projects() {

    const projects: ProjectInfo[] = [
        {
            title: 'Maxx Energy Employment Portal',
            images: [
                'src/assets/maxx-energy-home.png',
                'src/assets/maxx-energy-login.png',
                'src/assets/maxx-energy-data.png',
            ],
            summary: 'Full-Stack Website for a fictional company.',
            details: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'Sed nec rhoncus velit. Aenean sit amet dolor vulputate, laoreet lorem non, rhoncus massa.',
                'Donec est ante, maximus in lectus sit amet, accumsan lacinia mi. Fusce cursus sapien eu faucibus sollicitudin.',
                'Phasellus eget enim vitae risus vehicula euismod. Donec mattis lorem ac tempus fermentum. Nulla facilisi. Aliquam dapibus pulvinar hendrerit.',
                'Fusce ipsum libero, ornare in molestie ac, dictum vitae lorem. Nulla vel pretium augue, nec hendrerit sapien.',
            ],
            tech: [
                <SiAngular key='Angular' title='Angular' />,
                <FaGitAlt key='Git' title='Git' />,
                <FaGithub key='GitHub' title='GitHub' />,
                <SiExpress key='Express' title="Express" />,
                <FaNpm key='Node Package Manager' title='Node Package Manager' />,
                <VscVscode key='VS Code' title='VS Code' />,
                <AiOutlineDotNet key='.NET' title='.NET' />,
                <DiNginx key='Nginx' title='Nginx' />,
                <SiMysql key='MySQL' title='MySQL' />,
            ],
            repo: 'https://github.com/smithcl6/maxx-energy'
        },
        {
            title: 'Capstone Prewriting Evaluation Web App',
            images: [
                'src/assets/capstone-poster.png',
                'src/assets/capstone-team.jpg',
                'src/assets/capstone-winner.png',
            ],
            summary: 'Placeholder Summary that should not be long at all. Be able to handle 2 sentences I guess.',
            details: [
                'Stuff I did',
            ],
            tech: [
                <SiAngular key='Angular' title='Angular' />,
                <FaGitAlt key='Git' title='Git' />,
                <FaGithub key='GitHub' title='GitHub' />,
                <SiExpress key='Express' title="Express" />,
                <FaNpm key='Node Package Manager' title='Node Package Manager' />,
                <VscVscode key='VS Code' title='VS Code' />,
                <AiOutlineDotNet key='.NET' title='.NET' />,
                <DiNginx key='Nginx' title='Nginx' />,
                <SiMysql key='MySQL' title='MySQL' />,
            ],
        },
        {
            title: 'Odyssey',
            images: [
                'src/assets/mario-odyssey.jpg',
                'src/assets/oot.png',
                'src/assets/hero.jpg',
            ],
            summary: 'The website you are currently on! Built with React and Tailwind, this project serves as my professional portfolio.',
            details: [
                'Stuff I did',
            ],
            tech: [
                <SiAngular key='Angular' title='Angular' />,
                <FaGitAlt key='Git' title='Git' />,
                <FaGithub key='GitHub' title='GitHub' />,
                <SiExpress key='Express' title="Express" />,
                <FaNpm key='Node Package Manager' title='Node Package Manager' />,
                <VscVscode key='VS Code' title='VS Code' />,
                <AiOutlineDotNet key='.NET' title='.NET' />,
                <DiNginx key='Nginx' title='Nginx' />,
                <SiMysql key='MySQL' title='MySQL' />,
            ],
            repo: 'https://github.com/smithcl6/maxx-energy'
        },
    ];

    const projectCards = projects.map((project, index) => <Project key={index} projectInfo={project}></Project>)

    return (
        <section className="flex flex-col sm:pl-24 sm:pr-24 p-4">
            <h1 className="text-4xl font-semibold">Notable Projects</h1>
            <h2 className="text-2xl">These are projects I have worked on that are not involved with work.</h2>
            <div className="flex flex-wrap justify-evenly">
                {projectCards}
            </div>
        </section>
    );
}

export default Projects;