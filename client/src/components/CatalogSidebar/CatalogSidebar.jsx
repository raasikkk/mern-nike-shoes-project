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
    Gender: ["Male", "Female"],
    Brand: [
      "Nike Sportswear",
      "Jordan",
      "Nike By You",
      "Converse",
      "NikeLab",
      "ACG",
    ],
    "Shop by Price": [
      "$0 - $25",
      "$25 - $50",
      "$50 - $100",
      "$100 - $150",
      "$150",
    ],
    "Sports & Activities": [
      "Lifestyle",
      "Training & Gym",
      "Basketball",
      "Track & Field",
      "Running",
    ],
    Collections: [
      "Air Force ",
      "Nike Dunk",
      "Air Max",
      "Jordan Editions",
      "Blazer",
      "Cortez",
      "Nike Pegasus",
    ],
    "Shoe Height": ["Low Top", "Mid Top", "High Top"],
    "Closure Type": [
      "Slip On",
      "Strap",
      "Zipper",
      "Toggle",
      "Pullover",
      "Laces",
    ],
    Width: ["Regular", "Wide", "Extra Wide"],
  };

  return (
    <section>
      <div className="">
        <div className="w-100">
          <button
            className="flex ml-[2.5vw] font-medium border border-gray-300 px-6 py-2 rounded-3xl lg:hidden"
            onClick={toggleFilter}
          >
            Filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22px"
              viewBox="0 -960 960 960"
              width="22px"
              fill="#000"
            >
              <path d="M200-160v-280h-80v-80h240v80h-80v280h-80Zm0-440v-200h80v200h-80Zm160 0v-80h80v-120h80v120h80v80H360Zm80 440v-360h80v360h-80Zm240 0v-120h-80v-80h240v80h-80v120h-80Zm0-280v-360h80v360h-80Z" />
            </svg>
          </button>
        </div>

        {/* Pop-up Filter Section */}
        <div
          className={`w-screen mb-4 transition-all duration-300 ease-in-out lg:hidden overflow-hidden ${
            filterOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          {Object.keys(sections).map((section) => (
            <div key={section} className="border-b 360:p-4">
              <button
                className="flex gap-1"
                onClick={() => toggleSidebar(section)}
              >
                <span>{section}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSections[section] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  openSections[section]
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {openSections[section] && (
                  <div>
                    <ul>
                      {sections[section].map((option) => (
                        <li key={option} className="mt-3 ml-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={
                                selectedOptions[section]?.includes(option) ||
                                false
                              }
                              onChange={() =>
                                handleOptionChange(section, option)
                              }
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
            </div>
          ))}
        </div>

        <div className="360:hidden lg:block">
          {Object.keys(sections).map((section) => (
            <div key={section} className="w-52 xl:w-96">
              <button
                className="w-full pb-4 xl:pb-8 mb-4 xl:mb-8 flex justify-between border-b border-gray-400"
                onClick={() => toggleSidebar(section)}
              >
                <span className="text-sm xl:text-2xl">{section}</span>
                <svg
                  className={`w-5 h-5 xl:h-8 xl:w-8 transition-transform duration-200 ${
                    openSections[section] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  openSections[section]
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {openSections[section] && (
                  <div className="mb-5 xl:mb-8">
                    <ul>
                      {sections[section].map((option) => (
                        <li key={option} className="mb-3 ml-2">
                          <label className="flex items-center text-sm xl:text-2xl">
                            <input
                              type="checkbox"
                              checked={
                                selectedOptions[section]?.includes(option) ||
                                false
                              }
                              onChange={() =>
                                handleOptionChange(section, option)
                              }
                              className="mr-2 xl:h-5 xl:w-5"
                            />
                            {option}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSidebar;
