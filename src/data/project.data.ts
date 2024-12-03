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
    images: ['realestate-1.png', 'realestate-2.png', 'realestate-3.png', 'realestate-4.png'],
    technologies: ['Node.js', 'React', 'MongoDB', 'AWS', ' S3 Storage',  'Redis'],
    githubLink: 'https://github.com/your-repo',
  },
  {
    title: 'E-Commerce Website ',
    description: 'Built a responsive e-commerce site using React.js and TypeScript. Features include product listings with filters, promotional banners, and reusable components..',
    images: ['ecommerce-1.png', 'ecommerce-2.png', 'ecommerce-3.png', 'ecommerce-4.png'],
    technologies: ['React.js', 'TypeScript', 'HTML', 'CSS', 'Render'],
    githubLink: 'https://github.com/G5-APOLLO/WEB-FE-HTML-CSS-PRJ2-APOLLO',
    liveLink: 'https://web-fe-html-css-prj2-apollo.onrender.com',
  },
  {
    title: 'Zillow Web Scraper – Cloud-Based Data Pipeline',
    description: 'A cloud-native web scraper built using AWS Lambda and EC2 to extract real estate data from Zillow. Utilized RDS for structured data storage and CloudWatch for monitoring and performance tracking.',
    images: ['zillow-1.png', 'zillow-2.png', 'zillow-3.png', 'zillow-4.png'],
    technologies: ['AWS Lambda', 'EC2', 'RDS', 'S3', 'CloudWatch'],
    githubLink: 'https://github.com/your-repo',
  },
  {
    title: 'Web Solutions CRM Project',
    description: 'Developed a CRM application to streamline customer management and business opportunity tracking. The app features modules for client and opportunity management, follow-up tracking, and a dashboard for key metrics visualization. Built with React.js for the frontend and Node.js for the backend.',
    images: ['crm-1.png', 'crm-2.png', 'crm-3.png', 'crm-4.png'],
    technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'Redux', 'Material UI'],
    githubLink: 'https://github.com/G5-APOLLO/WEB-FE-PRJ3-APOLLO',
    liveLink: 'https://web-fe-prj3-apollo-zh7q.onrender.com/',
  },  
  {
    title: 'CacheSim - Simulador de Caché',
    description: 'Developed a cache mapping simulator. This tool allows users to visualize and experiment with cache management and storage in computer systems, making it an educational resource for understanding different cache mapping techniques.',
    images: ['cachesim-1.png', 'cachesim-2.png'],
    technologies: ['JavaScript', 'React.js', 'Docker', 'Node.js'],
    githubLink: 'https://github.com/FernandoMVG/cachesim',
  }
  
];