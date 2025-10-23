import React, { useState } from 'react';
import { ChevronRight, Phone, MessageCircle, Check, Star, Plus, Minus, Award, Clock, Users, BookOpen } from 'lucide-react';
import BIMHeroSection from '../components/partials/Training/HeroSetion';
import PaymentOptionsSection from '../components/partials/Training/PaymentOptionSection';
import CourseContentSection from '../components/partials/Training/CourseContent';
import FAQSection from '../components/partials/Training/FAQSandRelated';





const BIMTrainingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <BIMHeroSection />
      {/* <PaymentOptionsSection /> */}
      <CourseContentSection />
      <FAQSection />
    </div>
  );
};

export default BIMTrainingPage;