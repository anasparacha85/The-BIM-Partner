import React, { useState } from 'react';
import { Phone, MessageCircle, Check, Users, Award, Briefcase, Clock, Target, ChevronRight, Mail } from 'lucide-react';
import SEO from '../components/SEO';
import StaffingHeroSection from '../components/partials/Staffing/HeroSection';
import StaffingContentSection from '../components/partials/Staffing/StaffingContentSection';
import StatsSection from '../components/partials/Staffing/StatsSection';


// Main Page Component
const BIMStaffingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "BIM Staffing Solutions",
    "url": "https://yourbimpartner.com/bim-staffing",
    "description": "Professional BIM staffing solutions providing expert BIM professionals for construction projects.",
    "provider": {
      "@type": "Organization",
      "name": "Your BIM Partner",
      "url": "https://yourbimpartner.com"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="BIM Staffing Solutions | Hire Expert BIM Professionals"
        description="Your BIM Partner provides professional BIM staffing solutions with experienced BIM coordinators, modelers, and engineers for your construction projects."
        keywords="BIM staffing, hire BIM professionals, BIM coordinator jobs, BIM modelers, staffing solutions"
        url="https://yourbimpartner.com/bim-staffing"
        structuredData={structuredData}
      />
      <StaffingHeroSection />
      <StaffingContentSection />
      <StatsSection />
    </div>
  );
};
export default BIMStaffingPage;