import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Clock, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Dribbble, Search } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import WelcomeSection from '../components/partials/Home/WelcomeSection';
import ServicesSection from '../components/partials/Home/ServiceSection';
import JoinCommunity from '../components/partials/Home/JoinCommunitySection';
import ProjectsSection from '../components/partials/Home/ProjectsSection';
import QuoteRequestComponent from '../components/partials/Home/QuotesSection';
import Testimonials from '../components/partials/Home/TestimonialsSection';
import { useNavigate } from 'react-router-dom';

const Home1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
const navigate=useNavigate()
const heroSlides = [
  {
    title: "Building Information Modeling",
    subtitle: "Smarter Construction",
    description:
      "We deliver advanced BIM solutions that enhance project efficiency, accuracy, and collaboration across all stakeholders — from concept to completion.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "3D Modeling & Visualization",
    subtitle: "Design with Precision",
    description:
      "Transform ideas into intelligent 3D models that provide clear visualization, improved communication, and data-rich designs for better decision-making.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Clash Detection & Coordination",
    subtitle: "Reduce Risks",
    description:
      "Identify and resolve design conflicts before construction begins. Our BIM clash detection ensures smooth project execution and reduces costly errors.",
    image:
           "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80",
  },
  {
    title: "4D & 5D BIM",
    subtitle: "Time & Cost Management",
    description:
      "Integrate project scheduling (4D) and cost estimation (5D) with BIM models to ensure projects are delivered on time and within budget.",
    image:
      "https://images.unsplash.com/photo-1503389152951-9f343605f61e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Digital Twin & Facility Management",
    subtitle: "Beyond Construction",
    description:
      "Leverage digital twin technology for lifecycle management. From maintenance to asset management, BIM extends value long after construction.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  },
];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gray-100">
  

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all z-20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  {index === currentSlide && (
                    <>
                      <h3 className="text-white text-lg mb-4 animate-fade-in-up">{slide.subtitle}</h3>
                      <h1 className="text-white text-5xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
                        {slide.title}
                      </h1>
                      <p className="text-white/90 text-lg mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
                        {slide.description}
                      </p>
                      <button onClick={()=>navigate('/contact')} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-4 rounded text-lg font-semibold transition-all transform hover:scale-105 animate-fade-in-up animation-delay-600">
                        CONTACT US
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Feature Cards */}
      <div className="md:-translate-y-15">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {/* Accurate BIM Models */}
      <div className="bg-orange-500 text-white px-8 py-10 text-center">
        <h3 className="text-2xl font-bold mb-2">Accurate BIM Models</h3>
        <p className="text-orange-100">
          100% Data-Rich & Coordinated Designs
        </p>
      </div>

      {/* Clash Detection & Coordination */}
      <div className="bg-gray-900 text-white p-8 text-center">
        <h3 className="text-2xl font-bold mb-2 text-orange-500">
          Clash-Free Coordination
        </h3>
        <p className="text-gray-300">
          Minimize Errors Before Construction
        </p>
      </div>

      {/* 4D & 5D BIM */}
      <div className="bg-gray-800 text-white p-8 text-center">
        <h3 className="text-2xl font-bold mb-2 text-orange-500">
          4D & 5D BIM
        </h3>
        <p className="text-gray-300">
          Integrating Time & Cost for Efficiency
        </p>
      </div>
    </div>
  </div>
</div>

      <WelcomeSection/>
    
         <ServicesSection/>
         <JoinCommunity/>
         <ProjectsSection/>
         <div id='quotes'>
          <QuoteRequestComponent/>
         </div>
         
         <Testimonials/>
    
     

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Home1;