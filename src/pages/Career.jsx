import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Settings } from 'lucide-react';
import WeAreHiringSection from '../components/partials/career/WeAreHiring';
import OpenedPositionsSection from '../components/partials/career/OpenPositionSection';


// Main Career Page
const CareerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold text-gray-900">CAREER</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <span>Home</span>
              <span>/</span>
              <span className="text-gray-900">Career</span>
            </div>
          </div>
        </div>
      </div>

      <WeAreHiringSection />
      <OpenedPositionsSection />
    </div>
  );
};

export default CareerPage;