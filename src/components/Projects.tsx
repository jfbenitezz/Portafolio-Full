import { useState } from 'react';
import { importImage } from '../utils/importImage';
import { projects } from '../data/project.data';


export function Projects() {
  const [detailedView, setDetailedView] = useState(false);
  const [selectedImage, setSelectedImage] = useState(projects[0].images[0]); // default to first image

  return (
    <section id="projects" className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <button
          onClick={() => setDetailedView(!detailedView)}
          className="bg-ocean-dark-blue text-white px-4 py-2 rounded mb-8"
        >
          {detailedView ? 'Switch to Card View' : 'Switch to Detailed View'}
        </button>

        <div className={`grid gap-8 mt-8 ${detailedView ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              {detailedView ? (
                <div className="lg:flex gap-8">
                  {/* Left - Image Gallery */}
                  <div className="lg:w-1/2 flex flex-col space-y-4">
                    <div className="bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src={importImage(selectedImage)}
                        alt={project.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    <div className="flex space-x-4">
                      {project.images.map((image, i) => (
                        <img
                          key={i}
                          src={importImage(image)}
                          alt={`Thumbnail ${i + 1}`}
                          className={`w-24 h-24 object-cover cursor-pointer rounded-lg ${selectedImage === image ? 'ring-2 ring-ocean-dark-blue' : ''}`}
                          onClick={() => setSelectedImage(image)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right - Project Details */}
                  <div className="lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                      <p className="text-lg mb-6">{project.description}</p>

                      <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
                      <ul className="list-disc list-inside space-y-2">
                        {project.technologies.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-ocean-dark-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-all"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                // Card View
                <div>
                  <img
                    src={importImage(project.images[0])}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
