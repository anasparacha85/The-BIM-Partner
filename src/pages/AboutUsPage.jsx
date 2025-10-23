import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import HeroSection from '../components/partials/About/HeroSection';
import SkillsSection from '../components/partials/About/SKillsSection';
import TeamSection from '../components/partials/About/TeamSection';
// Main About Us Page Component
const AboutUsPage=()=> {
  return (
    <div className="min-h-screen">
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