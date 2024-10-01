import Typewriter from 'typewriter-effect';
import { importImage } from '../utils/importImage';

export function Present() {
  return (
    //background color 0A2E4D
    
    <section id="Present" className="h-screen bg-ocean-dark-blue py-20 flex items-center justify-center">
      <div className="text-center max-w-3xl">
        {/* Header */}
        <h1 className="text-5xl font-bold  mt-8 mb-4">Hi, I am Felipe</h1>
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          <Typewriter
            options={{
              strings: ['Full Stack Developer', 'Backend Developer', 'Frontend Developer'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>

        {/* Description */}
        <p className="text-lg mb-8">
          I am a Full-Stack Developer specializing in building scalable and user-friendly applications in the cloud.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/jfbenitezz" target="_blank" rel="noreferrer">
            <img src={importImage('github.svg') }alt="GitHub" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/felipe-benitez-8a45b732b/" target="_blank" rel="noreferrer">
            <img src={importImage('linkedin.svg') } alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="mailto:fjbacareer@gmail.com" target="_blank" rel="noreferrer">
            <img src={importImage('mail.svg') } alt="Mail" className="w-8 h-8" />
          </a>
        </div>

        {/* Resume Button */}
        <a
        href="Portafolio-Full/resume.pdf"
        download="Resume_Felipe_Benitez.pdf" // This specifies the filename for the download
        className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
      >
        Resume
      </a>
      </div>
    </section>
  );
}
