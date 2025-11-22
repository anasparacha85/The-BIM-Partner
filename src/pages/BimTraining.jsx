import React, { useState } from 'react';
import { ChevronRight, Phone, MessageCircle, Check, Star, Plus, Minus, Award, Clock, Users, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import BIMHeroSection from '../components/partials/Training/HeroSetion';
import PaymentOptionsSection from '../components/partials/Training/PaymentOptionSection';
import CourseContentSection from '../components/partials/Training/CourseContent';
import FAQSection from '../components/partials/Training/FAQSandRelated';





const BIMTrainingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "BIM Training Program",
    "url": "https://yourbimpartner.com/bim-training",
    "description": "Comprehensive BIM training courses to master Building Information Modeling for construction professionals.",
    "provider": {
      "@type": "Organization",
      "name": "Your BIM Partner",
      "url": "https://yourbimpartner.com"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "245"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="BIM Training Courses | Learn Building Information Modeling"
        description="Master BIM with our comprehensive training programs. Learn from industry experts and advance your career in Building Information Modeling."
        keywords="BIM training, BIM courses, building information modeling training, BIM certification, construction technology"
        url="https://yourbimpartner.com/bim-training"
        structuredData={structuredData}
      />
      <BIMHeroSection />
      {/* <PaymentOptionsSection /> */}
      <CourseContentSection />
      <FAQSection />
    </div>
  );
};

export default BIMTrainingPage;