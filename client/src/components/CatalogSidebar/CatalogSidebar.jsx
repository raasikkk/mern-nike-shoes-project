import "./CatalogSidebar.css";
import { useState } from "react";

const CatalogSidebar = () => {
  const [openSections, setOpenSections] = useState({});
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});

  const toggleSidebar = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handleOptionChange = (section, option) => {
    setSelectedOptions((prev) => {
      const sectionOptions = prev[section] || [];
      if (sectionOptions.includes(option)) {
        // Remove the option if it's already selected
        return {
          ...prev,
          [section]: sectionOptions.filter((item) => item !== option),
        };
      } else {
        // Add the option if it's not selected
        return {
          ...prev,
          [section]: [...sectionOptions, option],
        };
      }
    });
  };

  const sections = {
    "Gender": ["Male", "Female"],
    "Brand": ["Nike Sportswear", "Jordan", "Nike By You", "Converse", "NikeLab", "ACG"],
    "Shop by Price": ["$0 - $25", "$25 - $50", "$50 - $100", "$100 - $150" , "$150"],
    "Sports & Activities": ["Lifestyle", "Training & Gym", "Basketball", "Track & Field", "Running"],
    "Collections": ["Air Force ", "Nike Dunk", "Air Max", "Jordan Editions", "Blazer", "Cortez", "Nike Pegasus"],
    "Shoe Height": ["Low Top", "Mid Top", "High Top"],
    "Closure Type": ["Slip On", "Strap", "Zipper", "Toggle", "Pullover", "Laces"],
    "Width": ["Regular", "Wide", "Extra Wide"],
  };

  return (
    <section>
      <div>
        {/* Filter Button for Smaller Screens */}
        <button
          className="block md:hidden bg-gray-200 text-gray-700 rounded px-4 py-2 mb-4 focus:outline-none"
          onClick={toggleFilter}
        >
          Filter
        </button>

        {/* Sidebar Container */}
        <div
          className={`w-64 bg-white shadow-md p-4 transition-transform duration-300 
          ${filterOpen ? "block" : "hidden md:block"}`}
        >
          {Object.keys(sections).map((section) => (
            <div key={section}>
              <button
                className="flex justify-between w-full text-left py-2 font-semibold text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={() => toggleSidebar(section)}
              >
                {section}
                <span>{openSections[section] ? "-" : "+"}</span>
              </button>
              {openSections[section] && (
                <div className="pl-4">
                  <ul>
                    {sections[section].map((option) => (
                      <li key={option} className="py-1 text-gray-600">
                        <label>
                          <input
                            type="checkbox"
                            checked={selectedOptions[section]?.includes(option) || false}
                            onChange={() => handleOptionChange(section, option)}
                            className="mr-2"
                          />
                          {option}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSidebar;
