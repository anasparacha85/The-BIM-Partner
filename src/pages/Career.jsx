import React from 'react';
import WeAreHiringSection from '../components/partials/career/WeAreHiring';
import OpenedPositionsSection from '../components/partials/career/OpenPositionSection';

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

      {/* Sections */}
      <WeAreHiringSection />

      {/* Embedded Job Application Form */}
      <div className="max-w-7xl mx-auto px-4 my-12">
        <iframe
          src="https://techie-soft.com/system/job-application-form/eyJpdiI6ImVGQTRuTitkWW4zSUs1Y0trWlBWc1E9PSIsInZhbHVlIjoiblQ3M2pRNFp6TERWejJUMjJpT1lQUT09IiwibWFjIjoiYTc4ZTlmMDVlNWE0MTk5OTYzODE3NDdhNTU3MjdmNzQ1YmIwMjliZTQxZjdmZDllNWNjOTU2YzRiMTQyNjc1ZCIsInRhZyI6IiJ9"
          width="100%"
          height="750"
          style={{ overflow: 'hidden', border: 'none' }}
          frameBorder="0"
          title="Job Application Form"
        ></iframe>
      </div>

      <OpenedPositionsSection />
    </div>
  );
};

export default CareerPage;
