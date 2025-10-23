import React, { useState } from 'react';
import { Award, BookOpen, Check, ChevronRight, Users } from 'lucide-react';

// Top Categories Sidebar Component
const TopCategoriesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
const categories = [
  "BIM Fundamentals",
  "Revit Architecture",
  "Revit MEP",
  "Revit Structure",
  "Navisworks (Clash Detection)",
  "4D & 5D BIM Scheduling",
  "Scan to BIM",
  "BIM Project Management",
  "BIM Execution Planning",
  "COBie & Data Management",
  "BIM Coordination Services",
  "Virtual Design & Construction (VDC)",
  "LOD (Level of Development) Standards",
  "BIM for Infrastructure",
  "Facility Management with BIM",
  "BIM Software Tools Training"
];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
        <h3 className="text-white text-xl font-bold text-center">
          Top Categories
        </h3>
      </div>

      {/* Categories List */}
      <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto custom-scrollbar">
        {categories.map((category, index) => (
          <button
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="w-full px-6 py-3 flex items-center justify-between group hover:bg-gray-50 transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <ChevronRight 
                className={`w-4 h-4 text-orange-500 transition-transform duration-200 ${
                  hoveredIndex === index ? 'translate-x-1' : ''
                }`}
              />
              <span className={`text-left font-medium transition-colors duration-200 ${
                hoveredIndex === index ? 'text-orange-500' : 'text-gray-700'
              }`}>
                {category}
              </span>
            </div>
            <ChevronRight 
              className={`w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                hoveredIndex === index ? 'translate-x-1' : ''
              }`}
            />
          </button>
        ))}
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(242, 107, 53);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(242, 107, 58);
        }
      `}</style>
    </div>
  );
};

// Course Content Section with integrated Top Categories
const CourseContentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const courseOutline = [
    "Know the key BIM standards",
    "Work in the direction of fulfillment",
    "Deal with the data delivery cycle",
    "Learn and employ COBie",
    "Benefits of BIM and Potential of BIM Models",
    "Execute BIM protocols and standards",
    "Work in common data settings",
    "Learn the basics of BIM level 2 compliance",
    "Virtual Prototyping of Models",
    "Build up an organization and supply chain",
    "Recognize drawings managing and level of detail",
    "Recognize prospects and concerns by adoption of BIM"
  ];

  const whyChooseUs = [
    { icon: <Award />, text: "70+ Certification courses" },
    { icon: <Check />, text: "Certified by leading IT Companies" },
    { icon: <Users />, text: "10,000+ Successful Students" },
    { icon: <BookOpen />, text: "Realtime Project Based Training" }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content - 7 columns */}
          <div className="lg:col-span-8 space-y-12">
            {/* About Course */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                BIM Course in Dubai
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  BIM (Building Information Modelling) is an inclining concept in Civil Engineering. Create and 
                  oversee computerized portrayals of physical and practical attributes of Structural Elements.
                </p>
                <p>
                  This preparation course helps you handle BIM projects professionally. Join our BIM course to 
                  advance your career in managing BIM projects with industry-leading training.
                </p>
                <p>
                  Our BIM training institute in Dubai is your destination for building data management systems 
                  expertise. Learn from skilled personnel at reasonable prices with practical, hands-on experience.
                </p>
              </div>
            </div>

            {/* Course Outline */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Course Outline
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {courseOutline.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-lg border border-gray-200 hover:border-orange-500 hover:shadow-lg transition-all">
                    <div className="text-orange-500 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Content */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Who Wants the BIM Course?
              </h3>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  This course is apt for people such as engineers, temporary workers, mechanical, electrical, directors and entrepreneurs. Also, administrations engineers and different experts, sub-contractual workers, providers, draftsmen, chiefs, in all segments of the development and foundation industries.
                </p>
              </div>

              <h3 className="text-2xl mt-8 font-bold text-gray-900 mb-4">
                Revit Architecture
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Revit Architecture offers a unique chance to focus on the basic thing. Also, it is the artistic part of the design of the building. Thus, you will be capable of working with models in any useful portrayal. Apart from this, easily and quickly making alterations, planning working drawings judging by 3D models
                </p>
              </div>

              <h3 className="text-2xl mt-8 font-bold text-gray-900 mb-4">
                Revit MEP
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Do you want to use the Autodesk Revit MEP software and work smoothly? Thus, Learnovate training institute Revit MEP training will assist you develop all the skills to master this course. Also, institute provides the flexible timing option for Students.
                </p>
              </div>

              <h3 className="text-2xl mt-8 font-bold text-gray-900 mb-4">
                Revit Structure
              </h3>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  All the BIM basics will be provided by getting trained with Revit Structure training. Also, Learnovate training institute is offering training on Revit structure training in Dubai at reasonable prices. In addition, the course duration is around 45 hours
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - 5 columns */}
          <div className="lg:col-span-4 space-y-8">
            {/* Top Categories - Desktop Only */}
            <div className="hidden lg:block">
              <TopCategoriesSection />
            </div>

            {/* Request Form */}
            <div className="bg-orange-500 text-white p-8 rounded-lg sticky top-24">
              <h3 className="text-2xl font-bold mb-6">Request Course Info</h3>
              
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-white rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-white rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  placeholder="Course Name"
                  className="w-full px-4 py-3 bg-white rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button 
                  onClick={handleSubmit}
                  className="w-full bg-white uppercase text-orange-500 hover:bg-gray-100 py-3 rounded font-semibold transition-all transform hover:scale-105"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Top Categories - Below Content */}
        <div className="lg:hidden mt-12">
          <TopCategoriesSection />
        </div>
      </div>
    </section>
  );
};

export default CourseContentSection;