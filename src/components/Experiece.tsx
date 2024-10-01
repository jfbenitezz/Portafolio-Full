import React, { useState } from 'react';

interface ExperienceData {
  id: string;
  title: string;
  companyOrSchool: string;
  duration: string;
}

interface SectionProps {
  id: string;
  data: ExperienceData[];
  title: string;
}

const Section: React.FC<SectionProps> = ({ id, data }) => {
  return (
    <section id={id} className="sm:w-[400px] w-[300px] h-[300px] p-4 bg-blue-900 text-white overflow-y-scroll overflow-hidden">
      <ol className="space-y-2">
        {data.map((item, index) => (
          <li key={item.id} className="text-sm">
            <span className="font-bold">{`${index + 1}. ${item.companyOrSchool}`}</span>
            <p>{item.title}</p>
            <p>{item.duration}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export function Experience () {
  const [activeTab, setActiveTab] = useState('professional');

  const professionalExperience: ExperienceData[] = [
    { id: '1', title: 'Full-Time Front-End Web Developer', companyOrSchool: 'Overnights', duration: '09/2022 - To Date' },
    { id: '2', title: 'Full-Time Front-End Web Developer', companyOrSchool: 'Zemoga SAS', duration: '03/2022 - 05/2022' },
    { id: '3', title: 'Part-Time Undergraduate Professor for Back-End Development Course', companyOrSchool: 'Universidad del Norte', duration: '02/2022 - To Date' },
    { id: '4', title: 'Part-Time Front-End Web Developer', companyOrSchool: 'Blocksize Capital GmbH', duration: '11/2021 - 10/2022' },
    { id: '5', title: 'Full-Time Full Stack Web and Mobile Developer', companyOrSchool: 'JPG SAS', duration: '06/2021 - 03/2022' },
    { id: '6', title: 'Full-Time Full Stack Web Developer', companyOrSchool: 'Sandstorm Studios SAS', duration: '05/2021 - 09/2021' }
  ];

  const education: ExperienceData[] = [
    { id: '1', title: "Master's in Systems Engineering", companyOrSchool: 'Universidad del Norte', duration: '08/2020 - To Date' },
    { id: '2', title: "Bachelor's in Systems Engineering", companyOrSchool: 'Universidad del Norte', duration: '08/2015 - 11/2020' },
    { id: '3', title: 'Computer Science Major', companyOrSchool: 'Georgia State University', duration: '08/2014 - 05/2015' }
  ];

  const recognitions: ExperienceData[] = [
    // Add recognitions data here
  ];

  const tabs = [
    { id: 'professional', label: 'Professional', data: professionalExperience, sectionId: 'professional-experience' },
    { id: 'education', label: 'Education', data: education, sectionId: 'education-experience' },
    { id: 'recognitions', label: 'Recognitions', data: recognitions, sectionId: 'recognitions' }
  ];

  return (
    <section id="experience" className="pt-20 pb-20 p-4 bg-ocean-dark-blue h-1/2 text-white flex flex-col items-center">
      <h1 className="text-center sm:text-4xl text-xl font-bold text-gradient mb-4">Experience</h1>
      <div className="flex justify-center space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`sm:px-4 py-2 ${activeTab === tab.id ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="h-[300px]">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <Section key={tab.sectionId} id={tab.sectionId} data={tab.data} title={tab.label} />
          ) : null
        )}
      </div>
    </section>
  );
};

