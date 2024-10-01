export interface ExperienceData {
    id: string;
    title: string;
    companyOrSchool: string;
    duration: string;
  }
  
 export interface SectionProps {
    id: string;
    data: ExperienceData[];
    title: string;
  }
  
export const professionalExperience: ExperienceData[] = [
    { id: '1', title: 'Full-Time Front-End Web Developer', companyOrSchool: 'Overnights', duration: '09/2022 - To Date' },
    { id: '2', title: 'Full-Time Front-End Web Developer', companyOrSchool: 'Zemoga SAS', duration: '03/2022 - 05/2022' },
    { id: '3', title: 'Part-Time Undergraduate Professor for Back-End Development Course', companyOrSchool: 'Universidad del Norte', duration: '02/2022 - To Date' },
    { id: '4', title: 'Part-Time Front-End Web Developer', companyOrSchool: 'Blocksize Capital GmbH', duration: '11/2021 - 10/2022' },
    { id: '5', title: 'Full-Time Full Stack Web and Mobile Developer', companyOrSchool: 'JPG SAS', duration: '06/2021 - 03/2022' },
    { id: '6', title: 'Full-Time Full Stack Web Developer', companyOrSchool: 'Sandstorm Studios SAS', duration: '05/2021 - 09/2021' }
  ];

  export const education: ExperienceData[] = [
    { id: '1', title: "Master's in Systems Engineering", companyOrSchool: 'Universidad del Norte', duration: '08/2020 - To Date' },
    { id: '2', title: "Bachelor's in Systems Engineering", companyOrSchool: 'Universidad del Norte', duration: '08/2015 - 11/2020' },
    { id: '3', title: 'Computer Science Major', companyOrSchool: 'Georgia State University', duration: '08/2014 - 05/2015' }
  ];

  export const recognitions: ExperienceData[] = [
    // Add recognitions data here
  ];

  export const tabs = [
    { id: 'professional', label: 'Professional', data: professionalExperience, sectionId: 'professional-experience' },
    { id: 'education', label: 'Education', data: education, sectionId: 'education-experience' },
    { id: 'recognitions', label: 'Recognitions', data: recognitions, sectionId: 'recognitions' }
  ];