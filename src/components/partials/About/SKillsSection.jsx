import { useState } from "react";
import CountUp from "../../../Animations/CountUp";

// Skills Section Component
const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('OUR SKILLS');

  const tabContent = {
    'OUR FACT': {
      title: 'Proven BIM Excellence',
      description:
        'We have delivered BIM solutions across high-rise buildings, healthcare, infrastructure, and industrial facilities. Our track record in delivering on-time, accurate, and coordinated BIM models makes us a trusted partner in the construction industry.',
      stats: [
        { number: '150+', label: 'Projects Delivered' },
        { number: '50+', label: 'Happy Clients' },
        { number: '12', label: 'Years in BIM' },
      ],
    },
    ADVANTAGES: {
      title: 'Why Clients Choose Us',
      description:
        'From clash detection to 5D cost estimation, we ensure precision, efficiency, and collaboration. Our ability to integrate with multidisciplinary teams helps reduce risks, cut costs, and improve project delivery timelines.',
      stats: [
        { number: '98%', label: 'On-Time Delivery' },
        { number: '90%', label: 'Reduced Rework' },
        { number: '100%', label: 'Client Satisfaction' },
      ],
    },
    'OUR SKILLS': {
      title: 'Expertise That Powers BIM Innovation',
      description:
        'Our team is proficient in BIM modeling, project coordination, and advanced simulation. We specialize in applying BIM technology across various domains of construction and facility management.',
      skills: [
        { name: 'BIM Modeling & Coordination', percentage: 95 },
        { name: 'Clash Detection & Risk Mitigation', percentage: 90 },
        { name: '4D Scheduling & 5D Cost Estimation', percentage: 85 },
        { name: 'Scan-to-BIM', percentage: 88 },
        { name: 'Digital Twin Solutions', percentage: 80 },
      ],
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Target Icon */}
              <div className="relative">
                <svg width="300" height="300" viewBox="0 0 300 300" className="transform rotate-12">
                  {/* Target circles */}
                  <circle cx="200" cy="150" r="80" fill="none" stroke="#ef4444" strokeWidth="8" />
                  <circle cx="200" cy="150" r="60" fill="none" stroke="#ef4444" strokeWidth="6" />
                  <circle cx="200" cy="150" r="40" fill="none" stroke="#ef4444" strokeWidth="4" />
                  <circle cx="200" cy="150" r="20" fill="#ef4444" />
                  
                  {/* Arrows */}
                  <path d="M50 100 L180 130" stroke="#3b82f6" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M80 200 L170 170" stroke="#3b82f6" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M120 80 L185 120" stroke="#3b82f6" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M60 160 L170 155" stroke="#3b82f6" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
                  
                  {/* Arrow marker definition */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
                    </marker>
                  </defs>
                </svg>
                
                {/* Character */}
                <div className="absolute -left-16 top-16">
                  <div className="relative">
                    {/* Head */}
                    <div className="w-16 h-16 bg-yellow-300 rounded-full relative mb-2">
                      <div className="absolute top-2 left-4 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute top-2 right-4 w-2 h-2 bg-black rounded-full"></div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
                    </div>
                    
                    {/* Body */}
                    <div className="w-12 h-20 bg-red-500 rounded-lg mx-auto relative">
                      {/* Arms */}
                      <div className="absolute -left-4 top-2 w-8 h-3 bg-yellow-300 rounded-full transform rotate-45"></div>
                      <div className="absolute -right-4 top-2 w-8 h-3 bg-yellow-300 rounded-full transform -rotate-12"></div>
                    </div>
                    
                    {/* Legs */}
                    <div className="flex justify-center gap-2 mt-1">
                      <div className="w-3 h-12 bg-gray-600 rounded-full"></div>
                      <div className="w-3 h-12 bg-gray-600 rounded-full"></div>
                    </div>
                    
                    {/* Telescope */}
                    <div className="absolute right-0 top-8 w-16 h-2 bg-gray-700 rounded-full transform rotate-12"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Tabs */}
            <div className="w-[100%] ">
              {Object.keys(tabContent).map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-5 md:w-[33%] w-[100%] font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } ${
                    index === 0 ? '' : index === Object.keys(tabContent).length - 1 ? '' : ''
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{currentContent.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {currentContent.description}
              </p>

              {/* Skills Progress Bars */}
              {currentContent.skills && (
                <div className="space-y-6">
                  {currentContent.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div 
                          className="h-full bg-gray-800 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.percentage}%`,
                            animationDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Stats */}
              {currentContent.stats && (
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 mt-8">
                  {currentContent.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-orange-500 mb-2">
                       <CountUp
                                         from={0}
                                         to={stat.number}
                                         separator=","
                                         direction="up"
                                         duration={0.5}
                                         className="count-up-text "
                                       /> 
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkillsSection