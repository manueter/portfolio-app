import { aboutData } from "../data/personal";
import { FaDownload } from "react-icons/fa";


const AboutMe = () => {
  return (
    <div className="relative bg-yellow-50 rounded-lg shadow-lg overflow-hidden">
      <a
        href="./resume_manuel_nunez.pdf"
        download
        className="absolute top-4 right-4 flex items-center justify-center p-2 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-700 transition"
        aria-label="Download Resume"
      >
        <FaDownload className="w-6 h-6" />
        <span className="sr-only">Download Resume</span>
        <div className="absolute top-full mt-1 w-32 text-center bg-gray-800 text-white text-xs rounded-lg py-1 shadow-md opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
          My Resume
        </div>
      </a>
      <div className="md:flex p-8">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-48 rounded-full border-2 border-opacity-45 border-slate-700 object-cover mx-auto md:mx-0"
            src={aboutData.image}
            alt="Profile"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "./imgs/img-not-found.jpg";
            }}
          />
        </div>
        <div className="text-left mt-2  md:ml-8 xs:text-center">
          <h1 className="text-3xl font-bold text-gray-900">{aboutData.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{aboutData.role}</p>
          <p className="mt-4 text-gray-500">{aboutData.bio[0]}</p>
          <p className="text-gray-500">{aboutData.bio[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
