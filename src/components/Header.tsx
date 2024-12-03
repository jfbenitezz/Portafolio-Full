import { FaUser, FaBriefcase, FaProjectDiagram, FaLaptopCode, FaPhone } from 'react-icons/fa';
import { useEffect } from 'react';

export function Header() {
  return (
    useEffect(() => {
      const links = document.querySelectorAll("a[href^='#']");
  
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent the default anchor behavior
          
  
          const targetId = link.getAttribute("href");
          // @ts-ignore
          const targetElement = document.querySelector(targetId);
  
          window.scrollTo({
            // @ts-ignore
            top: targetElement.offsetTop - 100,
            behavior: "smooth",
          });
        });
      });
    }, []),
    
    <header className="bg-ocean-dark-blue text-white p-4 fixed w-full top-0 shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold animated-title">Felipe Benitez</div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#about" className="flex items-center hover:text-gray-300 transition">
              <FaUser className="mr-2" /> About
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center hover:text-gray-300 transition">
              <FaLaptopCode className="mr-2" /> Skills
            </a>
          </li>
          <li>
            <a href="#experience" className="flex items-center hover:text-gray-300 transition">
              <FaBriefcase className="mr-2" /> Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center hover:text-gray-300 transition">
              <FaProjectDiagram className="mr-2" /> Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center hover:text-gray-300 transition">
              <FaPhone className="mr-2" /> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
