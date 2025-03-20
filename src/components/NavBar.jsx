import { useEffect } from "react";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  console.log({ menuOpen });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            delerme<span className="text-blue-500">.dev</span>
          </a>

          <div
            className={`w-7 h-5 relative cursor-pointer z-40 md:hidden`} //
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8 ">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
