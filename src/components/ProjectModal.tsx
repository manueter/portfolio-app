import { useEffect } from "react";
import { Project } from "../types/types.ts";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white justify-center rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
        <button
          className="absolute top-4 right-4 text-white hover:text-red-500 hover:bg-red-300 transition-all 3s"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-black text-2xl font-bold mb-4">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-96 rounded-lg  object-cover overflow-clip"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/imgs/img-not-found.jpg";
          }}
        />

        <div className="flex mt-4 justify-center items-center">
          <div className="flex flex-wrap gap-2 mt-2">
            {project.skills.map((skill) => (
              <span
                key={skill}
                className="mx-2 px-3 py-1 bg-blue-100 text-blue-600  items-center rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <p className="text-gray-700 mt-6">{project.description}</p>
        <div className="w-full flex justify-around mt-6">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              Go to project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
