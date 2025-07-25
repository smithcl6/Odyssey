import type { JSX } from 'react';
import { DiNginx } from 'react-icons/di';
import { FaGitAlt, FaGithub, FaNpm, FaReact } from 'react-icons/fa';
import {
    SiAngular,
    SiExpress,
    SiFlask,
    SiMui,
    SiMysql,
    SiVite,
} from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { VscAzure, VscVscode } from 'react-icons/vsc';
import { AiOutlineDotNet } from 'react-icons/ai';
import AMCTechLogo from '/src/assets/amc-tech-logo.jpg';
import MaxxEnergyHome from '/src/assets/maxx-energy-home.png';
import MaxxEnergyLogin from '/src/assets/maxx-energy-login.png';
import MaxxEnergyData from '/src/assets/maxx-energy-data.png';
import CapstonePoster from '/src/assets/capstone-poster.png';
import CapstoneTeam from '/src/assets/capstone-team.jpg';
import CapstoneWinner from '/src/assets/capstone-winner.png';
import MarioOdyssey from '/src/assets/mario-odyssey.jpg';
import OoT from '/src/assets/oot.png';
import Hero from '/src/assets/hero.jpg';

/* 
This file's purpose is to hold information that is designed to
grow in quantity over time. It helps keep the structure of
the component separate from its content, which improves scalability.
*/

// Information that should be included for each job experience.
export interface JobInfo {
    title: string;
    icon: string;
    company: string;
    website: string;
    timeframe: string;
    details: string[];
    tech: JSX.Element[];
}

// List of JobInfo objects. They are used to dynamically populate the Work Component.
export const jobs: JobInfo[] = [
    {
        title: 'Software Engineer',
        icon: AMCTechLogo,
        company: 'AMC Technology',
        website: 'https://www.amctechnology.com/',
        timeframe: 'January 2024 — July 2024',
        details: [
            `Resolved technical debt and fixed minor bugs for different web apps.`,
            `Created test-case templates for various apps. These were designed to provide further comprehensive
            documentation when regression testing.`,
            `Pushed code to production. These were completed late at night to minimize any potential interference
            with our clients. The aforementioned test-case documents helped streamline this process.`,
            `Agile work environment. Compared to my time as an intern, agile work practices were greatly increased.
            This included involvement in story pointing meetings, sprint retrospectives, one-on-ones,
            both company and development standups, greater responsibility with user stories and deliverables, etc.`,
            `Earned my "Microsoft Azure Fundamentals" (AZ 900) certificate as a part of onboarding.`,
        ],
        tech: [
            <SiAngular key='Angular' title='Angular' />,
            <VscAzure key='Azure' title='Azure' />,
            <AiOutlineDotNet key='.NET' title='.NET' />,
            <FaGitAlt key='Git' title='Git' />,
            <FaNpm key='Node Package Manager' title='Node Package Manager' />,
            <VscVscode key='VS Code' title='VS Code' />,
        ],
    },
    {
        title: 'Software Development Intern',
        icon: AMCTechLogo,
        company: 'AMC Technology',
        website: 'https://www.amctechnology.com/',
        timeframe: 'June 2021 — December 2023',
        details: [
            `Full-time work during the summer, and part-time work during fall and spring semesters.
            Each summer consisted of different web development projects that involved direct collaboration with another intern.
            Further details of each summer project are mentioned below.
            Because of school, work items were usually lower in priority during the fall and spring, 
            such as updating the Angular or .NET version of different projects.`,
            `Agile work environment. Alongside daily standups, we had to present our progress to the company every other sprint.`,
            `Summer 2023: Prototyped transcription functionality and sentiment analysis in an existing telephony application.
            The project utilized Azure Cognitive Services (renamed to Azure AI Services)
            which provided a cloud-based speech-to-text AI model. As a prototype, our final demo of the project
            involved passing transcriptions to a GPT model that was meant to serve as a call center agent "co-pilot"
            by giving recommendations to the human agent. Further utilization of Azure AI Services was included
            in other telephony apps after the summer internship; the project was a massive success as a prototype.`,
            `Summer 2022: Developed an application that allowed clients to subscribe to AMC's services through the
            Azure marketplace. Although the project was based on a pre-existing .NET application, I modified it to 
            suit the needs of AMC.`,
            `Summer 2021: Developed an ROI Calculator in the AMC Technology website.
            Clients that were interested were also able to directly contact AMC through the app.
            The project was made using HTML, CSS, JavaScript, and Microsoft Power Automate.`,
        ],
        tech: [
            <SiAngular key='Angular' title='Angular' />,
            <VscAzure key='Azure' title='Azure' />,
            <AiOutlineDotNet key='.NET' title='.NET' />,
            <FaGitAlt key='Git' title='Git' />,
            <FaNpm key='Node Package Manager' title='Node Package Manager' />,
            <VscVscode key='VSCode' title='VS Code' />,
        ],
    },
];

// Information that should be included in personal projects.
export interface ProjectInfo {
    title: string;
    images: string[];
    summary: string;
    details: string[];
    tech: JSX.Element[];
    repo?: string;
}

// List of ProjectInfo objects. They are used to dynamically populate the Projects Component.
export const projects: ProjectInfo[] = [
    {
        title: 'Maxx Energy Employee Portal',
        images: [MaxxEnergyHome, MaxxEnergyLogin, MaxxEnergyData],
        summary: `Full-stack website for a fictional company.
                    It was built as part of a Work Simulator.`,
        details: [
            `I participated in an 8-week program ran by the company, Maxx Potential.
            This program is known as their Work Simulator. During those 8 weeks,
            I worked remotely for "Maxx Energy". Maxx Energy consisted of 4 departments/teams: DevOps, Data, Security, and Support.
            I was a member of the DevOps team. The DevOps team was responsible for creating an employee portal
            that integrated work from the data team into the website.`,
            `Given that I had years of DevOps experience under my belt, I took on the position of team lead.
            I was responsible for delegating tasks to the other three members in the dev team as well as lead agile processes such as standup.`,
            `Before we could begin development of the website, we needed to decide on a tech stack and make sure we knew what
            we were doing to a certain extent. This resulted in the first few weeks being primarily dedicated to teaching/learning.
            This included technologies like Git, HTML, CSS, JavaScript, REST, and eventually Angular.`,
            `Regarding development, I was solely responsible for the project back end, front-end authentication, and finally deployment.
            During this time, I gained some experience using Express, Nginx, and cookie-based authentication.`,
            `In the end, with an Angular front end, and an Express and MySQL back end, we were able to deploy the website utilizing Nginx
            on the Maxx Energy Server. With that said, the server lifetime did not extend beyond the work simulator, so it was only
            live for about a week in total.`,
        ],
        tech: [
            <SiAngular key='Angular' title='Angular' />,
            <SiExpress key='Express' title='Express' />,
            <SiMysql key='MySQL' title='MySQL' />,
            <DiNginx key='Nginx' title='Nginx' />,
            <FaGitAlt key='Git' title='Git' />,
            <FaGithub key='GitHub' title='GitHub' />,
            <FaNpm key='Node Package Manager' title='Node Package Manager' />,
            <VscVscode key='VS Code' title='VS Code' />,
        ],
        repo: 'https://github.com/smithcl6/maxx-energy',
    },
    {
        title: 'Capstone Prewriting Evaluation Web App',
        images: [CapstonePoster, CapstoneTeam, CapstoneWinner],
        summary: `Full-stack web application that evaluates prewriting skills and has been used by the 
                    VCU Department of Occupational Therapy. 1st place team at the VCU Capstone of 2023.`,
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
            `Unfortunately, the GitHub repository for this project must remain private.`,
        ],
        tech: [
            <FaReact key='React' title='React' />,
            <SiFlask key='Flask' title='Flask' />,
            <SiMysql key='MySQL' title='MySQL' />,
            <FaGitAlt key='Git' title='Git' />,
            <FaGithub key='GitHub' title='GitHub' />,
            <FaNpm key='Node Package Manager' title='Node Package Manager' />,
            <VscVscode key='VS Code' title='VS Code' />,
        ],
    },
    {
        title: 'Odyssey',
        images: [MarioOdyssey, OoT, Hero],
        summary: `The website you are currently on! Built with React and Tailwind, 
                    this project serves as my professional portfolio.`,
        details: [
            `I needed a professional portfolio. Why not get some practice with React and learn how to use Tailwind while at it?`,
            `The project name, "Odyssey" is indeed a reference to Super Mario Odyssey. 
            While I will not be traveling to different kingdoms and fighting Bowser, I will be tracking experiences and projects here.`,
            `Attributions to different artwork are mentioned in this project's README.`,
        ],
        tech: [
            <FaReact key='React' title='React' />,
            <RiTailwindCssFill key='Tailwind' title='Tailwind' />,
            <SiVite key='Vite' title='Vite' />,
            <SiMui key='Material UI' title='Material UI' />,
            <FaGitAlt key='Git' title='Git' />,
            <FaGithub key='GitHub' title='GitHub' />,
            <FaNpm key='Node Package Manager' title='Node Package Manager' />,
            <VscVscode key='VS Code' title='VS Code' />,
        ],
        repo: 'https://github.com/smithcl6/Odyssey',
    },
];
