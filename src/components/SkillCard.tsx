import React, { useState } from 'react';

interface SkillCardProps {
  category: string;
  skills: { name: string; level: number }[];
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`p-4 rounded-lg transition-transform duration-300 ${
        isOpen ? 'transform scale-105' : ''
      } bg-blue-800 text-white shadow-lg hover:cursor-pointer`}
    >
      <h2 className="text-xl font-bold">{category}</h2>
      {isOpen && (
        <div className="mt-2">
          {skills.map((skill) => (
            <div key={skill.name} className="flex justify-between">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillCard;
