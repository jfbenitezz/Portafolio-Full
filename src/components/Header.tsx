export function Header() {
    return (
      <header className="bg-ocean-dark-blue text-white p-4 fixed w-full top-0 shadow-md z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">MyPortfolio</div>
          <ul className="flex space-x-6">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
