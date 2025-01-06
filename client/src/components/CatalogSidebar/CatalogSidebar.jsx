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
      
    </section>
  );
};

export default CatalogSidebar;
