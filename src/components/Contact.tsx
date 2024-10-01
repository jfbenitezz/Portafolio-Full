import Typewriter from 'typewriter-effect';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="p-20 bg-ocean-dark-blue text-white text-center">
      {/* Title with Typewriter Effect */}
      <h2 className="text-4xl font-bold mb-8">
        <Typewriter
          options={{
            strings: ['Let\'s Chat', 'Let\'s Connect', 'Let\'s Collaborate'],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </h2>

      {/* Contact Links */}
      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
        <a
          href="https://github.com/jfbenitezz"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-blue-800 rounded-lg flex items-center justify-between transition-transform hover:bg-blue-700 hover:scale-105"
        >
          <span>GitHub</span>
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-benitez-8a45b732b/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-blue-800 rounded-lg flex items-center justify-between transition-transform hover:bg-blue-700 hover:scale-105"
        >
          <span>LinkedIn</span>
          <FaLinkedin size={24} />
        </a>
        <a
          href="mailto:fjbacareer@gmail.com"
          className="p-4 bg-blue-800 rounded-lg flex items-center justify-between transition-transform hover:bg-blue-700 hover:scale-105"
        >
          <span>Mail</span>
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://jfbenitezz.github.io/Portafolio-Full/resume.pdf"
          download="Resume_Felipe_Benitez.pdf"
          className="p-4 bg-blue-800 rounded-lg flex items-center justify-between transition-transform hover:bg-blue-700 hover:scale-105"
        >
          <span>Resume</span>
          <FaDownload size={24} />
        </a>
      </div>
    </section>
  );
};


