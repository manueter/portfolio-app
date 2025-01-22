import { FaCode, FaMicrochip } from "react-icons/fa";
interface FilterButtonsProps {
    selectedType: "software" | "hardware"; // Use string literals for stricter typing
    setSelectedType: (type: "software" | "hardware") => void; // Function to update the selected type
  }
  
const FilterButtons: React.FC<FilterButtonsProps> = ({ selectedType, setSelectedType }:FilterButtonsProps) => {
  return (
    <div className="justify-center flex space-x-4 mb-8">
      <button
        onClick={() => setSelectedType("software")}
        className={`flex items-center px-6 py-3 rounded-lg ${
          selectedType === "software"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700"
        } transition-all duration-300 ease-in-out`}
      >
        <FaCode className="mr-2" />
        Software Projects
      </button>
      <button
        onClick={() => setSelectedType("hardware")}
        className={`flex items-center px-6 py-3 rounded-lg ${
          selectedType === "hardware"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700"
        } transition-all duration-300 ease-in-out`}
      >
        <FaMicrochip className="mr-2" />
        Hardware Projects
      </button>
    </div>
  );
};

export default FilterButtons;