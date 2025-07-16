import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { CardContent, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import { useState, type JSX } from "react";
import { DiNginx } from "react-icons/di";
import { FaGitAlt, FaGithub, FaNpm, FaReact } from "react-icons/fa";
import { SiAngular, SiExpress, SiFlask, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from 'react-icons/ri';

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

function Projects() {

    const projects: ProjectInfo[] = [
        {
            title: 'Maxx Energy Employee Portal',
            images: [
                'src/assets/maxx-energy-home.png',
                'src/assets/maxx-energy-login.png',
                'src/assets/maxx-energy-data.png',
            ],
            summary: `Full-stack website for a fictional company.
                        It was built as part of a Work Simulator.`,
            details: [
                `I participated in an 8-week program ran by the company, Maxx Potential.
                This program is known as their Work Simulator. During those 8 weeks,
                I worked remotely for "Maxx Energy". Maxx Energy consisted of 4 departments/teams: DevOps, Data, Security, and Support.
                I was a member of the DevOps team. The DevOps team was responsible for creating an employee portal
                that integrated work from the data team into the website.`,
                `Given that I had years of DevOps experience under my belt, I took on the position of team lead.
                I was responsible for delegating tasks to the others in the dev team as well as lead agile processes such as standup.
                The other three members of the dev team were Kenton Andrews and Xavier Miles as software developers, and 
                Maddison Pippert as our UI/UX Designer.`,
                `Before we could begin development of the website, we needed to decide on a tech stack and make sure we knew what
                we were doing to a certain extent. This resulted in the first few weeks being primarily dedicated to teaching/learning.
                This included technologies like Git, HTML, CSS, JavaScript, REST, and eventually Angular.`,
                `Regarding development, I was solely responsible for the project back end, front-end authentication, and finally deployment.
                During this time, I learned how to use Express, Nginx, and how cookie authentication works.`,
                `In the end, with an Angular front end, and an Express and MySQL back end, we were able to deploy the website utilizing Nginx
                on the Maxx Energy Server. With that said, the server lifetime did not extend beyond the work simulator, so it was only
                live for about a week in total.`,
            ],
            tech: [
                <SiAngular key='Angular' title='Angular' />,
                <FaGitAlt key='Git' title='Git' />,
                <FaGithub key='GitHub' title='GitHub' />,
                <SiExpress key='Express' title="Express" />,
                <FaNpm key='Node Package Manager' title='Node Package Manager' />,
                <VscVscode key='VS Code' title='VS Code' />,
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
            summary: `Full-stack web application that evaluates prewriting skills and has been used by the 
                        VCU department of Occupational Therapy. 1st place team at the VCU Capstone of 2023.`,
            details: [
                `This project was based on an application developed by our project sponsor, Dr. Virginia Chu.
                She had created a custom program that could help evaluate prewriting skills,
                but the grading system required manual involvement.
                Additionally, it was not a portable app and its accessbility was limited.`,
                `Our assignment was to recreate an application that could overcome the aforementioned shortcomings.
                We needed to create an application that could not only grade scores automatically, 
                but also be accessible on multiple devices as well as accommodate various screen sizes.`,
                `Our chosen tech stack included React and JavaScript Canvas APIs for the front end,
                and our backend was built using Flask and a MySQL database.`,
                `The front end was responsible for administering and displaying evaluations on varying screen sizes.`,
                `The back end was responsible for grading drawings and storing test scores.`,
                `Regarding development, I was responsible for the entire front end.`,
                `Our project was awarded the Sternheimer grant around the halfway point of the project.`,
                `Our project came in 1st place at the Capstone Expo of 2023.
                Considering there were roughly 90 other teams, this was a huge honor.`,
                `Lastly, I wanted to mention this project was possible due to working with an excellent team.
                Referring to the picture taken above, from left to right are Charles Cutler, 
                Noah Shields, Edward Ladia, and myself on the right. All four of us are now VCU Computer Science Graduates. 
                Additionally, our faculty advisor was Professor Daniel Cranston.
                As aformentioned, our sponsor was Dr. Virginia Chu.`,
                `Unfortunately, the GitHub repository for this project must remain private.`
            ],
            tech: [
                <FaReact key='React' title='React' />,
                <SiFlask key='Flask' title='Flask' />,
                <FaGitAlt key='Git' title='Git' />,
                <FaGithub key='GitHub' title='GitHub' />,
                <FaNpm key='Node Package Manager' title='Node Package Manager' />,
                <VscVscode key='VS Code' title='VS Code' />,
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
            summary: `The website you are currently on! Built with React and Tailwind, 
                        this project serves as my professional portfolio.`,
            details: [
                `I needed a professional portfolio. Why not get some practice with React and learn how to use Tailwind while at it?`,
                `The project name, "Odyssey" is indeed a reference to Super Mario Odyssey. 
                While I will not be traveling to different kingdoms and fighting Bowser, I will be tracking experiences and projects here.`,
                `Attributions to different artwork are mentioned in this project's README.`
            ],
            tech: [
                <FaReact key='React' title='React' />,
                <RiTailwindCssFill key='Tailwind' title='Tailwind' />,
                <FaGitAlt key='Git' title='Git' />,
                <FaGithub key='GitHub' title='GitHub' />,
                <FaNpm key='Node Package Manager' title='Node Package Manager' />,
                <VscVscode key='VS Code' title='VS Code' />,
            ],
            repo: 'https://github.com/smithcl6/Odyssey'
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