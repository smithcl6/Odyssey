import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Accordion from '@mui/material/Accordion';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import type { JSX } from 'react';
import { IconContext } from 'react-icons';
import { SiAngular } from 'react-icons/si';
import { VscAzure, VscVscode } from 'react-icons/vsc';
import { FaGitAlt, FaNpm } from 'react-icons/fa';
import { AiOutlineDotNet } from 'react-icons/ai';

interface JobInfo {
    title: string,
    icon: string,
    company: string,
    website: string,
    timeframe: string,
    details: string[],
    tech: JSX.Element[]
}

function Job({ jobInfo }: { jobInfo: JobInfo }) {
    return (
        <Accordion className="bg-gray-900 text-white">
            <AccordionSummary expandIcon={<ArrowDropDownIcon className='text-white'/>}>
                <div className='flex items-center w-full'>
                    <a className='sm:w-1/4 w-1/3' href={jobInfo.website} target='_blank' rel='noopener noreferrer'>
                        <img className='object-scale-down rounded-2xl' src={jobInfo.icon}/>
                    </a>
                    <span className='flex sm:flex-row flex-col justify-between sm:w-3/4 w-2/3'>
                        <h5 className='text-lg lg:text-2xl 2xl:text-3xl p-2'>{jobInfo.title}</h5>
                        <h5 className='text-lg lg:text-2xl 2xl:text-3xl p-2'>{jobInfo.timeframe}</h5>
                    </span>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <h6 className='text-lg font-extrabold'>{jobInfo.company}</h6>
                <h6 className='text-lg font-bold pt-4'>Job Details</h6>
                <ul className='list-disc p-4' id="details">
                    {jobInfo.details.map((detail, index) => <li className='p-1' key={index}>{detail}</li>)}
                </ul>
                <h6 className='text-lg font-bold'>Tech Used</h6>
                <span className='flex flex-wrap justify-evenly'>
                    <IconContext value={{ className: 'text-9xl p-2' }}>
                        {jobInfo.tech?.map((tech) => <div className='flex flex-col items-center' key={tech.key}>{tech}<h6>{tech.key}</h6></div>)}
                    </IconContext>
                </span>
            </AccordionDetails>
        </Accordion>
    );
}

function Work() {
    const jobs: JobInfo[] = [
        {
            title: 'Software Engineer',
            icon: 'src/assets/amc-tech-logo.jpg',
            company: 'AMC Technology',
            website: 'https://www.amctechnology.com/',
            timeframe: 'January 2024 — July 2024',
            details: [
                'Agile',
                'Testing and Deploying Code Changes',
                'Package Updates'
            ],
            tech: [
                <SiAngular key='Angular' title='Angular' />,
                <VscAzure key='Azure' title='Azure' />,
                <FaGitAlt key='Git' title='Git' />,
                <FaNpm key='Node Package Manager' title='Node Package Manager' />,
                <VscVscode key='VS Code' title='VS Code' />,
                <AiOutlineDotNet key='.NET' title='.NET' />,
            ]
        },
        {
            title: 'Software Development Intern',
            icon: 'src/assets/amc-tech-logo.jpg',
            company: 'AMC Technology',
            website: 'https://www.amctechnology.com/',
            timeframe: 'June 2021 — December 2023',
            details: [
                'Different Projects',
                'Agile'
            ],
            tech: [
                <SiAngular key='Angular' title='Angular' />,
                <VscAzure key='Azure' title='Azure' />,
                <FaGitAlt key='Git' title='Git' />,
                <FaNpm key='Node Package Manager' title='Node Package Manager' />,
                <VscVscode key='Visual Studio Code' title='VS Code' />,
                <AiOutlineDotNet key='.NET' title='.NET' />,
            ]
        },
    ]
    
    const timeLineItems = jobs.map((job, index) => {
        return (
            <TimelineItem key={index}>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                   <Job jobInfo={job} /> 
                </TimelineContent>
            </TimelineItem>
        );
    });

    return (
        <section className="flex flex-col sm:pl-24 sm:pr-24">
            <h2 className="text-4xl font-semibold sm:pt-4 sm:pb-4 sm:p-0 p-4">Work Experience</h2>
            <Timeline sx={{[`& .${timelineItemClasses.root}:before`]: {flex: 0,padding: 0,},}}>
                {timeLineItems}
                <TimelineDot />
            </Timeline>
        </section>
    );
}

export default Work;