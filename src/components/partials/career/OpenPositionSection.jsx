import { ChevronDown, ChevronUp, Settings } from "lucide-react";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Job Position Component
const JobPosition = ({ position, isExpanded, onToggle }) => {
 const technicalSkills = {
    'BIM Modeler': [
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Revit & Navisworks Expertise' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: '3D Modeling & Documentation' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Family Creation & Parametric Modeling' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Clash Detection Preparation' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Detailing & Shop Drawings' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Coordination with Architects & Engineers' }
    ],
    'BIM Coordinator': [
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Model Coordination & Review' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Clash Detection (Navisworks)' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Interdisciplinary Collaboration' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'BIM Execution Plans (BEP)' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Quality Control of Models' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: '4D Scheduling Integration' }
    ],
    'BIM Manager': [
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'BIM Standards & Protocols' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Team Leadership & Training' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Client & Stakeholder Coordination' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Project BIM Execution Strategy' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: '5D Cost Integration' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Digital Twin & Facility Management Support' }
    ],
    'BIM Project Engineer': [
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'BIM Project Coordination' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Construction Sequencing (4D)' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Quantity Take-Offs (5D)' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'RFIs & Submittal Coordination' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Site-to-Model Verification' },
      { icon: <Settings className="w-5 h-5 text-orange-500" />, text: 'Collaboration with Contractors & Consultants' }
    ]
  };
  const navigate=useNavigate()

  const jobDescriptions = {
    'BIM Modeler': 'Responsible for creating detailed 3D models in Revit and ensuring accurate documentation for architectural, structural, and MEP systems. BIM Modelers support design teams by producing shop drawings, parametric families, and preparing models for coordination and clash detection.',
    'BIM Coordinator': 'Acts as the link between design and construction teams, managing model coordination and ensuring compliance with BIM Execution Plans. BIM Coordinators run clash detection, maintain quality standards, and facilitate collaboration across disciplines.',
    'BIM Manager': 'Oversees BIM implementation across projects, ensuring adherence to industry standards and company protocols. BIM Managers develop execution strategies, manage teams, engage with clients, and integrate BIM into cost, scheduling, and facility management workflows.',
    'BIM Project Engineer': 'Supports project delivery using BIM workflows including 4D construction sequencing, 5D cost estimation, and site-to-model verification. BIM Project Engineers ensure smooth coordination between contractors, consultants, and design teams.'
  };
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
          isExpanded ? 'bg-gray-800 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        <span className="font-semibold text-lg">{position}</span>
        {isExpanded ? 
          <ChevronUp className="w-5 h-5 text-orange-500" /> : 
          <ChevronDown className="w-5 h-5 text-gray-400" />
        }
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="bg-white p-8 animate-slideDown">
          {/* Job Summary */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Job Summary</h3>
            <p className="text-gray-600 leading-relaxed">
              {jobDescriptions[position]}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {technicalSkills[position]?.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="text-gray-700">{skill.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Button */}
          <div className="mt-8 flex justify-end">
            <button onClick={()=>navigate('/career#apply')} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-all transform hover:scale-105">
              Apply  Here
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Opened Positions Section
const OpenedPositionsSection = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [expandedPosition, setExpandedPosition] = useState('BIM Modeler');

  const positions = [
    'BIM Modeler',
    'BIM Coordinator',
    'BIM Manager',
    'BIM Project Engineer'
  ];

  const handleToggle = (position) => {
    setExpandedPosition(expandedPosition === position ? null : position);
  };

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Opened Positions
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {positions.map((position, index) => (
            <div key={position} style={{ transitionDelay: `${index * 100}ms` }}>
              <JobPosition
                position={position}
                isExpanded={expandedPosition === position}
                onToggle={() => handleToggle(position)}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            max-height: 2000px;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
export default OpenedPositionsSection