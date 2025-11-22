import React, { useState } from 'react';
import SEO from '../components/SEO';
import services from '../data/servicesData';
import { Link, useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const navigate=useNavigate()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "BIM Services",
    "url": "https://yourbimpartner.com/services",
    "description": "Comprehensive BIM services including modeling, clash detection, 4D/5D BIM, and more."
  };

//  const services = [
//     {
//       id: 1,
//       title: "Agricultural Processing",
//       image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=300&fit=crop",
//       description: "Induzy's Advanced Solutions for Smarter Farming Industries. At Induzy – Industry & Factory, we specialize in delivering cutting-edge agricultural processing solutions that",
//       fullDescription: "Induzy's Advanced Solutions for Smarter Farming Industries. At Induzy – Industry & Factory, we specialize in delivering cutting-edge agricultural processing solutions that enhance productivity and sustainability in modern farming operations."
//     },
//     {
//       id: 2,
//       title: "Chemical Research",
//       image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=300&fit=crop",
//       description: "Induzy's Drive for Safer, Smarter Industrial Solutions. At Induzy – Industry & Factory, our chemical research division is dedicated to advancing",
//       fullDescription: "Induzy's Drive for Safer, Smarter Industrial Solutions. At Induzy – Industry & Factory, our chemical research division is dedicated to advancing innovative solutions that prioritize safety and efficiency in industrial applications."
//     },
//     {
//       id: 3,
//       title: "Material Engineering",
//       image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
//       description: "Induzy's Smart Solutions for Stronger, Sustainable Industries. At Induzy – Industry & Factory, our Material Engineering expertise empowers industries to choose and",
//       fullDescription: "Induzy's Smart Solutions for Stronger, Sustainable Industries. At Induzy – Industry & Factory, our Material Engineering expertise empowers industries to choose and implement materials that enhance durability, performance, and environmental responsibility."
//     },
//     {
//       id: 4,
//       title: "Mechanical Engineering",
//       image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=500&h=300&fit=crop",
//       description: "Induzy's Precision-Driven Solutions for Industrial Success. At Induzy – Industry & Factory, our Mechanical Engineering expertise powers the heart of industrial operations.",
//       fullDescription: "Induzy's Precision-Driven Solutions for Industrial Success. At Induzy – Industry & Factory, our Mechanical Engineering expertise powers the heart of industrial operations, delivering innovative mechanical solutions that drive efficiency and reliability."
//     },
//     {
//       id: 5,
//       title: "Petroleum and Gas",
//       image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
//       description: "Induzy's Trusted Solutions for a Safer, Smarter Energy Industry. At Induzy – Industry & Factory, our Petroleum and Gas services provide reliable,",
//       fullDescription: "Induzy's Trusted Solutions for a Safer, Smarter Energy Industry. At Induzy – Industry & Factory, our Petroleum and Gas services provide reliable, cutting-edge solutions that ensure safety and efficiency in energy operations."
//     },
//     {
//       id: 6,
//       title: "Power and Energy",
//       image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=300&fit=crop",
//       description: "Induzy's Innovative Solutions for a Reliable Industrial Future. At Induzy – Industry & Factory, we specialize in delivering advanced Power and Energy",
//       fullDescription: "Induzy's Innovative Solutions for a Reliable Industrial Future. At Induzy – Industry & Factory, we specialize in delivering advanced Power and Energy solutions that support sustainable industrial growth and reliable energy infrastructure."
//     }
//   ];

  return (
    <div className="min-h-screen ">
      <SEO 
        title="Our BIM Services | Professional Solutions for Construction"
        description="Explore our comprehensive BIM services including 3D modeling, clash detection, 4D/5D BIM, and facility management solutions."
        keywords="BIM services, 3D modeling, clash detection, BIM coordination, construction services"
        url="https://yourbimpartner.com/services"
        structuredData={structuredData}
      />
      {/* Breadcrumb Header */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black uppercase">Our Services</h1>
          <p className="text-gray-600">
            Home / <span className="text-black">Our Services</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Services Cards (Scrollable) */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className=" overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={`${service.title} - BIM Service`}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {/* <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div> */}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                    <div className="w-12 h-1 bg-orange-400 mb-4"></div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                      <Link 
        to={`/services/${service.slug}`} 
        className="text-orange-400 hover:text-orange-600 font-semibold"
      >
        READ MORE »
      </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-8 space-y-8">
              {/* Help Section */}
              <div className="bg-orange-500 text-white p-8 rounded-lg ">
                <h3 className="text-2xl font-bold mb-6">DO YOU NEED ANY HELP?</h3>
                <p className="mb-8 leading-relaxed">
                  My job is to help professionals to achieve their industrial goals 
                  whilst having adequate protection along the way.
                </p>
                <button onClick={()=>navigate('/contact')} className="bg-white cursor-pointer text-orange-500 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  CONTACT NOW
                </button>
              </div>

              {/* Testimonial Section */}
              <div className="bg-white p-8 ">
              <div className='bg-gray-50 px-3 py-2'>
                <div className="text-orange-500 text-6xl font-bold mb-4">"</div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We were struggling with supply chain delays and material wastage 
                  that were costing us heavily. After engaging with this industrial 
                  consulting firm, we experienced a major transformation. They 
                  restructured our vendor relationships, introduced just-in-time inventory
                </p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <img 
                      src= "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">David Johnson</h4>
                    <p className="text-gray-600">
                      President, <span className="text-orange-400 font-semibold">Induzy Pvt Ltd</span>
                    </p>
                  </div>
                </div>

                <button className="w-full bg-orange-500 text-white py-4 rounded mt-8 font-bold hover:bg-orange-600 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center">
                  <span className="mr-2">📊</span>
                  COMPANY PRESENTATION
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed top-1/4 left-4 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-pulse"></div>
      <div className="fixed top-1/2 right-8 w-3 h-3 bg-orange-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="fixed bottom-1/4 left-1/4 w-1 h-1 bg-orange-500 rounded-full opacity-50 animate-ping" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default ServicesPage;