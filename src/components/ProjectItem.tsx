

import errorimg from "/imgs/img-not-found.jpg";

interface Project{


}

const ProjectItem = ()=>{

    return (<div
        key={project.id}
        className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
      >
        <img
          className="h-48 w-full object-cover"
          src={project.image}
          alt={project.title}
          onError={(e) => {
            (e.target as HTMLImageElement).src =
            errorimg;
          }}
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {project.title}
          </h3>
          <p className="mt-2 text-gray-600">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>)
}

export default ProjectItem;