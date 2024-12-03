interface Project {
    title: string;
    description: string;
    images: string[];
    technologies: string[];
    githubLink: string;
    liveLink?: string;
  }
  
  export const projects: Project[] = [
  {
    title: 'Full Stack Real Estate Web App',
    description: ' Built a real estate platform using Node.js, React, and MongoDB. Integrated AWS for hosting, media storage, and scalable infrastructure. Optimized performance with Redis caching',
    images: [
      'audio-1.png',
      'audio-2.png',
      'audio-3.png',
    ],
    technologies: ['Node.js', 'React', 'MongoDB', 'AWS', ' S3 Storage',  'Redis'],
    githubLink: 'https://github.com/your-repo',
  },
  {
    title: 'Web Solutions CRM Project',
    description: 'Developed a CRM application to streamline customer management and business opportunity tracking. The app features modules for client and opportunity management, follow-up tracking, and a dashboard for key metrics visualization. Built with React.js for the frontend and Node.js for the backend.',
    images: ['crm-1.png', 'crm-2.png', 'crm-3.png'],
    technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'Redux', 'Material UI'],
    githubLink: 'https://github.com/G5-APOLLO/WEB-FE-PRJ3-APOLLO',
    liveLink: 'https://web-fe-prj3-apollo-zh7q.onrender.com/',
  },  
  {
    title: 'Zillow Web Scraper – Cloud-Based Data Pipeline',
    description: 'A cloud-native web scraper built using AWS Lambda and EC2 to extract real estate data from Zillow. Utilized RDS for structured data storage and CloudWatch for monitoring and performance tracking.',
    images: [
      'audio-1.png',
      'audio-2.png',
      'audio-3.png',
    ],
    technologies: ['AWS Lambda', 'EC2', 'RDS', 'S3', 'CloudWatch'],
    githubLink: 'https://github.com/your-repo',
  },
  {
    title: 'E-Commerce Website ',
    description: 'Built a responsive e-commerce site using React.js and TypeScript. Features include product listings with filters, promotional banners, and reusable components..',
    images: ['ecommerce-1.png', 'ecommerce-2.png', 'ecommerce-3.png'],
    technologies: ['React.js', 'TypeScript', 'HTML', 'CSS', 'Render'],
    githubLink: 'https://github.com/G5-APOLLO/WEB-FE-HTML-CSS-PRJ2-APOLLO',
    liveLink: 'https://web-fe-html-css-prj2-apollo.onrender.com',
  },
  {
    title: 'Syntax Analyzer ',
    description: 'A comprehensive grammar analyzer for context-free grammars that includes FIRST/FOLLOW set calculations, left recursion removal, and predictive parsing table creation.',
    images: [
      'audio-1.png',
      'audio-2.png',
      'audio-3.png',
    ],
    technologies: ['React', 'JavaScript', 'Python', 'Django'],
    githubLink: 'https://github.com/your-repo',
  },
];