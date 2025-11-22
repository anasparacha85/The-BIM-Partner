import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/partials/About/HeroSection';
import SkillsSection from '../components/partials/About/SKillsSection';
import TeamSection from '../components/partials/About/TeamSection';
// Main About Us Page Component
const AboutUsPage=()=> {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Your BIM Partner",
    "url": "https://yourbimpartner.com/about",
    "description": "Learn about Your BIM Partner's team, expertise, and commitment to BIM engineering excellence.",
    "organization": {
      "@type": "Organization",
      "name": "Your BIM Partner",
      "url": "https://yourbimpartner.com"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Us - Your BIM Partner | Expert BIM Engineering Team"
        description="Learn about Your BIM Partner's experienced team, core values, and commitment to delivering world-class BIM engineering and staffing solutions."
        keywords="about BIM partner, BIM team, engineering expertise, BIM company, professional BIM services"
        url="https://yourbimpartner.com/about"
        structuredData={structuredData}
      />
      <HeroSection />
      <SkillsSection />
      <TeamSection />
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-white {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
export default AboutUsPage