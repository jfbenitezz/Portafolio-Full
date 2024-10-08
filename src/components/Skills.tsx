import{ useState } from 'react';
import { skillCategories } from '../data/skills.data';

 export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);


  // Handle card click
  const handleCardClick = (category: string) => {
    setSelectedCategory(category);
  };

  // Handle click outside the modal to close it
  const handleOutsideClick = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="skills" className="relative p-8 bg-ocean-dark-blue text-white h-1/2 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">My Skills</h2>
  
      {/* The cards that will only show titles at first */}
      <div className={`flex flex-col items-center gap-4 transition-all duration-300 ${selectedCategory ? 'blur-md' : ''}`}>
        {skillCategories.map((category) => (
          <div 
            key={category.category} 
            className="w-64 p-4 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700"
            onClick={() => handleCardClick(category.category)}
          >
            <h3 className="text-lg font-bold text-center">{category.category}</h3>
          </div>
        ))}
      </div>

      {/* Modal for the expanded card with skill details */}
      {selectedCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-50" onClick={handleOutsideClick}>
          <div 
            className="bg-white bg-opacity-80 text-black p-8 rounded-lg shadow-lg max-w-lg w-full relative" 
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicked inside the card
          >
            {/* Modal content showing the expanded skills */}
            <h3 className="text-2xl font-bold mb-4">{selectedCategory}</h3>

            {/* Find the selected category and display its skills */}
            {skillCategories
              .find((category) => category.category === selectedCategory)?.skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}

            {/* Button to close the modal */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};