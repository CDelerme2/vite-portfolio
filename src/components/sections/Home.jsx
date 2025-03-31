import { RevealOnScroll } from "../ReveaolOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 leading-right bg-clip-text text-transparent">
            Carlos Delerme : Web Developer
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
            I am a Mid-Senior level Full Stack Developer with 15+ years’
            experience building interactive Web-based applications across
            various industries in an agile environment. I have work experience
            in various front-end technologies including React, JavaScript,
            TypeScript, Redux, Next.js, HTML, and Tailwind/CSS and working
            knowledge of JS frameworks like Angular and Vue. I also have
            significant experience in back-end methodologies such as RDBMS, SQL,
            RESTful APIs and familiar with Node.js, Express, and GraphQL.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-3 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]
            "
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 "
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
