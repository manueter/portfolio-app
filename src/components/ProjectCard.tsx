import { Project } from "../types/types.ts";

interface ProjectCardProps {
  project: Project;
  onReadMore: (project: Project) => void; // Callback to handle "Read More" clicks
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onReadMore }) => {
  return (
    <div className="bg-slate-300 border-blue-400 border-2 rounded-lg shadow-lg overflow-hidden transform hover:bg-slate-400 hover:scale-105 hover:border-4 transition-transform duration-300">
      <img
        className="h-48 w-full object-cover"
        src={project.image}
        alt={project.title}
        onError={(e) => {
          (e.target as HTMLImageElement).src = "./imgs/img-not-found.jpg";
        }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-gray-600">
          {project.description.length > 100
            ? `${project.description.slice(0, 100)}...`
            : project.description}
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => onReadMore(project)}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
