import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Accordion from '@mui/material/Accordion';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import { type JobInfo, jobs } from './constants';

/**
 * This component represents a job that is placed within the Work component's timeline.
 * @param jobInfo houses information of each job. Allows for scalable Work section.
 * @returns MUI Accordion that displays information of each job.
 */
function Job({ jobInfo }: { jobInfo: JobInfo }) {
    return (
        <Accordion className='bg-gray-900 text-white'>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon className='text-white' />}
            >
                <div className='flex w-full items-center'>
                    <a
                        className='w-1/3 sm:w-1/4'
                        href={jobInfo.website}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <img
                            className='rounded-2xl object-scale-down'
                            src={jobInfo.icon}
                        />
                    </a>
                    <span className='flex w-2/3 flex-col justify-between sm:w-3/4 sm:flex-row'>
                        <h4 className='p-2'>{jobInfo.title}</h4>
                        <h4 className='p-2'>{jobInfo.timeframe}</h4>
                    </span>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <h4 className='font-extrabold'>{jobInfo.company}</h4>
                <h4 className='pt-4 font-bold'>Job Details</h4>
                <ul className='list-disc p-4' id='details'>
                    {jobInfo.details.map((detail, index) => (
                        <li className='p-1' key={index}>
                            <p>{detail}</p>
                        </li>
                    ))}
                </ul>
                <h4 className='font-bold'>Tech Used</h4>
                <span className='flex flex-wrap justify-evenly'>
                    {jobInfo.tech?.map((tech) => (
                        <div
                            className='flex flex-col items-center p-2'
                            key={tech.key}
                        >
                            <div className='large-icon'>{tech}</div>
                            <h5>{tech.key}</h5>
                        </div>
                    ))}
                </span>
            </AccordionDetails>
        </Accordion>
    );
}

/**
 * Component that talks about previous employment experience.
 * @returns work timeline section of the page.
 */
function Work() {
    // Holds MUI TimelinItems for each job.
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
        <section>
            <h2 className='p-4 font-semibold sm:p-0 sm:pt-4 sm:pb-4'>
                Work Experience
            </h2>
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {timeLineItems}
                <TimelineDot />
            </Timeline>
        </section>
    );
}

export default Work;
