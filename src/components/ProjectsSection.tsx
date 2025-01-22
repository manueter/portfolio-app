import { useState } from "react";
import { projectsData } from "../data/projects";
import FilterButtons from "./FilterButtons";
import ProjectCard from "./ProjectCard";
import { Project } from "../types/types";
import ProjectModal from "./ProjectModal";

const ProjectsSection = () => {
  const [selectedType, setSelectedType] = useState<"software" | "hardware">(
    "software"
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // Modal state

  const filteredProjects = projectsData.filter(
    (project) => project.type === selectedType
  );

  const handleReadMore = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className={`mt-12 flex-col`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>

      {/* Filter Buttons */}
      <FilterButtons
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onReadMore={handleReadMore}
          />
        ))}
      </div>
      {
        selectedProject ? 
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        :
        <>
        </>
      }
      
    </div>
  );
};

export default ProjectsSection;
