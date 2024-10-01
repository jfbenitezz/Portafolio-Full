
import Typewriter from 'typewriter-effect';

export function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white py-20 flex items-center justify-center">
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-6">
          Hi, I'm
          <span className="ml-2 text-ocean-dark-blue font-semibold">
            <Typewriter
              options={{
                strings: ['a Fullstack Developer', 'a Backend Developer', 'a Frontend Developer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </span>
        </p>
        <p>I specialize in building scalable and user-friendly applications.</p>
      </div>
    </section>
  );
};
