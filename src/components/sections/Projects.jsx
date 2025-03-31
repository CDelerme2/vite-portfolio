import { RevealOnScroll } from "../ReveaolOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl max-auto px-4">
          {/* My work experience and skillsets make me a strong candidate for any Web-based development role
            requiring initiative, innovation and leadership and my employment history reveals a strong work ethic. */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 leading-right bg-clip-text text-transparent  text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* <h3 className="text-xl font-bold mb-2">Pinpoint PC Portal</h3> */}
              <div className="flex justify-between items-center">
                <a
                  className="text-xl font-bold mb-2 text-blue-200 hover:text-blue-300  transition-colors"
                  href="https://www.minecraft.net/en-us"
                  target="_blank"
                >
                  Minecraft Education Portal
                </a>
              </div>
              <p className="text-gray-400 mb-4">
                Responsible for integrating ReactJS library functionality into
                .NET-based Blazor Web Assembly application and proprietary
                AI-based RESTful API endpoints and backend services.
              </p>
              <div>
                {[
                  "React",
                  "JavaScript",
                  "Typescript",
                  "TailwindCSS",
                  "RESTful APIs",
                  "C#/Blazer",
                ].map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-med hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* <h3 className="text-xl font-bold mb-2">Pinpoint PC Portal</h3> */}
              <div className="flex justify-between items-center">
                <a
                  className="text-xl font-bold mb-2 text-blue-200 hover:text-blue-300  transition-colors"
                  href="https://pinpointinc.com/"
                  target="_blank"
                >
                  Pinpoint PC Portal
                </a>
              </div>
              <p className="text-gray-400 mb-4">
                I was a major contributor to the FBS Development Team's efforts
                to build their Pinpoint PC Portal Web app from the ground up
                using React, JavaScript, TypeScript, Next.js, 3rd party
                libraries such as Material UI, and related technologies.
              </p>
              <div>
                {[
                  "React",
                  "Next,js",
                  "Redux",
                  "JavaScript",
                  "Typescript",
                  "TailwindCSS",
                  "APIs",
                ].map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-med hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* <h3 className="text-xl font-bold mb-2">Pinpoint PC Portal</h3> */}
              <div className="flex justify-between items-center">
                <a
                  className="text-xl font-bold mb-2 text-blue-200 hover:text-blue-300  transition-colors"
                  href="https://www.healthstream.com/solution/quality-compliance/regulatory-compliance/conflicts-of-interest"
                  target="_blank"
                >
                  COI-SMART
                </a>
              </div>
              <p className="text-gray-400 mb-4">
                I was a major contributor to the Healthstream Development Team’s
                effort to migrate their legacy COI-SMART web application from a
                PHP/MySQL architecture to a React/PostgreSQL framework and
                helped create the initial unit tests using React, JavaScript,
                Enzyme/Jest and related development tools.
                {/* (See: https://www.healthstream.com/solution/quality-compliance/regulatory-compliance/conflicts-of-interest) */}
              </p>
              <div>
                {["React", "JavaScript", "PHP", "MYSQL", "API Integration"].map(
                  (item, i) => {
                    return (
                      <span
                        key={i}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-med hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {item}
                      </span>
                    );
                  }
                )}
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
              {/* <h3 className="text-xl font-bold mb-2">Pinpoint PC Portal</h3> */}
              <div className="flex justify-between items-center">
                <a
                  className="text-xl font-bold mb-2 text-blue-200 hover:text-blue-300  transition-colors"
                  href="https://www.ambassadored.com/solutions/"
                  target="_blank"
                >
                  Branded Online Bookstores
                </a>
              </div>
              <p className="text-gray-400 mb-4">
                Responsible for extending, maintaining, and troubleshooting
                college-branded dedicated online bookstores and internal
                Webbased Administrator application using ColdFusion, MySQL,
                Flex, JavaScript, CSS, HTML, and related technologies.
              </p>
              <div>
                {[
                  "ColdFusion",
                  "Flex",
                  "JavaScript",
                  "HTML/CSS",
                  "MySQL",
                  "MS SQL Server",
                ].map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-med hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
