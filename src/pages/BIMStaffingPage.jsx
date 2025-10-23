import React, { useState } from 'react';
import { Phone, MessageCircle, Check, Users, Award, Briefcase, Clock, Target, ChevronRight, Mail } from 'lucide-react';
import StaffingHeroSection from '../components/partials/Staffing/HeroSection';
import StaffingContentSection from '../components/partials/Staffing/StaffingContentSection';
import StatsSection from '../components/partials/Staffing/StatsSection';


// Main Page Component
const BIMStaffingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <StaffingHeroSection />
      <StaffingContentSection />
      <StatsSection />
    </div>
  );
};

export default BIMStaffingPage;