import React, { useState } from 'react';
import HighRIseBuilding1 from '/public/HighriseBuildings1.jpg'
import HighRIseBuilding2 from  '/public/HighRIsebuiding2.jpg'
import HighRIseBuilding3 from '/public/highrisebuilding3.jpg'
import MetroInfrastructure from '/public/MetroInfrastructure.jpg'
import Highway from '/public/HigwayInfrasturcture.jpg'
import AirpoortInfras from '/public/RailwayInfrastructure.jpg'
import OilGas from '/public/OilandGas.jpg'
import ManufactureFacility from '/public/ManufacturingFacility.jpg'
import PowerPlant from '/public/PowerPlant.jpg'
const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  // BIM Project Categories
const projectCategories = {
  "high-rise": [
    {
      title: "Residential Tower, Dubai Marina",
      description:
        "Full BIM modeling and coordination for a 45-story luxury residential tower, including MEP integration.",
      image:
        HighRIseBuilding1,
      buttonText: "View Project",
    },
    {
      title: "Commercial High-Rise, Downtown Dubai",
      description:
        "4D scheduling and clash detection for a mixed-use high-rise with retail, office, and parking facilities.",
      image:
       HighRIseBuilding2,
      buttonText: "View Project",
    },
    {
      title: "Luxury Skyscraper, Dubai",
      description:
        "Structural BIM and digital twin creation for a 60-floor residential and commercial skyscraper.",
      image:
      HighRIseBuilding3,
      buttonText: "View Project",
    },
  ],

  "infrastructure": [
    {
      title: "Airport Expansion, UAE",
      description:
        "Scan-to-BIM and digital twin implementation for new passenger terminals and support facilities.",
      image:AirpoortInfras,
      buttonText: "View Project",
    },
    {
      title: "Metro Rail Project",
      description:
        "BIM project management for underground stations and elevated tracks, ensuring on-time delivery.",
      image:MetroInfrastructure,
      buttonText: "View Project",
    },
    {
      title: "Highway Bridge Project",
      description:
        "Bridge design coordination using BIM with clash detection for structural and MEP services.",
      image:Highway,
      buttonText: "View Project",
    },
  ],

  // "healthcare": [
  //   {
  //     title: "Specialized Hospital Facility",
  //     description:
  //       "BIM coordination for complex MEP systems in a 500-bed multi-specialty hospital.",
  //     image:
  //       "https://images.unsplash.com/photo-1576765608603-d6c7f05f11f1?w=600&auto=format&fit=crop&q=80",
  //     buttonText: "View Project",
  //   },
  //   {
  //     title: "Medical Research Center",
  //     description:
  //       "3D BIM models with HVAC and lab equipment integration for a modern research facility.",
  //     image:
  //       "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600&auto=format&fit=crop&q=80",
  //     buttonText: "View Project",
  //   },
  //   {
  //     title: "Children’s Hospital, Europe",
  //     description:
  //       "5D BIM cost estimation and construction sequencing for a pediatric hospital project.",
  //     image:
  //       "https://images.unsplash.com/photo-1504439904031-93ded9b3f796?w=600&auto=format&fit=crop&q=80",
  //     buttonText: "View Project",
  //   },
  // ],

  "industrial": [
    {
      title: "Oil & Gas Processing Plant",
      description:
        "BIM modeling and simulation for process piping, structures, and safety compliance.",
      image:OilGas,
      buttonText: "View Project",
    },
    {
      title: "Manufacturing Facility",
      description:
        "Comprehensive BIM workflows for plant layout, machinery installation, and MEP coordination.",
      image:ManufactureFacility,
      buttonText: "View Project",
    },
    {
      title: "Power Generation Plant",
      description:
        "4D BIM scheduling and safety compliance modeling for a modern power generation plant.",
      image:PowerPlant,
      buttonText: "View Project",
    },
  ],

  // "mixed-use": [
  //   {
  //     title: "Urban Mixed-Use Development",
  //     description:
  //       "3D BIM modeling and 5D cost planning for a large-scale development with retail, offices, and residences.",
  //     image:
  //       "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=600&auto=format&fit=crop&q=80",
  //     buttonText: "View Project",
  //   },
  //   {
  //     title: "Business & Retail Center",
  //     description:
  //       "End-to-end BIM for a commercial hub integrating retail outlets, business spaces, and food courts.",
  //     image:
  //       "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?w=600&auto=format&fit=crop&q=80",
  //     buttonText: "View Project",
  //   },
  //   {
  //     title: "Smart City Complex",
  //     description:
  //       "BIM digital twin implementation for smart city development with residential, commercial, and green zones.",
  //     image:
  //       "https://images.unsplash.com/photo-1536224108687-88c6740f47d2?w=600&auto=format&fit=crop&q=80",
  //     buttonText: "View Project",
  //   },
  // ],
};


  // Flatten all categories for "All" tab
  const allProjects = Object.values(projectCategories).flat();

  // Current projects based on active tab
  const currentProjects =
    activeTab === "all" ? allProjects : projectCategories[activeTab] || [];

  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our BIM Projects
          </h2>
          <div className="mt-3 w-24 h-1 bg-orange-500 mx-auto"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {[
            { key: "all", label: "All" },
            { key: "high-rise", label: "High-Rise Buildings" },
            { key: "infrastructure", label: "Infrastructure" },
          
            { key: "industrial", label: "Industrial" },
              {/* { key: "healthcare", label: "Healthcare" },
            { key: "mixed-use", label: "Mixed-Use" } */}
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 font-medium transition-all duration-300 
                ${
                  activeTab === tab.key
                    ? "text-black border-b-4 border-orange-500"
                    : "text-gray-600 hover:text-gray-900"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentProjects.map((p, index) => (
            <div
              key={index}
              className="relative group rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
            >
              {/* Image */}
              <img
                src={p.image}
                alt="project"
                className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/70 flex flex-col items-start justify-end 
                text-center p-6 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 
                transition-all duration-500 ease-in-out space-y-4"
              >
                <h3 className="text-white text-xl font-semibold">
                  {p.title}
                </h3>
                <p className="text-sm text-start text-gray-200 line-clamp-3">
                  {p.description}
                </p>
                {/* <button className="px-5 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition">
                  {p.buttonText}
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
