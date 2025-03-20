// import { useEffect } from "react";

export const MobilNav = ({ menuOpen, setMenuOpen }) => {
  const menuClassName = `fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto"
            : "h-0 opacity-0 pointer-events-none"
        }
        `;
  const menuItemClassName = `text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }
            `;

  return (
    <div className={menuClassName}>
      <button
        className="absolute top-6 right-6 text-white text-3xl, focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(false)}
        aria-label="Close"
      >
        &times;
      </button>
      <a
        href="#home"
        className={menuItemClassName}
        onClick={() => setMenuOpen(false)}
        aria-label="Home"
      >
        Home
      </a>
      <a
        href="#about"
        className={menuItemClassName}
        onClick={() => setMenuOpen(false)}
        aria-label="About"
      >
        About
      </a>
      <a
        href="#projects"
        className={menuItemClassName}
        onClick={() => setMenuOpen(false)}
        aria-label="Projects"
      >
        Projects
      </a>
      <a
        href="#contact"
        className={menuItemClassName}
        onClick={() => setMenuOpen(false)}
        aria-label="Contact"
      >
        Contact
      </a>
    </div>
  );
};
