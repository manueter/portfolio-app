
import AboutMe from "./AboutMe";
import ProjectsSection from "./ProjectsSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-200 rounded-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <AboutMe/>
        <ProjectsSection/>
      </div>
    </div>
  );
};

export default Portfolio;