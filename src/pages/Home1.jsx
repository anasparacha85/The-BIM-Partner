import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/common/Navbar';
import WelcomeSection from '../components/partials/Home/WelcomeSection';
import ServicesSection from '../components/partials/Home/ServiceSection';
import JoinCommunity from '../components/partials/Home/JoinCommunitySection';
import ProjectsSection from '../components/partials/Home/ProjectsSection';
import QuoteRequestComponent from '../components/partials/Home/QuotesSection';
import Testimonials from '../components/partials/Home/TestimonialsSection';
import { useNavigate } from 'react-router-dom';
import BIMImage from '/public/bim.jpg'
import threeD from '/public/3DModeling.jpg'
import fourD from '/public/4ddesign.jpg'
import clashDetection from '/public/clashdetection.jpg'
const Home1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Your BIM Partner",
    "url": "https://yourbimpartner.com",
    "description": "Professional BIM engineering, staffing solutions, and training for construction projects",
    "image": "https://yourbimpartner.com/LOGO_The BIM Partner.jpg",
    "priceRange": "$$"
  };

  const heroSlides = [
    {
      title: 'Building Information Modeling',
      subtitle: 'Smarter Construction',
      description:
        'We deliver advanced BIM solutions that enhance project efficiency, accuracy, and collaboration across all stakeholders — from concept to completion.',
      image:BIMImage
    },
    {
      title: '3D Modeling & Visualization',
      subtitle: 'Design with Precision',
      description:
        'Transform ideas into intelligent 3D models that provide clear visualization, improved communication, and data-rich designs for better decision-making.',
      image:
        threeD,},
    {
      title: 'Clash Detection & Coordination',
      subtitle: 'Reduce Risks',
      description:
        'Identify and resolve design conflicts before construction begins. Our BIM clash detection ensures smooth project execution and reduces costly errors.',
      image:
        clashDetection
    },
    {
      title: '4D & 5D BIM',
      subtitle: 'Time & Cost Management',
      description:
        'Integrate project scheduling (4D) and cost estimation (5D) with BIM models to ensure projects are delivered on time and within budget.',
      image:
fourD    },
   
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
  console.log(window.innerHeight*0.8);
  

  return (
    <div className="min-h-screen bg-gray-100">
      <SEO 
        title="Your BIM Partner - Professional BIM Engineering & Solutions"
        description="Professional BIM engineering services, staffing solutions, and training. Your BIM Partner delivers advanced Building Information Modeling for construction success."
        keywords="BIM services, BIM engineering, BIM modeling, construction technology, BIM solutions"
        url="https://yourbimpartner.com"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <div className="relative  h-[80vh] bg-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="relative w-full h-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[100%] "
              />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
          ))}
        </div>

        {/* Arrows */}
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

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-start">
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
                      <h3 className="text-white text-lg mb-4 animate-fade-in-up">
                        {slide.subtitle}
                      </h3>
                      <h1 className="text-white text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
                        {slide.title}
                      </h1>
                      <p className="text-white/90 text-lg mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
                        {slide.description}
                      </p>
                      <button
                        onClick={() => navigate('/contact-us')}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded text-lg font-semibold transition-all transform hover:scale-105 animate-fade-in-up animation-delay-600"
                      >
                        CONTACT US
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
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

      {/* Feature Cards */}
      <div className="md:-mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3">
          <div className="bg-orange-500 text-white px-8 py-10 text-center">
            <h3 className="text-2xl font-bold mb-2">Accurate BIM Models</h3>
            <p className="text-orange-100">100% Data-Rich & Coordinated Designs</p>
          </div>

          <div className="bg-gray-900 text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-orange-500">Clash-Free Coordination</h3>
            <p className="text-gray-300">Minimize Errors Before Construction</p>
          </div>

          <div className="bg-gray-800 text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-orange-500">4D & 5D BIM</h3>
            <p className="text-gray-300">Integrating Time & Cost for Efficiency</p>
          </div>
        </div>
      </div>

      <WelcomeSection />
      <ServicesSection />
      <JoinCommunity />
      <ProjectsSection />
      <div id="quotes">
        <QuoteRequestComponent />
      </div>
      <Testimonials />

      {/* Animations */}
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
