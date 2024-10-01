import React, { useState } from 'react';
import { SectionProps,tabs } from '../data/experience.data';


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

  return (
    <section id="experience" className="pt-20 pb-20 p-4 bg-ocean-dark-blue h-1/2 text-white flex flex-col items-center">
      <h1 className="text-center sm:text-4xl text-xl font-bold text-gradient mb-4">Experience</h1>
      <div className="flex justify-center space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`sm:px-4 px-1 py-2 ${activeTab === tab.id ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded-lg`}
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

