import { type EducationInfo, degrees } from './constants';
import { type JSX } from 'react';

function Degree({
    educationInfo,
}: {
    educationInfo: EducationInfo;
}): JSX.Element {
    return (
        <div className='text-theme bg-color-1 m-4 flex flex-col rounded-2xl p-4 sm:flex-row'>
            <div className='rounded-2xl p-2 sm:w-1/2 sm:self-center'>
                <a
                    href={educationInfo.website}
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img
                        className='mario:bg-transparent rounded-2xl bg-white object-scale-down p-4'
                        src={educationInfo.icon}
                    />
                </a>
            </div>
            <span className='flex flex-col justify-around text-center font-bold sm:w-1/2 sm:text-start'>
                <h4 className='p-4'>{educationInfo.degree}</h4>
                <h4 className='p-4'>{educationInfo.college}</h4>
                <h4 className='p-4'>{educationInfo.timeframe}</h4>
                <h4 className='p-4'>{educationInfo.gpa}</h4>
            </span>
        </div>
    );
}

function Education() {
    const education = degrees.map((degree, index) => (
        <Degree key={index} educationInfo={degree} />
    ));

    return (
        <section>
            <h2 className='text-theme p-4 font-semibold'>Education</h2>
            {education}
        </section>
    );
}

export default Education;
