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
    {
      id: '1',
      title: 'Research Assistant in Machine Learning',
      companyOrSchool: 'Universidad del Norte',
      duration: '06/2023 - 12/2023',
    },
    {
      id: '2',
      title: "Full Stack Developer",
      companyOrSchool: 'Freelance Projects',
      duration: '01/2022 - Present',
    },
  ];
  
  export const education: ExperienceData[] = [
    {
      id: '1',
      title: "Bachelor's in Computer Science",
      companyOrSchool: 'Universidad del Norte',
      duration: '08/2020 - 12/2025 (Expected)',
    },
  ];
  export const recognitions: ExperienceData[] = [
    // Add recognitions data here
  ];

  export const tabs = [
    { id: 'professional', label: 'Professional', data: professionalExperience, sectionId: 'professional-experience' },
    { id: 'education', label: 'Education', data: education, sectionId: 'education-experience' },
  ];