import "./App.css";
import "./index.css";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { NavBar } from "./components/NavBar";
import { MobilNav } from "./components/MobileNav";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {isLoading && (
        <LoadingScreen
          onComplete={() => {
            setIsLoading(false);
          }}
        />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 bg-black, text-grey-100 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobilNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
