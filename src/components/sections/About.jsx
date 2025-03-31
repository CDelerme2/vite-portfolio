import { RevealOnScroll } from "../ReveaolOnScroll";

export const About = () => {
  const FE_skills = [
    "React",
    "JavaScript",
    "Typescript",
    "Next.js",
    "Redux",
    "Tailwind/CSS",
  ];
  const BE_skills = ["API integration", "RDBMS", "MySQL", "Node.js", "GraphQL"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl max-auto px-4">
          {/* <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"> */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 leading-right bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-0.5 transition-all">
            <p className="text-gray-300 mb-6">
              I am a passionate developer with expertise in building scalabe web
              applications and creating innovative solutiions. I have
              significant hands-on work experience implementing web development
              best practices and principles. My work experience and skillsets
              make me a strong candidate for any Web-based development role
              requiring initiative, innovation and leadership and my employment
              history reveals a strong work ethic.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6  hover:-translate-y-0.5 transition-all">
                <h3 className="text-xl mb-4 font-bold">Front End</h3>
                <div className="flex flex-wrap gap-2">
                  {FE_skills.map((item, i) => {
                    return (
                      <span
                        key={i}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-med hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-xl p-6  hover:-translate-y-0.5 transition-all">
                <h3 className="text-xl mb-4 font-bold">Back End</h3>
                <div className="flex flex-wrap gap-2">
                  {BE_skills.map((item, i) => {
                    return (
                      <span
                        key={i}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-med hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-0.5 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6  hover:-translate-y-0.5 transition-all">
                <h3 className="text-xl mb-4 font-bold">Experience</h3>
                <div className="flex flex-wrap gap-2">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    {/* <li className="text-med">
                      <strong>A.A.S in Information Systems Technology</strong> -
                      SUNY Farmingdale [2000]
                    </li> */}
                    <li className="text-med">
                      <strong>Freelance Web Developor</strong> [2024-Present]
                    </li>
                    <li className="text-med">
                      <strong>Front End UI Consultant</strong> - Global Logic,
                      Inc. [2024]
                    </li>
                    <li className="text-med">
                      <strong>Front End Developer</strong> - Flexible Business
                      Systems, Inc. [2023-2024]
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-0.5 transition-all">
                <h3 className="text-xl mb-4 font-bold">&nbsp;</h3>
                <div className="flex flex-wrap gap-2">
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li className="text-med">
                      <strong>Full Stack Developer</strong> - HealthStream, Inc.
                      [2016-2022]
                    </li>
                    <li className="text-med">
                      <strong>Senior Web Developer</strong> - Ambassador College
                      Bookstores, Inc. [2008-2015]
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
